"use client";

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CustomTableDetailProps } from "./CustomTableDetail.types";
import { cn } from "@/lib/utils";

const CustomTableDetail: React.FC<CustomTableDetailProps> = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (id: number) => {
    setSelectedRow(selectedRow === id ? null : id);
  };

  return (
    <div className="rounded-md border border-border">
      <Table>
        <TableHeader>
          <TableRow>
            <TableHead className="text-foreground">Nombre</TableHead>
            <TableHead className="text-foreground">Precio</TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {data.map((row) => (
            <React.Fragment key={row.id}>
              <TableRow 
                onClick={() => handleRowClick(row.id)} 
                className={cn(
                  "cursor-pointer hover:bg-muted/50 transition-colors",
                  selectedRow === row.id && "bg-muted"
                )}
              >
                <TableCell className="text-foreground">{row.name}</TableCell>
                <TableCell className="text-foreground">{row.price}</TableCell>
              </TableRow>
              {selectedRow === row.id && (
                <TableRow>
                  <TableCell colSpan={2} className="bg-muted/30 text-muted-foreground">
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
