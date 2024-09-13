import React from 'react'
import { CardSummaryProps } from './CardSummary.types'
import CustomIcon from '@/components/CustomIcon'
import CustomTooltip from '@/components/CustomTooltip'
import { MoveDown, MoveDownRight, MoveUp, MoveUpRight } from 'lucide-react'

export default function CardSummary(props: CardSummaryProps) {
    const {icon: Icon, title, tooltipText, total, average } = props
    return (
        <div className="shadow-sm bg-background rounded-lg p-5 py-3 hover:shadow-lg transition">
            <div className="flex justify-between">
                <div className='flex gap-2 items-center'>
                    <CustomIcon icon={Icon} />
                    {title}
                </div>
                <CustomTooltip 
                    content={tooltipText}
                />
            </div>
            <div className='flex gap-4 mt-2 md:mt-4'>
                <p className='text-2xl'>{total}</p>
                {average !== undefined && average !== null && (
                    <div className='flex items-center gap-1 px-2 text-xs text-white rounded-lg h-[20px] bg-black dark:bg-secondary'>
                        {average}%

                        {average > 0 && (
                            <MoveUpRight strokeWidth={2} className='h-4 w-4' />
                        )}
                        {average > 50 && (
                            <MoveUp strokeWidth={2} className='h-4 w-4' />
                        )}
                        {average < 0 && (
                            <MoveDownRight strokeWidth={2} className='h-4 w-4' />
                        )}
                        {average < -50 && (
                            <MoveDown strokeWidth={2} className='h-4 w-4' />
                        )}

                    </div>
                )}
            </div>
        </div>
    )
}