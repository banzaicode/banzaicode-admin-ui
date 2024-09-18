"use client"

import Link from "next/link";
import { SiderbarItemProps } from "./Sidebaritem.types";
import { cn } from "@/lib/utils";
import { usePathname } from "next/navigation";

export default function Sidebaritem( props: SiderbarItemProps) {
    const { item } = props
    const { href, icon: Icon, label } = item

    const pathname = usePathname()

    const isActive = pathname === href

    return (
        <Link href={href}
            className={cn(
                'flex gap-x-2 mt-2 text-sm items-center p-2 rounded-lg cursor-pointer transition-colors',
                'text-foreground hover:bg-primary/100 hover:text-secondary',
                isActive ? 'bg-primary/100 text-secondary font-medium' : 'font-normal'
            )}>
            <Icon className="h-5 w-5" strokeWidth={1.5} />
            <span>{label}</span>
        </Link>
    )
}