export default function Footer() {
  return (
    <footer className="container mx-auto px-4 py-12">
      <div className="max-w-4xl mx-auto">
        <div className="text-center">
          <p className="text-sm text-gray-500">
            Built and hosted on{" "}
            <a
              href="https://vercel.com"
              target="_blank"
              rel="noopener noreferrer"
              className="font-bold hover:text-black transition-colors"
            >
              ▲ Vercel
            </a>
          </p>
          <p className="text-muted-foreground text-xs mt-4">
            © {new Date().getFullYear()} Ranjith P. Rayaprolu • Built with Next.js & TailwindCSS
          </p>
        </div>
      </div>
    </footer>
  )
}
