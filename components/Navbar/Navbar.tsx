import { Input } from "../ui/input"
import { Sheet, SheetContent, SheetTrigger } from "../ui/sheet"
import { UserButton } from "@clerk/nextjs";
import { Menu, Search } from "lucide-react";
import SidebarRoutes from "../SidebarRoutes";
import ToggleTheme from "../ToggleTheme";
import { Button } from "../ui/button";

export default function Navbar() {
    return (
        <nav className="flex items-center px-2 gap-x-4 md:px-6 justify-between w-full bg-white dark:bg-background border-b border-gray-200 dark:border-border h-20">
            <div className="block xl:hidden">
                <Sheet>
                    <SheetTrigger asChild>
                        <Button variant="ghost" size="icon" className="text-gray-700 dark:text-foreground">
                            <Menu className="h-5 w-5" />
                            <span className="sr-only">Toggle menu</span>
                        </Button>
                    </SheetTrigger>
                    <SheetContent side="left" className="bg-white dark:bg-background">
                        <SidebarRoutes />
                    </SheetContent>
                </Sheet>
            </div>
            <div className="relative w-[300px]">
                <Input 
                    placeholder="Search..." 
                    className="rounded-lg bg-gray-100 dark:bg-muted text-gray-800 dark:text-foreground placeholder:text-gray-500 dark:placeholder:text-muted-foreground" 
                />
                <Search strokeWidth={1.5} className="absolute top-2.5 right-2.5 h-5 w-5 text-gray-500 dark:text-muted-foreground" />
            </div>
            <div className="flex gap-x-4 items-center">
                <ToggleTheme />
                <UserButton afterSignOutUrl="/" />
            </div>
        </nav>
    )
}
