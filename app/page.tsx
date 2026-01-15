"use client"

import Image from "next/image"
import Link from "next/link"
import dynamic from "next/dynamic"
import { motion } from "framer-motion"
import { ArrowRight, Github, Linkedin, Mail, Database, Server, Layout, Cpu, User } from "lucide-react"

import { Button } from "@/components/ui/button"
import { SkillBadge } from "@/components/skill-badge"
import { Timeline } from "@/components/timeline"
import { ContactForm } from "@/components/contact-form"
import { FloatingNav } from "@/components/floating-nav"
import { ScrollProgress } from "@/components/scroll-progress"
import { SectionHeading } from "@/components/section-heading"
import { GlassmorphicCard } from "@/components/glassmorphic-card"
import { Marquee } from "@/components/magicui/marquee"
import { DataPlatformProject } from "@/components/data-platform-project"
import { LanguageToggle } from "@/components/language-toggle"
import { CreativeHero } from "@/components/creative-hero"
import { AIProjects } from "@/components/ai-projects"
import { DashboardShowcase } from "@/components/dashboard-showcase"
import { Education } from "@/components/education"
import { Languages } from "@/components/languages"
import { useLanguage } from "@/hooks/use-language"

// Lazy load heavy components for better performance
const ArchitectureDiagram = dynamic(() => import("@/components/demos/architecture-diagram").then(mod => ({ default: mod.ArchitectureDiagram })), {
  loading: () => <div className="h-[500px] flex items-center justify-center text-zinc-500">Cargando diagrama...</div>,
  ssr: false
})

const TerminalDemo = dynamic(() => import("@/components/demos/terminal-demo").then(mod => ({ default: mod.TerminalDemo })), {
  loading: () => <div className="h-[350px] bg-zinc-950 rounded-xl border border-zinc-800" />,
  ssr: false
})

const DashboardMockup = dynamic(() => import("@/components/demos/dashboard-mockup").then(mod => ({ default: mod.DashboardMockup })), {
  loading: () => <div className="h-[350px] bg-zinc-950 rounded-xl border border-zinc-800" />,
  ssr: false
})

// ============================================
// CONFIGURACIÓN - Edita estos valores
// ============================================
const CONFIG = {
  name: "Benedikt Kudryavtsev",
  title: "Data Engineer | Analytics Engineer | Full Stack",
  email: "benedikt@uc.cl",
  github: "https://github.com/BenediktKd",
  linkedin: "https://www.linkedin.com/in/benedikt-kudryavtsev/",
  location: "Santiago, Chile",
  available: true,
  resumeUrl: "/CV_Benedikt_Kudryavtsev_Evgenievich.pdf",
  profileImage: "/pfpicon.png",
}

