import { ReactNode } from 'react';

export interface ColumnDefinition<T> {
  key: keyof T;
  header: string;
  render?: (value: T[keyof T], row: T) => ReactNode;
  isDetail?: boolean;
  initialWidth?: number;
}

export interface CustomTableDetailProps<T> {
  data: T[];
  columns: ColumnDefinition<T>[];
  onRowClick?: (row: T) => void;
  className?: string;
  rowKey?: keyof T;
}