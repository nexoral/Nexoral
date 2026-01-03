# Nexoral Systems

Official website for Nexoral Systems - an open-source technology organization building next-generation infrastructure, developer tools, and scalable platforms.

![Next.js](https://img.shields.io/badge/Next.js-16.1.1-black?style=flat-square&logo=next.js)
![TypeScript](https://img.shields.io/badge/TypeScript-5-blue?style=flat-square&logo=typescript)
![Tailwind CSS](https://img.shields.io/badge/Tailwind-3-38bdf8?style=flat-square&logo=tailwindcss)
![License](https://img.shields.io/badge/License-MIT-green?style=flat-square)

## 🚀 Features

- **Modern Tech Stack**: Built with Next.js 15+, TypeScript, and Tailwind CSS
- **Terminal-Style UI**: Techy design with monospace fonts, code snippets, and terminal windows
- **Dynamic Routing**: Individual pages for all projects with detailed documentation
- **Founder Profile**: Comprehensive bio, timeline, skills, and project showcase
- **Responsive Design**: Fully responsive across all devices
- **SEO Optimized**: Meta tags, Open Graph, and structured data for better discoverability

## 📁 Project Structure

```
app/
├── layout.tsx              # Root layout with metadata
├── page.tsx                # Home page with hero, stats, and featured projects
├── projects/
│   ├── page.tsx           # All projects listing
│   └── [slug]/
│       └── page.tsx       # Dynamic project detail pages
└── founder/
    └── page.tsx           # Founder profile page
```

## 🛠️ Featured Projects

- **[NexoralDNS](https://github.com/nexoral/NexoralDNS)** - Production-ready DNS infrastructure for modern networks
- **[AxioDB](https://github.com/nexoral/AxioDB)** - Lightweight NoSQL database for Node.js (2000+ NPM downloads)
- **[ContainDB](https://github.com/nexoral/ContainDB)** - Database DevOps automation tool
- **[xpack](https://github.com/nexoral/xpack)** - Universal Linux package builder

## 🚦 Getting Started

### Prerequisites

- Node.js 18+
- npm, yarn, pnpm, or bun

### Installation

```bash
# Clone the repository
git clone https://github.com/nexoral/nexoral.in.git
cd nexoral.in

# Install dependencies
npm install

# Run the development server
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the website.

### Build for Production

```bash
# Create an optimized production build
npm run build

# Start the production server
npm start
```

## 🎨 Design Philosophy

The website embraces a **developer-first, terminal-inspired** aesthetic:

- **Monospace Fonts**: Code-like typography throughout
- **Terminal Windows**: Bash-style code blocks with colored window controls
- **Comment Syntax**: Section headers styled as `// comments`
- **Syntax Highlighting**: Color-coded tech stack tags
- **Dark Theme**: Slate-based gradient backgrounds

## 📄 Pages

### Home (`/`)
- Terminal-style stats display
- Featured projects grid with hover effects
- Mission statement with techy card designs
- Founder introduction with CTA

### Projects (`/projects`)
- Terminal header with `ls -la` style listing
- Grid view of all projects
- Version badges and status indicators
- Links to individual project pages

### Project Details (`/projects/[slug]`)
- Comprehensive documentation
- Installation instructions
- Code examples in terminal windows
- Feature highlights
- Tech stack breakdown
- GitHub integration

### Founder (`/founder`)
- JSON-style bio display
- Career timeline with visual indicators
- Technical skills categorized by domain
- Notable projects showcase
- Areas of interest
- Social links and contact info

## 🔧 Tech Stack

- **Framework**: Next.js 16.1.1 (App Router)
- **Language**: TypeScript
- **Styling**: Tailwind CSS
- **Fonts**: Geist Sans & Geist Mono
- **Icons**: Inline SVG
- **Deployment**: Vercel (recommended)

## 📝 Configuration

### Metadata
SEO and social sharing metadata is configured in `app/layout.tsx`:

```typescript
export const metadata: Metadata = {
  title: "Nexoral Systems - Open Source Infrastructure & Developer Tools",
  description: "...",
  keywords: ["open source", "infrastructure", ...],
  // ... OpenGraph, Twitter cards, etc.
}
```

### Dynamic Routes
Project slugs are pre-generated for optimal performance:

```typescript
export async function generateStaticParams() {
  return [
    { slug: "nexoraldns" },
    { slug: "axiodb" },
    { slug: "containdb" },
    { slug: "xpack" },
  ];
}
```

## 🌐 Deployment

### Deploy on Vercel

[![Deploy with Vercel](https://vercel.com/button)](https://vercel.com/new/clone?repository-url=https://github.com/nexoral/nexoral.in)

The easiest way to deploy is using the [Vercel Platform](https://vercel.com):

1. Push your code to GitHub
2. Import the repository in Vercel
3. Vercel will automatically detect Next.js and configure the build
4. Your site will be live with automatic HTTPS and global CDN

### Other Platforms

The site can also be deployed on:
- Netlify
- Railway
- Cloudflare Pages
- AWS Amplify
- Any Node.js hosting provider

## 🤝 Contributing

Contributions are welcome! To update project information:

1. Edit project data in `app/projects/[slug]/page.tsx`
2. Update the projects array in `app/page.tsx` and `app/projects/page.tsx`
3. Add new slugs to `generateStaticParams()` if adding new projects

## 📧 Contact

- **GitHub**: [@nexoral](https://github.com/nexoral)
- **Founder**: [Ankan Saha](https://github.com/AnkanSaha)
- **Email**: connect@ankan.in
- **Twitter**: [@theankansaha](https://twitter.com/theankansaha)

## 📄 License

MIT License - see the LICENSE file for details

---

**Built with ❤️ by developers, for developers**

© 2026 Nexoral Systems | Open Source | MIT Licensed