export default function Portfolio() {
  const { t } = useLanguage()

  return (
    <div className="min-h-screen bg-gradient-to-b from-zinc-900 via-zinc-900 to-black text-white overflow-hidden">
      <ScrollProgress />
      <FloatingNav />

      {/* Language Toggle - Fixed Position */}
      <div className="fixed top-4 right-4 z-50">
        <LanguageToggle />
      </div>

      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center overflow-hidden pt-20">
        <div className="absolute inset-0 z-0">
          <div className="absolute top-20 left-10 w-72 h-72 bg-emerald-600 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob"></div>
          <div className="absolute top-40 right-10 w-72 h-72 bg-blue-500 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-2000"></div>
          <div className="absolute bottom-20 left-1/3 w-72 h-72 bg-cyan-700 rounded-full mix-blend-multiply filter blur-3xl opacity-20 animate-blob animation-delay-4000"></div>
        </div>

        <div className="container relative z-10 px-4 sm:px-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Left: Text Content */}
            <div className="space-y-8 text-center lg:text-left">
              <div className="relative inline-block px-4 py-2 text-sm font-medium rounded-full bg-white/10 backdrop-blur-sm border border-white/20">
                <span className="relative z-10">{CONFIG.title}</span>
                <span className="absolute inset-0 rounded-full bg-gradient-to-r from-emerald-500/20 to-cyan-700/20 animate-pulse"></span>
              </div>

              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight">
                <span className="block">{t('greeting')}</span>
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600">
                  {CONFIG.name}
                </span>
              </h1>

              <p className="text-lg lg:text-xl text-zinc-400 max-w-[600px]">
                {t('aboutDescription1')}
              </p>

              <div className="flex flex-wrap gap-4 justify-center lg:justify-start">
                <Link href="#projects">
                  <Button className="relative overflow-hidden group bg-gradient-to-r from-emerald-600 to-cyan-800 border-0">
                    <span className="relative z-10 flex items-center">
                      {t('viewProjects')} <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                    </span>
                  </Button>
                </Link>
                <Link href="#contact">
                  <Button variant="outline" className="border-zinc-700 text-zinc-300 hover:text-white hover:border-zinc-500 bg-transparent">
                    {t('contactMe')}
                  </Button>
                </Link>
              </div>

              <div className="flex gap-4 justify-center lg:justify-start">
                <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                    <Github className="h-5 w-5" />
                  </Button>
                </a>
                <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
                  <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                    <Linkedin className="h-5 w-5" />
                  </Button>
                </a>
                <a href={`mailto:${CONFIG.email}`}>
                  <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                    <Mail className="h-5 w-5" />
                  </Button>
                </a>
              </div>
            </div>

            {/* Right: Creative Hero with Profile Image */}
            <div className="flex justify-center lg:justify-end">
              <CreativeHero
                name={CONFIG.name}
                profileImage={CONFIG.profileImage}
                available={CONFIG.available}
              />
            </div>
          </div>
        </div>

        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce hidden sm:block">
          <div className="w-6 h-10 rounded-full border-2 border-white/20 flex justify-center items-start p-1">
            <div className="w-1.5 h-1.5 rounded-full bg-white/60 animate-pulse"></div>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section id="about" className="py-24 relative">
        <div className="container relative z-10">
          <SectionHeading title={t('aboutTitle')} subtitle={t('aboutSubtitle')} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <div className="relative">
              <div className="absolute -inset-4 rounded-xl bg-gradient-to-r from-emerald-500/20 to-cyan-700/20 blur-xl opacity-70"></div>
              <div className="relative aspect-square rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
                <Image
                  src={CONFIG.profileImage}
                  alt={CONFIG.name}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  className="object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent"></div>
                <div className="absolute bottom-0 left-0 w-full p-6">
                  <div className="flex items-center gap-2">
                    <div className={`w-3 h-3 rounded-full ${CONFIG.available ? 'bg-green-500 animate-pulse' : 'bg-zinc-500'}`}></div>
                    <span className="text-sm font-medium">
                      {CONFIG.available ? t('availableForWork') : t('currentlyEmployed')}
                    </span>
                  </div>
                </div>
              </div>
            </div>

            <div className="space-y-6">
              <GlassmorphicCard>
                <p className="text-lg text-zinc-300">{t('aboutDescription1')}</p>
                <p className="text-lg text-zinc-300 mt-4">{t('aboutDescription2')}</p>
                <p className="text-lg text-zinc-300 mt-4">{t('aboutDescription3')}</p>

                {/* Full Stack Flow Indicator */}
                <div className="mt-6 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50">
                  <div className="text-xs text-zinc-500 mb-3 uppercase tracking-wider">Stack Completo</div>
                  <div className="flex items-center justify-between gap-1 sm:gap-2">
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-emerald-500/20">
                        <Database className="w-4 h-4 sm:w-5 sm:h-5 text-emerald-400" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-zinc-400">Data</span>
                    </div>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-600 flex-shrink-0" />
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-cyan-500/20">
                        <Cpu className="w-4 h-4 sm:w-5 sm:h-5 text-cyan-400" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-zinc-400">Transform</span>
                    </div>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-600 flex-shrink-0" />
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-blue-500/20">
                        <Server className="w-4 h-4 sm:w-5 sm:h-5 text-blue-400" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-zinc-400">APIs</span>
                    </div>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-600 flex-shrink-0" />
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-purple-500/20">
                        <Layout className="w-4 h-4 sm:w-5 sm:h-5 text-purple-400" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-zinc-400">Frontend</span>
                    </div>
                    <ArrowRight className="w-3 h-3 sm:w-4 sm:h-4 text-zinc-600 flex-shrink-0" />
                    <div className="flex flex-col items-center gap-1">
                      <div className="w-8 h-8 sm:w-10 sm:h-10 rounded-full flex items-center justify-center bg-pink-500/20">
                        <User className="w-4 h-4 sm:w-5 sm:h-5 text-pink-400" />
                      </div>
                      <span className="text-[10px] sm:text-xs text-zinc-400">User</span>
                    </div>
                  </div>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t('name')}</div>
                    <div className="font-medium">{CONFIG.name}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t('email')}</div>
                    <div className="font-medium break-all">{CONFIG.email}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t('location')}</div>
                    <div className="font-medium">{CONFIG.location}</div>
                  </div>
                  <div className="space-y-1">
                    <div className="text-sm text-zinc-500">{t('availability')}</div>
                    <div className={`font-medium ${CONFIG.available ? 'text-green-500' : 'text-zinc-400'}`}>
                      {CONFIG.available ? t('availableForWork') : t('currentlyEmployed')}
                    </div>
                  </div>
                </div>

                <div className="mt-8">
                  <a href={CONFIG.resumeUrl} target="_blank" rel="noopener noreferrer" className="bg-zinc-800 hover:bg-zinc-700 text-white px-4 py-2 rounded-md">
                    {t('viewResume')}
                  </a>
                </div>
              </GlassmorphicCard>
            </div>
          </div>
        </div>
      </section>

      {/* Education Section */}
      <Education />

      {/* Languages Section */}
      <Languages />

      {/* Skills Section - Animated Flow + Categorized Marquees */}
      <section id="skills" className="py-24 relative">
        <div className="container relative z-10">
          <SectionHeading title={t('skillsTitle')} subtitle={t('skillsSubtitle')} />

          {/* Full Stack Flow - Animated Header */}
          <div className="mt-12 mb-16">
            <div className="relative max-w-4xl mx-auto px-4 overflow-x-auto">
              <div className="flex items-center justify-center gap-2 sm:gap-4 min-w-max mx-auto">
                {[
                  { label: 'Data', icon: Database, color: 'emerald', tools: 'BigQuery, dbt' },
                  { label: 'Transform', icon: Cpu, color: 'cyan', tools: 'Python, SQL' },
                  { label: 'APIs', icon: Server, color: 'blue', tools: 'Cloud Run, FastAPI' },
                  { label: 'Frontend', icon: Layout, color: 'purple', tools: 'Next.js, React' },
                  { label: 'User', icon: User, color: 'pink', tools: 'UX/UI' },
                ].map((step, i, arr) => (
                  <div key={step.label} className="flex items-center">
                    <motion.div
                      className="flex flex-col items-center"
                      initial={{ opacity: 0, y: 20 }}
                      whileInView={{ opacity: 1, y: 0 }}
                      transition={{ delay: i * 0.1 }}
                      viewport={{ once: true }}
                    >
                      <div className={`w-10 h-10 sm:w-14 sm:h-14 rounded-xl sm:rounded-2xl flex items-center justify-center ${
                        step.color === 'emerald' ? 'bg-emerald-500/20 border-emerald-500/30' :
                        step.color === 'cyan' ? 'bg-cyan-500/20 border-cyan-500/30' :
                        step.color === 'blue' ? 'bg-blue-500/20 border-blue-500/30' :
                        step.color === 'purple' ? 'bg-purple-500/20 border-purple-500/30' :
                        'bg-pink-500/20 border-pink-500/30'
                      } border`}>
                        <step.icon className={`w-5 h-5 sm:w-7 sm:h-7 ${
                          step.color === 'emerald' ? 'text-emerald-400' :
                          step.color === 'cyan' ? 'text-cyan-400' :
                          step.color === 'blue' ? 'text-blue-400' :
                          step.color === 'purple' ? 'text-purple-400' :
                          'text-pink-400'
                        }`} />
                      </div>
                      <span className={`mt-1 sm:mt-2 text-[10px] sm:text-sm font-medium ${
                        step.color === 'emerald' ? 'text-emerald-400' :
                        step.color === 'cyan' ? 'text-cyan-400' :
                        step.color === 'blue' ? 'text-blue-400' :
                        step.color === 'purple' ? 'text-purple-400' :
                        'text-pink-400'
                      }`}>{step.label}</span>
                      <span className="text-[10px] sm:text-xs text-zinc-500 hidden sm:block">{step.tools}</span>
                    </motion.div>

                    {i < arr.length - 1 && (
                      <motion.div
                        className="flex-shrink-0"
                        initial={{ opacity: 0, scale: 0 }}
                        whileInView={{ opacity: 1, scale: 1 }}
                        transition={{ delay: i * 0.1 + 0.15 }}
                        viewport={{ once: true }}
                      >
                        <ArrowRight className="w-3 h-3 sm:w-5 sm:h-5 text-zinc-600" />
                      </motion.div>
                    )}
                  </div>
                ))}
              </div>

              <motion.div
                className="mt-6 text-center"
                initial={{ opacity: 0 }}
                whileInView={{ opacity: 1 }}
                transition={{ delay: 0.6 }}
                viewport={{ once: true }}
              >
                <span className="text-xs uppercase tracking-widest text-zinc-500">
                  ← Full Stack Coverage →
                </span>
              </motion.div>
            </div>
          </div>

          {/* Categorized Marquees */}
          <div className="relative flex w-full flex-col items-center justify-center overflow-hidden gap-4">

            {/* Row 1: Data & Analytics (emerald) */}
            <Marquee pauseOnHover className="[--duration:40s]">
              {['BigQuery', 'dbt', 'SQL', 'ETL/ELT', 'Data Modeling', 'Power BI', 'GCS', 'SaaS Metrics', 'Financial Analytics'].map(skill => (
                <span key={skill} className="mx-2 px-4 py-2 text-sm font-medium rounded-full bg-emerald-500/10 text-emerald-300 border border-emerald-500/20 backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </Marquee>

            {/* Row 2: Backend & AI (blue) */}
            <Marquee reverse pauseOnHover className="[--duration:50s]">
              {['Python', 'Cloud Run', 'PostgreSQL', 'Docker', 'FastAPI', 'REST APIs', 'GitHub Actions', 'Vertex AI', 'Gemini AI', 'LangChain', 'Google ADK', 'n8n', 'Slack Bolt'].map(skill => (
                <span key={skill} className="mx-2 px-4 py-2 text-sm font-medium rounded-full bg-blue-500/10 text-blue-300 border border-blue-500/20 backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </Marquee>

            {/* Row 3: Frontend (purple) */}
            <Marquee pauseOnHover className="[--duration:30s]">
              {['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion', 'Shadcn/ui'].map(skill => (
                <span key={skill} className="mx-2 px-4 py-2 text-sm font-medium rounded-full bg-purple-500/10 text-purple-300 border border-purple-500/20 backdrop-blur-sm">
                  {skill}
                </span>
              ))}
            </Marquee>

            <div className="pointer-events-none absolute inset-y-0 left-0 w-1/4 bg-gradient-to-r from-zinc-900"></div>
            <div className="pointer-events-none absolute inset-y-0 right-0 w-1/4 bg-gradient-to-l from-zinc-900"></div>
          </div>
        </div>
      </section>

      {/* Featured Project Section */}
      <section id="projects" className="py-24 relative">
        <div className="container relative z-10">
          <SectionHeading title={t('projectsTitle')} subtitle={t('projectsSubtitle')} />

          <div className="mt-16">
            <DataPlatformProject />
          </div>

          {/* Interactive Demos */}
          <div className="mt-24 space-y-24">
            <div>
              <h3 className="text-2xl font-bold text-center mb-8">
                <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600">
                  {t('interactiveArch')}
                </span>
              </h3>
              <ArchitectureDiagram />
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div>
                <h3 className="text-xl font-bold text-center mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600">
                    {t('liveTerminal')}
                  </span>
                </h3>
                <TerminalDemo />
              </div>
              <div>
                <h3 className="text-xl font-bold text-center mb-6">
                  <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600">
                    {t('dataQualityDashboard')}
                  </span>
                </h3>
                <DashboardMockup />
              </div>
            </div>
          </div>

          {/* AI Projects Section */}
          <div className="mt-24">
            <AIProjects />
          </div>

          {/* Dashboard Showcase Section */}
          <div className="mt-24">
            <DashboardShowcase />
          </div>
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="py-24 relative">
        <div className="container relative z-10">
          <SectionHeading title={t('experienceTitle')} subtitle={t('experienceSubtitle')} />
          <div className="mt-16">
            <Timeline />
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 relative">
        <div className="container relative z-10">
          <SectionHeading title={t('contactTitle')} subtitle={t('contactSubtitle')} />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center mt-16">
            <GlassmorphicCard>
              <h3 className="text-2xl font-bold mb-6">{t('contactInfo')}</h3>
              <div className="space-y-6">
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Mail className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">Email</div>
                    <div className="font-medium">{CONFIG.email}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Linkedin className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">LinkedIn</div>
                    <div className="font-medium">{CONFIG.linkedin.replace('https://', '')}</div>
                  </div>
                </div>
                <div className="flex items-center gap-4">
                  <div className="w-12 h-12 rounded-full bg-zinc-800 flex items-center justify-center">
                    <Github className="h-5 w-5 text-emerald-400" />
                  </div>
                  <div>
                    <div className="text-sm text-zinc-500">GitHub</div>
                    <div className="font-medium">{CONFIG.github.replace('https://', '')}</div>
                  </div>
                </div>
              </div>

              <div className="mt-8 pt-8 border-t border-zinc-800">
                <h4 className="text-lg font-medium mb-4">{t('currentStatus')}</h4>
                <div className="flex items-center gap-2">
                  <div className={`w-3 h-3 rounded-full ${CONFIG.available ? 'bg-green-500 animate-pulse' : 'bg-zinc-500'}`}></div>
                  <span>{CONFIG.available ? t('openToRoles') : t('openToOpportunities')}</span>
                </div>
              </div>
            </GlassmorphicCard>

            <ContactForm />
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="border-t border-zinc-800 py-12">
        <div className="container flex flex-col md:flex-row justify-between items-center gap-6">
          <div>
            <Link href="/" className="font-bold text-xl">
              <span className="bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-600">
                {CONFIG.name.split(' ')[0]}
              </span>
              <span className="text-white">Engineer</span>
            </Link>
            <p className="text-sm text-zinc-500 mt-2">
              © {new Date().getFullYear()} {CONFIG.name}. {t('allRightsReserved')}.
            </p>
          </div>
          <div className="flex gap-4">
            <a href={CONFIG.github} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Github className="h-5 w-5" />
              </Button>
            </a>
            <a href={CONFIG.linkedin} target="_blank" rel="noopener noreferrer">
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Linkedin className="h-5 w-5" />
              </Button>
            </a>
            <a href={`mailto:${CONFIG.email}`}>
              <Button variant="ghost" size="icon" className="rounded-full bg-zinc-800/50 hover:bg-zinc-800 text-zinc-400 hover:text-white">
                <Mail className="h-5 w-5" />
              </Button>
            </a>
          </div>
        </div>
      </footer>
    </div>
  )
}
