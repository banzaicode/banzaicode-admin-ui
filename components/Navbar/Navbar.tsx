import { Input } from "@/components/ui/input"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"
import { UserButton } from "@clerk/nextjs";
import { Menu, Search } from "lucide-react";
import SidebarRoutes from "@/components/SidebarRoutes";
import ToggleTheme from "@/components/ToggleTheme";
import { Button } from "@/components/ui/button";

export default function Navbar() {
    return (
        <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-background border-b border-border h-20">
            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-foreground">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-background">
                        <SidebarRoutes />
                    </SheetContent>
                </Sheet>
            </div>
            <div className="relative w-[300px]">
                <Input 
                    placeholder="Search..." 
                    className="rounded-lg bg-muted text-foreground placeholder:text-muted-foreground" 
                />
                <Search strokeWidth={1.5} className="absolute top-2.5 right-2.5 h-5 w-5 text-muted-foreground" />
            </div>
            <div className="flex gap-x-4 items-center">
                <ToggleTheme />
                <UserButton afterSignOutUrl="/" />
            </div>
        </nav>
    )
}