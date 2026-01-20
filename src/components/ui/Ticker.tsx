import { cn } from '@/lib/utils'

interface TickerProps {
  items: string[]
  className?: string
}

export const Ticker = ({ items, className }: TickerProps) => {
  const allItems = [...items, ...items, ...items]
  
  return (
    <div className={cn('relative overflow-hidden py-4', className)}>
      <div className="flex animate-scroll whitespace-nowrap">
        {allItems.map((item, i) => (
          <span
            key={i}
            className="inline-flex items-center text-muted-foreground text-sm mx-6"
          >
            {item}
            <span className="mx-6 text-primary">•</span>
          </span>
        ))}
      </div>
      <style jsx>{`
        @keyframes scroll {
          0% {
            transform: translateX(0);
          }
          100% {
            transform: translateX(-33.333%);
          }
        }
        .animate-scroll {
          animation: scroll 30s linear infinite;
        }
        @media (prefers-reduced-motion: reduce) {
          .animate-scroll {
            animation: none;
          }
        }
      `}</style>
    </div>
  )
}