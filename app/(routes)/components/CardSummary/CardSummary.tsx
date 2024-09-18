import React from 'react'
import { CardSummaryProps } from './CardSummary.types'
import CustomIcon from '@/components/CustomIcon'
import CustomTooltip from '@/components/CustomTooltip'
import { MoveDown, MoveDownRight, MoveUp, MoveUpRight } from 'lucide-react'

export default function CardSummary(props: CardSummaryProps) {
    const {icon: Icon, title, tooltipText, total, average } = props
    return (
        <div className="shadow-sm bg-card text-card-foreground rounded-lg p-5 py-3 hover:shadow-lg transition border border-border">
            <div className="flex justify-between">
                <div className='flex gap-2 items-center'>
                    <CustomIcon icon={Icon} className="text-primary" />
                    <span className="font-medium">{title}</span>
                </div>
                <CustomTooltip 
                    content={tooltipText}
                />
            </div>
            <div className='flex gap-4 mt-2 md:mt-4 items-center'>
                <p className='text-2xl font-bold'>{total}</p>
                {average !== undefined && average !== null && (
                    <div className={`flex items-center gap-1 px-2 text-xs rounded-lg h-[20px] ${
                        average >= 0 ? 'bg-green-100 text-green-800 dark:bg-green-900 dark:text-green-100' : 'bg-red-100 text-red-800 dark:bg-red-900 dark:text-red-100'
                    }`}>
                        {average > 0 && '+'}
                        {average}%

                        {average > 0 && average <= 50 && (
                            <MoveUpRight strokeWidth={2} className='h-4 w-4' />
                        )}
                        {average > 50 && (
                            <MoveUp strokeWidth={2} className='h-4 w-4' />
                        )}
                        {average < 0 && average >= -50 && (
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