"use client";

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CustomTableDetailProps } from "./CustomTableDetail.types";
import { cn } from "@/lib/utils";
import CustomIcon from '@/components/CustomIcon';
import { ArrowDown, ArrowRight } from 'lucide-react';

const CustomTableDetail: React.FC<CustomTableDetailProps> = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (id: number, description?: string) => {
    if (description) {
      setSelectedRow(selectedRow === id ? null : id);
    }
  };

  return (
    <div className="rounded-md border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-foreground"></TableHead>
            <TableHead className="text-foreground">Nombre</TableHead>
            <TableHead className="text-foreground">Precio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow 
                onClick={() => handleRowClick(row.id, row.description)} 
                className={cn(
                  "cursor-pointer hover:bg-muted/50 transition-colors",
                  selectedRow === row.id && row.description  && "bg-muted"
                )}
              >
                <TableCell className="text-foreground w-10">
                  {row.description ? (selectedRow === row.id ? <CustomIcon icon={ArrowDown} className="bg-transparent" /> : <CustomIcon icon={ArrowRight} className="bg-transparent" />) : ""}
                </TableCell>
                <TableCell className="text-foreground">{row.name}</TableCell>
                <TableCell className="text-foreground">{row.price}</TableCell>
              </TableRow>
              {selectedRow === row.id && row.description  && (
                <TableRow>
                  <TableCell colSpan={3} className="bg-muted/30 text-muted-foreground">
                    <div className="p-2">{row.description}</div>
                  </TableCell>
                </TableRow>
              )}
            </React.Fragment>
          ))}
        </TableBody>
      </Table>
    </div>
  );
};

export default CustomTableDetail;
