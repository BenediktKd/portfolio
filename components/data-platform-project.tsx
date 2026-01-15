"use client"

import { Database, CheckCircle, Link2, TrendingUp, Globe, Cloud, Layers, TestTube, User } from "lucide-react"
import { GlassmorphicCard } from "./glassmorphic-card"
import { useLanguage } from "@/hooks/use-language"

const techStack = [
  "BigQuery", "dbt", "Python", "Cloud Run", "Cloud Scheduler",
  "GitHub Actions", "SQL", "Dimensional Modeling", "Power BI"
]

export function DataPlatformProject() {
  const { t, language } = useLanguage()

  const metrics = [
    { value: "107", label: t('modelsLabel'), icon: Database, color: "from-emerald-400 to-emerald-600" },
    { value: "1,233", label: t('testsLabel'), icon: TestTube, color: "from-green-400 to-green-600" },
    { value: "12", label: t('sourcesLabel'), icon: Link2, color: "from-cyan-400 to-cyan-600" },
    { value: "91%", label: t('accuracyLabel'), icon: TrendingUp, color: "from-blue-400 to-blue-600" },
    { value: "4", label: t('countriesLabel'), icon: Globe, color: "from-purple-400 to-purple-600" },
    { value: "6", label: t('servicesLabel'), icon: Cloud, color: "from-pink-400 to-pink-600" },
  ]

  const highlights = [
    t('achievement1'),
    t('achievement2'),
    t('achievement3'),
    t('achievement4'),
  ]

  const architectureLayers = language === 'es'
    ? ['Fuentes (12)', 'Capa RAW', 'Capa STAGING', 'Capa DWH', 'Capa MARTS', 'Power BI']
    : ['Sources (12)', 'RAW Layer', 'STAGING Layer', 'DWH Layer', 'MARTS Layer', 'Power BI']

  const architectureLabel = language === 'es' ? 'Capas de Arquitectura' : 'Architecture Layers'
  const featuredLabel = language === 'es' ? 'Proyecto Destacado' : 'Featured Project'

  return (
    <div className="space-y-8">
      {/* Main Project Card */}
      <GlassmorphicCard className="p-8">
        <div className="flex flex-col lg:flex-row gap-8">
          {/* Left: Description */}
          <div className="flex-1 space-y-6">
            <div>
              <div className="flex flex-wrap gap-2 mb-4">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                  <Layers className="w-4 h-4" />
                  {featuredLabel}
                </div>
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-purple-500/10 border border-purple-500/20 text-purple-400 text-sm">
                  <User className="w-4 h-4" />
                  {t('soloArchitect')}
                </div>
              </div>
              <h2 className="text-3xl font-bold mb-2">{t('projectTitle')}</h2>
              <p className="text-zinc-400">{t('projectSubtitle')}</p>
              <p className="text-purple-400/80 text-sm mt-2 italic">{t('soloArchitectDesc')}</p>
            </div>

            <p className="text-zinc-300 text-lg leading-relaxed">
              {t('projectDescription')}
            </p>

            <div className="space-y-3">
              <h4 className="font-semibold text-white flex items-center gap-2">
                <CheckCircle className="w-5 h-5 text-emerald-400" />
                {t('keyAchievements')}
              </h4>
              <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                {highlights.map((highlight, i) => (
                  <li key={i} className="flex items-start gap-2 text-zinc-400 text-sm">
                    <span className="text-emerald-400 mt-1">•</span>
                    {highlight}
                  </li>
                ))}
              </ul>
            </div>

            {/* Tech Stack Tags */}
            <div className="space-y-2 pt-4">
              <h4 className="text-sm text-zinc-500">{t('techStack')}</h4>
              <div className="flex flex-wrap gap-2">
                {techStack.map((tech) => (
                  <span
                    key={tech}
                    className="px-3 py-1 text-sm rounded-full bg-zinc-800 text-zinc-300 border border-zinc-700"
                  >
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>

          {/* Right: Metrics Grid */}
          <div className="lg:w-80">
            <div className="grid grid-cols-2 gap-4">
              {metrics.map((metric, i) => (
                <div
                  key={i}
                  className="relative group p-4 rounded-xl bg-zinc-800/50 border border-zinc-700/50 hover:border-zinc-600 transition-all"
                >
                  <div className={`absolute inset-0 rounded-xl bg-gradient-to-br ${metric.color} opacity-0 group-hover:opacity-10 transition-opacity`} />
                  <metric.icon className={`w-6 h-6 mb-2 bg-gradient-to-br ${metric.color} bg-clip-text text-transparent`}
                    style={{ color: metric.color.includes('emerald') ? '#34d399' :
                             metric.color.includes('green') ? '#4ade80' :
                             metric.color.includes('cyan') ? '#22d3ee' :
                             metric.color.includes('blue') ? '#60a5fa' :
                             metric.color.includes('purple') ? '#a78bfa' : '#f472b6' }}
                  />
                  <div className="text-2xl font-bold text-white">{metric.value}</div>
                  <div className="text-xs text-zinc-500">{metric.label}</div>
                </div>
              ))}
            </div>

            {/* Architecture Preview */}
            <div className="mt-4 p-4 rounded-xl bg-zinc-800/30 border border-zinc-700/50">
              <div className="text-xs text-zinc-500 mb-3">{architectureLabel}</div>
              <div className="space-y-2">
                {architectureLayers.map((layer, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className={`w-2 h-2 rounded-full ${
                      i === 0 ? 'bg-zinc-500' :
                      i === 1 ? 'bg-red-400' :
                      i === 2 ? 'bg-yellow-400' :
                      i === 3 ? 'bg-emerald-400' :
                      i === 4 ? 'bg-cyan-400' : 'bg-purple-400'
                    }`} />
                    <span className="text-sm text-zinc-400">{layer}</span>
                    {i < 5 && <span className="text-zinc-600 ml-auto">→</span>}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </GlassmorphicCard>
    </div>
  )
}
