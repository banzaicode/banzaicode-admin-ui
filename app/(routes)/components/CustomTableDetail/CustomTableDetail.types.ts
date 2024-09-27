export interface TableRowData {
    id: number;
    name: string;
    price: string;
    description?: string;
  }
  
  export interface CustomTableDetailProps {
    data: TableRowData[]; // Lista de datos de la tabla que el componente recibirá como prop
  }