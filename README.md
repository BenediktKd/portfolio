# Data Engineer Portfolio

A professional portfolio showcasing data engineering expertise and the Enterprise Data Platform project.

**Tech Stack:** Next.js 15 + React 19 + TailwindCSS + Framer Motion + shadcn/ui + React Flow

---

## Quick Start

```bash
# Install dependencies
npm install --legacy-peer-deps

# Run development server
npm run dev

# Build for production
npm run build
```

Visit http://localhost:3000

---

## Configuration Guide

### Step 1: Edit Personal Information

Open `app/page.tsx` and update the `CONFIG` object:

```typescript
const CONFIG = {
  name: "[YOUR_NAME]",           // Your full name
  title: "Data Engineer | Cloud Architect",
  tagline: "Building scalable data platforms...",
  email: "[YOUR_EMAIL]",         // Your email
  github: "https://github.com/[YOUR_GITHUB]",
  linkedin: "https://linkedin.com/in/[YOUR_LINKEDIN]",
  location: "[YOUR_CITY], [YOUR_COUNTRY]",
  available: true,               // Set to false if employed
  resumeUrl: "/resume.pdf",      // Add your resume to /public/
}
```

### Step 2: Update Work Experience

Open `components/timeline.tsx` and update the `experiences` array:

```typescript
const experiences = [
  {
    title: "Senior Data Engineer",
    company: "[COMPANY_NAME]",
    period: "[START_DATE] - Present",
    description: "Your achievements here...",
  },
  // Add more experiences...
]
```

### Step 3: Add Your Photo (Optional)

1. Add your image to `public/image.jpg`
2. Update the About section in `app/page.tsx` to use it

### Step 4: Add Your Resume

Copy your resume PDF to `public/resume.pdf`

---

## Features

### Interactive Demos

| Demo | Description |
|------|-------------|
| **Architecture Diagram** | React Flow interactive visualization with 4-layer architecture |
| **Terminal Demo** | Animated dbt commands with test results |
| **Dashboard Mockup** | Data Quality KPIs and metrics |

### Sections

- **Hero** - Animated gradient background with social links
- **About** - Profile with skills summary
- **Skills** - Animated marquee with technology badges
- **Projects** - Featured project with 3 interactive demos
- **Experience** - Timeline of work history
- **Contact** - Form and contact information

---

## Export to Personal Repository

This portfolio is in `.gitignore` and designed to be exported:

### Option 1: Copy

```bash
# From the parent directory
cp -r portfolio/ ../my-portfolio/
cd ../my-portfolio

# Initialize git
git init
git add .
git commit -m "Initial portfolio commit"

# Create repo on GitHub, then:
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git branch -M main
git push -u origin main
```

### Option 2: Move

```bash
mv portfolio/ ../my-portfolio/
cd ../my-portfolio
git init
git add .
git commit -m "Initial portfolio commit"
git remote add origin https://github.com/YOUR_USERNAME/portfolio.git
git push -u origin main
```

---

## Deploy to Vercel (Free)

1. Push to GitHub
2. Go to [vercel.com](https://vercel.com)
3. Import your GitHub repository
4. Click Deploy

**Custom Domain:** Add in Vercel settings > Domains

---

## Customization

### Change Colors

Edit `tailwind.config.ts`:
- Primary: `emerald-500/600`
- Accent: `cyan-600/700`
- Background: `zinc-900/950`

### Email Setup (Contact Form)

1. Enable 2FA on Gmail
2. Generate app-specific password
3. Create `.env.local`:

```env
EMAIL_USER=your-email@gmail.com
EMAIL_PASS=your-16-digit-app-password
```

---

## Project Structure

```
portfolio/
├── app/
│   ├── page.tsx              # Main page (edit CONFIG here)
│   ├── layout.tsx            # Root layout
│   └── globals.css           # Global styles
│
├── components/
│   ├── ui/                   # shadcn/ui components
│   ├── demos/                # Interactive demos
│   │   ├── architecture-diagram.tsx
│   │   ├── terminal-demo.tsx
│   │   └── dashboard-mockup.tsx
│   ├── data-platform-project.tsx
│   ├── timeline.tsx          # Work experience (edit here)
│   └── ...
│
├── public/
│   └── resume.pdf            # Add your resume here
│
└── package.json
```

---

## Privacy Notes

This portfolio is sanitized for public sharing:
- Generic "Enterprise Data Platform" name
- No sensitive data or client information
- Placeholder metrics representing real achievements
- No production URLs or endpoints

---

## License

MIT - Feel free to use and modify.

---

Built with Next.js 15 and React Flow.
