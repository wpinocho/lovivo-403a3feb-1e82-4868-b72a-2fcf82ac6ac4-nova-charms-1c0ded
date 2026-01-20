import { cn } from '@/lib/utils'
import { ReactNode } from 'react'

interface BentoCardProps {
  title: string
  description: string
  icon?: ReactNode
  className?: string
}

export const BentoCard = ({ title, description, icon, className }: BentoCardProps) => {
  return (
    <div
      className={cn(
        'group p-8 rounded-3xl glass-card',
        'hover:bg-white/5 hover:scale-[1.02] transition-all duration-300',
        'hover:shadow-[0_8px_32px_rgba(124,92,252,0.2)]',
        className
      )}
    >
      {icon && (
        <div className="mb-4 text-primary">
          {icon}
        </div>
      )}
      <h3 className="text-xl font-heading font-bold text-foreground mb-3">
        {title}
      </h3>
      <p className="text-muted-foreground leading-relaxed">
        {description}
      </p>
    </div>
  )
}