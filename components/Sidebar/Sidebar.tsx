import Logo from "../Logo"
import SidebarRoutes from "../SidebarRoutes"

export default function Sidebar() {
    return (
        <div className="h-screen">
            <div className="h-full flex flex-col border-r border-gray-200 dark:border-border bg-white dark:bg-background">
                <Logo />
                <SidebarRoutes />
            </div>
        </div>
    )
}
