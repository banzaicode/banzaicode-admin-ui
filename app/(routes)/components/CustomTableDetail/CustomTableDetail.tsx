"use client";

import React, { useState } from "react";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { CustomTableDetailProps } from "./CustomTableDetail.types";

const CustomTableDetail: React.FC<CustomTableDetailProps> = ({ data }) => {
  const [selectedRow, setSelectedRow] = useState<number | null>(null);

  const handleRowClick = (id: number) => {
    setSelectedRow(selectedRow === id ? null : id);
  };

  return (
    <Table>
      <TableHeader>
        <TableRow>
          <TableHead>Nombre</TableHead>
          <TableHead>Precio</TableHead>
        </TableRow>
      </TableHeader>
      <TableBody>
        {data.map((row) => (
          <React.Fragment key={row.id}>
            <TableRow onClick={() => handleRowClick(row.id)} className="cursor-pointer hover:bg-gray-100">
              <TableCell>{row.name}</TableCell>
              <TableCell>{row.price}</TableCell>
            </TableRow>
            {selectedRow === row.id && (
              <TableRow>
                <TableCell colSpan={2} className="bg-gray-50">
                  {row.description}
                </TableCell>
              </TableRow>
            )}
          </React.Fragment>
        ))}
      </TableBody>
    </Table>
  );
};

export default CustomTableDetail;
