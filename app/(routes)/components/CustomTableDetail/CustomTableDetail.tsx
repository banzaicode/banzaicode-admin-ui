"use client";

import React, { useState, useRef, useEffect } from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CustomTableDetailProps } from './CustomTableDetail.types';
import { ChevronDown, ChevronRight } from 'lucide-react';

function CustomTableDetail<T extends Record<string, unknown>>({ data, columns, onRowClick, className, rowKey }: CustomTableDetailProps<T>) {
  const [expandedRows, setExpandedRows] = useState<Record<string | number, boolean>>({});
  const [columnWidths, setColumnWidths] = useState<Record<string, number>>({});
  const [isResizing, setIsResizing] = useState(false);
  const resizingColumn = useRef<string | null>(null);
  const startX = useRef<number>(0);

  useEffect(() => {
    // Inicializar los anchos de las columnas, excluyendo las columnas con isDetail
    const initialWidths: Record<string, number> = {};
    columns.forEach(column => {
      if (!column.isDetail) {
        const key = column.key as string;
        initialWidths[key] = column.initialWidth || 200; // Usar initialWidth si está definido, o un valor predeterminado
      }
    });
    setColumnWidths(initialWidths);
  }, [columns]);

  const handleRowClick = (row: T) => {
    const rowId = rowKey ? row[rowKey] : row.id;
    const hasDescription = row.hasDescription as boolean;
    if (hasDescription) {
      setExpandedRows(prev => ({
        ...prev,
        [rowId as string | number]: !prev[rowId as string | number]
      }));
    }
    if (onRowClick) {
      onRowClick(row);
    }
  };

  const detailColumn = columns.find(col => col.isDetail);

  const startResize = (e: React.MouseEvent<HTMLDivElement>, columnKey: string) => {
    setIsResizing(true);
    resizingColumn.current = columnKey;
    startX.current = e.clientX;
  };

  const stopResize = () => {
    setIsResizing(false);
    resizingColumn.current = null;
  };

  const resize = (e: MouseEvent) => {
    if (isResizing && resizingColumn.current) {
      const diff = e.clientX - startX.current;
      setColumnWidths(prev => ({
        ...prev,
        [resizingColumn.current!]: Math.max(50, prev[resizingColumn.current!] + diff)
      }));
      startX.current = e.clientX;
    }
  };

  useEffect(() => {
    if (isResizing) {
      document.addEventListener('mousemove', resize);
      document.addEventListener('mouseup', stopResize);
    }
    return () => {
      document.removeEventListener('mousemove', resize);
      document.removeEventListener('mouseup', stopResize);
    };
  }, [isResizing]);

  const nonDetailColumns = columns.filter(col => !col.isDetail);

  return (
    <div className={`space-y-4 overflow-x-auto ${className || ''}`}>
      <Table>
        <TableHeader>
          <TableRow className="bg-primary/10 dark:bg-primary/20">
            <TableHead className="w-[50px]"></TableHead>
            {nonDetailColumns.map((column) => (
              <TableHead 
                key={column.key as string} 
                className="font-bold text-primary relative"
                style={{ width: `${columnWidths[column.key as string]}px` }}
              >
                {column.header}
                <div
                  className="absolute right-0 top-0 h-full w-1 cursor-col-resize"
                  onMouseDown={(e) => startResize(e, column.key as string)}
                />
              </TableHead>
            ))}
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => {
            const rowId = rowKey ? row[rowKey] : row.id;
            const isExpanded = expandedRows[rowId as string | number];
            const hasDescription = row.hasDescription as boolean;
            return (
              <React.Fragment key={rowId as string | number}>
                <TableRow 
                  onClick={() => handleRowClick(row)} 
                  className="cursor-pointer hover:bg-secondary/10 dark:hover:bg-secondary/20"
                >
                  <TableCell className="w-[50px]">
                    {hasDescription && (isExpanded ? <ChevronDown size={20} /> : <ChevronRight size={20} />)}
                  </TableCell>
                  {nonDetailColumns.map((column) => (
                    <TableCell 
                      key={column.key as string}
                      style={{ width: `${columnWidths[column.key as string]}px` }}
                    >
                      {column.render ? column.render(row[column.key], row) : row[column.key] as React.ReactNode}
                    </TableCell>
                  ))}
                </TableRow>
                {isExpanded && detailColumn && hasDescription && (
                  <TableRow>
                    <TableCell colSpan={nonDetailColumns.length + 1} className="p-0">
                      <div className="p-4 bg-secondary/5 dark:bg-secondary/10 rounded w-full">
                        {detailColumn.render
                          ? detailColumn.render(row[detailColumn.key], row)
                          : row[detailColumn.key] as React.ReactNode}
                      </div>
                    </TableCell>
                  </TableRow>
                )}
              </React.Fragment>
            );
          })}
        </TableBody>
      </Table>
    </div>
  );
}

export default CustomTableDetail;
