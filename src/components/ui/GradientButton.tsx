import { Button } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { forwardRef } from 'react'

interface GradientButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary'
  children: React.ReactNode
}

export const GradientButton = forwardRef<HTMLButtonElement, GradientButtonProps>(
  ({ variant = 'primary', className, children, ...props }, ref) => {
    if (variant === 'primary') {
      return (
        <button
          ref={ref}
          className={cn(
            'relative px-8 py-4 rounded-3xl font-semibold text-base',
            'bg-gradient-to-r from-primary via-secondary to-accent text-white',
            'hover:shadow-[0_0_40px_rgba(124,92,252,0.6)] transition-all duration-300',
            'glow-on-hover focus:outline-none focus:ring-2 focus:ring-primary/50',
            'disabled:opacity-50 disabled:cursor-not-allowed',
            className
          )}
          {...props}
        >
          {children}
        </button>
      )
    }

    return (
      <button
        ref={ref}
        className={cn(
          'relative px-8 py-4 rounded-3xl font-semibold text-base',
          'bg-transparent text-foreground gradient-border',
          'hover:bg-white/5 transition-all duration-300',
          'focus:outline-none focus:ring-2 focus:ring-primary/50',
          'disabled:opacity-50 disabled:cursor-not-allowed',
          className
        )}
        {...props}
      >
        {children}
      </button>
    )
  }
)

GradientButton.displayName = 'GradientButton'