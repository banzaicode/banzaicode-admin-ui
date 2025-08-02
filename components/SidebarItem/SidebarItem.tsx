"use client"

import Link from "next/link";
import { SiderbarItemProps } from "./Sidebaritem.types";
import { cn } from "../../lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebaritem({ item }: SiderbarItemProps) {
    const { href, icon: Icon, label } = item

    const pathname = usePathname()

    const isActive = pathname === href

    return (
        <Link href={href}
            className={cn(
                'flex gap-x-2 mt-2 text-sm items-center p-2 rounded-lg cursor-pointer transition-colors',
                'text-gray-700 dark:text-foreground hover:bg-gray-100 dark:hover:bg-primary/20 hover:text-primary dark:hover:text-primary',
                isActive ? 'bg-gray-100 dark:bg-primary/20 text-primary dark:text-primary font-medium' : 'font-normal'
            )}>
            <Icon className="h-5 w-5" strokeWidth={1.5} />
            <span>{label}</span>
        </Link>
    )
}
