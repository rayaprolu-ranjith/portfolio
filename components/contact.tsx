"use client"

import { useState } from "react"

interface ContactProps {
  data: {
    contactmessage: string
    email: string
    address: {
      city: string
      state: string
    }
  }
}

export default function Contact({ data }: ContactProps) {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  })
  const [status, setStatus] = useState<"idle" | "sending" | "success" | "error">("idle")

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault()

    // Construct mailto link with form data
    const mailtoLink = `mailto:${data.email}?subject=${encodeURIComponent(formData.subject)}&body=${encodeURIComponent(
      `Name: ${formData.name}\nEmail: ${formData.email}\n\nMessage:\n${formData.message}`
    )}`

    // Open mailto link
    window.location.href = mailtoLink

    // Clear form
    setFormData({ name: "", email: "", subject: "", message: "" })
    setStatus("success")

    // Reset success message after 3 seconds
    setTimeout(() => setStatus("idle"), 3000)
  }

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }))
  }

  return (
    <section className="container mx-auto px-4 py-12" id="contact">
      <div className="max-w-4xl mx-auto">
        <div className="font-mono text-accent mb-6 flex flex-col items-center">
          <pre className="text-xs md:text-sm">╔════════════════════════════════════════════════╗</pre>
          <pre className="text-xs md:text-sm font-bold">║ CONTACT ║</pre>
          <pre className="text-xs md:text-sm">╚════════════════════════════════════════════════╝</pre>
        </div>

        <div className="border-2 border-border bg-card p-6 md:p-8 hover:border-accent transition-colors duration-300">
          <div className="font-mono text-xs md:text-sm mb-6 text-center">
            <p className="text-muted-foreground leading-relaxed">{data.contactmessage}</p>
            <div className="mt-4 text-accent">
              <a href={`mailto:${data.email}`} className="hover:text-foreground transition-colors">
                {data.email}
              </a>
              <span className="text-muted-foreground mx-2">|</span>
              <span className="text-muted-foreground">{data.address.city}, {data.address.state}</span>
            </div>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label htmlFor="name" className="block font-mono text-xs text-accent mb-1">
                  Name:
                </label>
                <input
                  type="text"
                  id="name"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border px-3 py-2 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>
              <div>
                <label htmlFor="email" className="block font-mono text-xs text-accent mb-1">
                  Email:
                </label>
                <input
                  type="email"
                  id="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  required
                  className="w-full bg-background border border-border px-3 py-2 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="block font-mono text-xs text-accent mb-1">
                Subject:
              </label>
              <input
                type="text"
                id="subject"
                name="subject"
                value={formData.subject}
                onChange={handleChange}
                required
                className="w-full bg-background border border-border px-3 py-2 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors"
              />
            </div>

            <div>
              <label htmlFor="message" className="block font-mono text-xs text-accent mb-1">
                Message:
              </label>
              <textarea
                id="message"
                name="message"
                value={formData.message}
                onChange={handleChange}
                required
                rows={6}
                className="w-full bg-background border border-border px-3 py-2 font-mono text-xs text-foreground focus:border-accent focus:outline-none transition-colors resize-none"
              />
            </div>

            <div className="flex items-center justify-between">
              <button
                type="submit"
                disabled={status === "sending"}
                className="font-mono text-xs text-accent border border-accent px-6 py-2 hover:bg-accent hover:text-background transition-colors disabled:opacity-50 disabled:cursor-not-allowed"
              >
                {status === "sending" ? "[Sending...]" : "[Send Message]"}
              </button>

              {status === "success" && (
                <span className="font-mono text-xs text-accent">✓ Message sent successfully!</span>
              )}
              {status === "error" && (
                <span className="font-mono text-xs text-red-500">✗ Failed to send. Please try email.</span>
              )}
            </div>
          </form>
        </div>
      </div>
    </section>
  )
}
