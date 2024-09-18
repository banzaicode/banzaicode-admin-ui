"use client"

import Sidebaritem from '@/components/SidebarItem'
import { Separator } from '@/components/ui/separator'
import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from './SidebarRoutes.data'
import { Button } from '@/components/ui/button'

export default function SidebarRoutes() {
    return (
        <div className='flex flex-col justify-between h-full bg-background text-foreground'>
            <div>
                <div className='p-2 md:p-6'>
                    <p className='text-muted-foreground mb-2 font-semibold'>GENERAL</p>
                    {dataGeneralSidebar.map((item) => (
                        <Sidebaritem key={item.label} item={item} />
                    ))}
                </div>
                <Separator className="bg-border" />
                <div className='p-2 md:p-6'>
                    <p className='text-muted-foreground mb-2 font-semibold'>SUPPORT</p>
                    {dataSupportSidebar.map((item) => (
                        <Sidebaritem key={item.label} item={item} />
                    ))}
                </div>
                <Separator className="bg-border" />
                <div className='p-2 md:p-6'>
                    <p className='text-muted-foreground mb-2 font-semibold'>TOOLS</p>
                    {dataToolsSidebar.map((item) => (
                        <Sidebaritem key={item.label} item={item} />
                    ))}
                </div>
            </div>
            <div>
                <div className='p-2 md:p-6'>
                    <Button variant="outline" className='w-full'>
                        Upgrade Plan
                    </Button>
                </div>
                <Separator className="bg-border" />
                <footer className='mt-3 p-3 text-center text-muted-foreground text-sm'>
                    2024. All rights reserved
                </footer>
            </div>
        </div>
    )
}