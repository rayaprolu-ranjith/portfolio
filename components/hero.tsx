interface HeroProps {
  data: {
    name: string
    occupation: string
    social?: Array<{
      name: string
      url: string
      className: string
    }>
  }
}

export default function Hero({ data }: HeroProps) {
  return (
    <section className="container mx-auto px-4 pt-16 pb-8 md:pt-24 md:pb-12 relative scan-line">
      <div className="flex flex-col items-center justify-center gap-8">
        <div className="text-center space-y-6">
          <div className="flex justify-center mb-4 md:mb-6">
            <div className="relative">
              <div className="absolute -inset-1.5 md:-inset-2 border-2 border-accent"></div>
              <div className="relative w-28 h-28 sm:w-32 sm:h-32 md:w-40 md:h-40 overflow-hidden">
                <img
                  src="/ranrayap-high-res-current-small-size.png"
                  alt="Ranjith P. Rayaprolu"
                  className="w-full h-full object-cover grayscale-[30%]"
                />
              </div>
              <div className="absolute -top-1.5 -left-1.5 md:-top-2 md:-left-2 text-accent font-mono text-xs">╔</div>
              <div className="absolute -top-1.5 -right-1.5 md:-top-2 md:-right-2 text-accent font-mono text-xs">╗</div>
              <div className="absolute -bottom-1.5 -left-1.5 md:-bottom-2 md:-left-2 text-accent font-mono text-xs">╚</div>
              <div className="absolute -bottom-1.5 -right-1.5 md:-bottom-2 md:-right-2 text-accent font-mono text-xs">╝</div>
            </div>
          </div>
          <h1 className="font-mono text-3xl md:text-4xl lg:text-5xl font-bold text-accent tracking-tight">
            {data.name}
          </h1>
          <div className="font-mono text-sm md:text-base lg:text-lg text-accent border-t-2 border-b-2 pulse-border py-4 px-6">
            <span className="neon-cyan">{">"}</span> {data.occupation}
          </div>
          {data.social && data.social.length > 0 && (
            <div className="flex items-center justify-center gap-6 pt-4">
              {data.social.map((social) => (
                <a
                  key={social.name}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  download={social.name === "resume" ? "Ranjith, Rayaprolu.pdf" : undefined}
                  className="font-mono text-sm md:text-base text-accent hover:text-foreground transition-colors border border-accent hover:border-foreground px-4 py-2"
                >
                  [{social.name}]
                </a>
              ))}
            </div>
          )}
        </div>
      </div>

      <div className="absolute top-4 left-4 text-accent/30 font-mono text-xs md:text-sm">╔═══</div>
      <div className="absolute top-4 right-4 text-accent/30 font-mono text-xs md:text-sm">═══╗</div>
      <div className="absolute bottom-4 left-4 text-accent/30 font-mono text-xs md:text-sm">╚═══</div>
      <div className="absolute bottom-4 right-4 text-accent/30 font-mono text-xs md:text-sm">═══╝</div>
    </section>
  )
}
