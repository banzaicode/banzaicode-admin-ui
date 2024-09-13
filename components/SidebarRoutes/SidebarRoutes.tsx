"use client"

import Sidebaritem from '@/components/SidebarItem'
import { Separator } from '@/components/ui/separator'
import { dataGeneralSidebar, dataSupportSidebar, dataToolsSidebar } from './SidebarRoutes.data'
import { Button } from '@/components/ui/button'

export default function SidebarRoutes() {
    return (
        <div className='flex flex-col justify-between h-full'>
            <div>
                <div className='p-2 md:p-6'>
                    <p className='text-slate-500 mb-2'>GENERAL</p>
                    {dataGeneralSidebar.map((item) => (
                        <Sidebaritem key={item.label} item={item} />
                    ))}
                </div>
                <Separator />
                <div className='p-2 md:p-6'>
                    <p className='text-slate-500 mb-2'>SUPPORT</p>
                    {dataSupportSidebar.map((item) => (
                        <Sidebaritem key={item.label} item={item} />
                    ))}
                </div>
                <Separator />
                <div className='p-2 md:p-6'>
                    <p className='text-slate-500 mb-2'>TOOLS</p>
                    {dataToolsSidebar.map((item) => (
                        <Sidebaritem key={item.label} item={item} />
                    ))}
                </div>
            </div>
            <div>
                <div>
                    <Button variant="outline" className='w-full'>
                        Upgrade Plan
                    </Button>
                </div>
                <Separator />
                <footer className='mt-3 p-3 text-center'>
                    2024. All rights reserved
                </footer>
            </div>
        </div>
    )
}