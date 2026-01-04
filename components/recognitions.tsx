interface RecognitionsProps {
  data: {
    recognitions: Array<{
      title: string
      description: string
      year: string
    }>
  }
}

export default function Recognitions({ data }: RecognitionsProps) {
  return (
    <section className="container mx-auto px-4 py-12" id="recognitions">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-6 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║ RECOGNITIONS & AWARDS ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="border-2 border-border bg-card p-6 md:p-8 hover:border-accent transition-colors duration-300">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {data.recognitions?.map((recognition, index) => (
              <div
                key={index}
                className="font-mono text-xs md:text-sm border border-border p-4 hover:border-accent transition-colors"
              >
                <div className="flex items-start justify-between gap-2 mb-2">
                  <div className="flex items-start gap-2 flex-1">
                    <span className="text-accent mt-0.5">◆</span>
                    <div className="flex-1">
                      <div className="text-foreground font-semibold mb-1">
                        {recognition.title}
                      </div>
                      <div className="text-muted-foreground text-xs">
                        {recognition.description}
                      </div>
                    </div>
                  </div>
                  {recognition.year && (
                    <span className="text-accent text-xs whitespace-nowrap">
                      {recognition.year}
                    </span>
                  )}
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
