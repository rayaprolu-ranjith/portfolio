interface PublicationsProps {
  data: {
    publications: Array<{
      title: string
      type: string
      category: string
      url: string
      year: string
    }>
  }
}

export default function Publications({ data }: PublicationsProps) {
  return (
    <section className="container mx-auto px-4 py-12" id="publications">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-6 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║ PUBLICATIONS & CODE SAMPLES ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="space-y-3">
          {data.publications?.map((publication, index) => (
            <div
              key={index}
              className="border border-border bg-card hover:border-accent transition-colors duration-300 p-4 md:p-5"
            >
              <div className="font-mono text-xs md:text-sm">
                <div className="flex items-start justify-between gap-4 flex-wrap mb-2">
                  <div className="flex-1">
                    <div className="flex items-center gap-2 mb-1">
                      <span className="text-accent">▸</span>
                      <span className="text-accent text-[10px] border border-accent px-2 py-0.5">
                        {publication.type}
                      </span>
                    </div>
                    <div className="text-foreground font-semibold mb-1 pl-4">
                      {publication.title}
                    </div>
                    <div className="text-muted-foreground text-[10px] pl-4">
                      {publication.category}
                    </div>
                  </div>
                  {publication.year && (
                    <span className="text-accent text-xs whitespace-nowrap">
                      {publication.year}
                    </span>
                  )}
                </div>
                {publication.url && (
                  <a
                    href={publication.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-block text-accent hover:text-foreground transition-colors border border-accent hover:border-foreground px-3 py-1 mt-2 ml-4 text-[10px]"
                  >
                    {publication.type === "AWS Code Sample" ? "[view code →]" : "[read article →]"}
                  </a>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
