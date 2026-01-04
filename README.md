# Ranjith P. Rayaprolu - Portfolio Website

A modern, terminal-themed portfolio website showcasing expertise in AWS Solutions Architecture, Generative AI, and cloud transformation. Built with Next.js and featuring a retro aesthetic with professional polish.

## 🚀 Features

- **Terminal/Retro Theme**: Clean monospace design with accent colors and ASCII art borders
- **Fully Responsive**: Optimized for mobile, tablet, and desktop
- **Sticky Navigation**: Smooth scroll navigation to all sections
- **Metrics Dashboard**: Visual showcase of key achievements (17+ years, $300M+ revenue, etc.)
- **Tech Stack Badges**: Projects display relevant technologies
- **Contact Form**: mailto integration for direct email communication
- **Resume Download**: One-click PDF resume download

## 📋 Sections

1. **Hero**: Professional photo, name, title, and social links (LinkedIn, GitHub, Resume)
2. **Metrics**: Key statistics displayed in a visual dashboard
3. **About**: Professional bio highlighting achievements and expertise
4. **Skills**: 24 technical competencies across AI, cloud, and architecture
5. **Projects**: 6 featured projects with descriptions and tech stacks
6. **Publications**: AWS blog posts and code samples
7. **Work Experience**: 5 roles spanning 17+ years
8. **Education**: MBA and B.Tech degrees
9. **Recognitions & Awards**: EB-1A, IEEE, BCS, AWS Featured Speaker
10. **Contact**: Contact form with email integration

## 🛠️ Tech Stack

- **Framework**: Next.js 15 (React 19)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **UI Components**: Custom components with Radix UI primitives
- **Font**: JetBrains Mono (monospace)
- **Package Manager**: pnpm

## 📦 Installation

```bash
# Install dependencies
pnpm install

# Run development server
pnpm dev

# Build for production
pnpm build

# Start production server
pnpm start
```

Open [http://localhost:3000](http://localhost:3000) to view the site.

## 📁 Project Structure

```
portfolio/
├── app/                    # Next.js app directory
│   ├── globals.css        # Global styles
│   ├── layout.tsx         # Root layout
│   └── page.tsx           # Main page
├── components/            # React components
│   ├── about.tsx          # About section
│   ├── contact.tsx        # Contact form
│   ├── education.tsx      # Education section
│   ├── experience.tsx     # Work experience
│   ├── footer.tsx         # Footer
│   ├── hero.tsx           # Hero section with photo
│   ├── metrics.tsx        # Metrics dashboard
│   ├── navigation.tsx     # Sticky navigation
│   ├── projects.tsx       # Projects showcase
│   ├── publications.tsx   # Publications & code samples
│   ├── recognitions.tsx   # Awards & recognitions
│   ├── skills.tsx         # Skills list
│   └── ui/                # Reusable UI components
├── public/                # Static assets
│   ├── resumeData.json    # Portfolio data
│   ├── resume.pdf         # Downloadable resume
│   └── *.png              # Images
├── hooks/                 # Custom React hooks
├── lib/                   # Utility functions
└── styles/                # Additional styles
```

## ⚙️ Customization

### Update Portfolio Data

Edit `public/resumeData.json` to customize:
- Personal information
- Metrics
- Skills
- Projects
- Publications
- Work experience
- Education
- Recognitions

### Update Resume

Replace `public/resume.pdf` with your own PDF resume.

### Update Photo

Replace `public/ranrayap-high-res-current-small-size.png` with your photo (recommended: 320x480px).

### Modify Colors

Edit Tailwind CSS theme in `app/globals.css`:
```css
:root {
  --accent: 0 255 163;  /* Change accent color */
  --background: 0 0 0;  /* Background color */
  --foreground: 255 255 255;  /* Text color */
}
```

## 🌐 Deployment

### Vercel (Recommended)

1. Push code to GitHub
2. Import repository in Vercel
3. Deploy automatically

### Other Platforms

- **Netlify**: Connect GitHub repo and deploy
- **AWS Amplify**: Deploy from GitHub with auto-scaling
- **Cloudflare Pages**: Fast global CDN deployment

## 📝 Key Highlights

- **EB-1A Visa** holder (Extraordinary Ability)
- **IEEE Senior Member** and **BCS Fellow**
- **AWS Featured Speaker** (re:Invent 2023, 2024; re:Inforce 2025)
- **3 AWS Blog Posts** across Big Data, Database, and Storage
- **$300M+** in influenced revenue
- **17+ years** of experience in cloud and AI
- **2K+ practitioners** enabled through AWS Activation Days

## 📄 License

This project is open source and available for personal use. Feel free to fork and customize for your own portfolio.

## 🤖 Built With

Generated with [Claude Code](https://claude.com/claude-code)

---

**Contact**: rayaprolu.ranjith@gmail.com | [LinkedIn](https://www.linkedin.com/in/ranjithrayaprolu/) | [GitHub](https://github.com/rayaprolu-ranjith/)
