interface MetricsProps {
  data: {
    experience: string
    revenue: string
    practitioners: string
    uptime: string
  }
}

export default function Metrics({ data }: MetricsProps) {
  return (
    <section className="container mx-auto px-4 py-8">
      <div className="max-w-4xl mx-auto">
        <div className="border-2 border-accent bg-card p-6 md:p-8">
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-4 gap-4 sm:gap-6 md:gap-8">
            <div className="text-center">
              <div className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 md:mb-2">
                {data.experience}
              </div>
              <div className="font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
                Years Experience
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 md:mb-2">
                {data.revenue}
              </div>
              <div className="font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
                Revenue Influenced
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 md:mb-2">
                {data.practitioners}
              </div>
              <div className="font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
                Practitioners Enabled
              </div>
            </div>
            <div className="text-center">
              <div className="font-mono text-xl sm:text-2xl md:text-3xl lg:text-4xl font-bold text-accent mb-1 md:mb-2">
                {data.uptime}
              </div>
              <div className="font-mono text-[10px] sm:text-xs md:text-sm text-muted-foreground leading-tight">
                System Uptime
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
