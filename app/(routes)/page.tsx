import { Button } from "@/components/ui/button"
import { auth, SignInButton, SignOutButton, UserButton } from "@clerk/nextjs";
import CardSummary from "./components/CardSummary";
import { BookOpenCheck, Bot, Building, InfoIcon, Newspaper, Notebook, UserRound } from "lucide-react";
import CustomTableDetail from "./components/CustomTableDetail";
import CustomTable from "./components/CustomTable";
import CustomWidget from "./components/CustomWidget"

export const dataCardsSummary = [
  {
    icon: Newspaper,
    total: "25",
    title: "Noticias Diarias",
    tooltipText: "Total de noticias del día"
  },
  {
    icon: Notebook,
    total: "700",
    title: "Noticias Totales",
    tooltipText: "Total de noticias en la Base de datos"
  },
  {
    icon: Bot,
    total: "55",
    title: "Noticias con Resumen",
    tooltipText: "Total de noticias que contienen resumen realizado con AI",
    average: 20
  }  
]

const data = [
  { id: 1, name: "Producto 1", price: "$10", description: "Descripción detallada del Producto 1" },
  { id: 2, name: "Producto 2", price: "$20", description: "Descripción detallada del Producto 2" },
  { id: 3, name: "Producto 3", price: "$30", description: "Descripción detallada del Producto 3" },
];

export default async function Home() {
  return (
    <div className="p-4">
      <h2>Dashboard</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-3 lg:gap-x-20">
        {dataCardsSummary.map(({ icon, total, title, tooltipText, average }) => (
          <CardSummary 
            key={title}
            icon={icon}
            total={total}
            title={title}
            tooltipText={tooltipText}
            average={average}
          />
        ))}
      </div>
      <div className="grid grid-cols-1 mt-12 xl:grid-cols-2 md:gap-x-10">
        <div>
          <CustomWidget 
            content={<CustomTable />} 
            title="Custom Table" 
            icon={Building}
          />
        </div>
        <div>
          <CustomWidget 
            content={<CustomTableDetail data={data} />} 
            title="Custom Table Details" 
            icon={InfoIcon} 
          />
        </div>
      </div>
    </div>
  );
}
