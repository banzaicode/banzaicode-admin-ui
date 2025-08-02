import { CustomIconProps } from './CustomIcon.types'
import { cn } from '@/lib/utils'

export default function CustomIcon({ icon: Icon, className }: CustomIconProps) {
    return (
        <div className={cn("p-2 bg-primary/10 rounded-lg", className)}>
            <Icon strokeWidth={1} className='w-4 h-4' />
        </div>
    )
}