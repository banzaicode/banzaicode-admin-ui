import CardSummary from "./components/CardSummary";
import { BarChart, Bot, Building, InfoIcon, Newspaper, Notebook } from "lucide-react";
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import CustomTableDetail from "./components/CustomTableDetail";
import CustomTable from "./components/CustomTable";
import CustomWidget from "./components/CustomWidget"
import CustomChart from "./components/CustomChart";

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
  { id: 2, name: "Producto 2", price: "$20" },
  { id: 3, name: "Producto 3", price: "$30", description: "Descripción detallada del Producto 3" },
  { id: 4, name: "Producto 4", price: "$40", description: "Descripción detallada del Producto 4" },
];

const chartData = [
  { name: "Ene", total: 167 },
  { name: "Feb", total: 190 },
  { name: "Mar", total: 210 },
  { name: "Abr", total: 252 },
  { name: "May", total: 265 },
  { name: "Jun", total: 280 },
];

export default async function Home() {
  return (
    <div className="p-4">
      <h2 className="text-2xl font-bold mb-6 text-foreground">Dashboard</h2>
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
          <Tabs defaultValue="CustomTable" className="w-full">
            <TabsList className="grid w-full grid-cols-2 bg-muted p-1 rounded-lg">
              <TabsTrigger 
                value="CustomTable" 
                className="rounded-md transition-all duration-300 ease-in-out
                           data-[state=active]:bg-primary data-[state=active]:text-secondary
                           data-[state=active]:shadow-md data-[state=active]:font-medium"
              >
                Custom Table
              </TabsTrigger>
              <TabsTrigger 
                value="CustomTableDetails"
                className="rounded-md transition-all duration-300 ease-in-out
                           data-[state=active]:bg-primary data-[state=active]:text-secondary
                           data-[state=active]:shadow-md data-[state=active]:font-medium"
              >
                Custom Table Details
              </TabsTrigger>
            </TabsList>
            <TabsContent value="CustomTable">
              <CustomWidget 
                content={<CustomTable />} 
                title="Custom Table" 
                icon={Building}
              />            
            </TabsContent>
            <TabsContent value="CustomTableDetails">
              <CustomWidget 
                content={<CustomTableDetail data={data} />} 
                title="Custom Table Details" 
                icon={InfoIcon} 
              />            
            </TabsContent>
          </Tabs>
        </div>
        <div>
          <CustomWidget 
            content={<CustomChart data={chartData} />} 
            title="Métricas Mensuales" 
            icon={BarChart} 
          />
        </div>
      </div>
    </div>
  );
}
