interface AboutProps {
  data: {
    bio: string
  }
}

export default function About({ data }: AboutProps) {
  return (
    <section className="container mx-auto px-4 pt-4 pb-2" id="about">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-6">
          <div className="flex flex-col items-center">
            <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
            <pre className="text-xs md:text-sm font-bold">║ ABOUT ME ║</pre>
            <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
          </div>
        </div>

        <div className="border-2 border-border p-6 md:p-8 bg-card hover:border-accent transition-colors duration-300">
          <div className="font-mono text-xs md:text-sm leading-relaxed space-y-4">
            {data.bio.split('\n\n').map((paragraph, index) => (
              <p key={index} className="text-foreground whitespace-pre-line">
                {index === 0 && <span className="text-accent">{">> "}</span>}
                {paragraph}
              </p>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
