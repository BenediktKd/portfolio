"use client"

import Image from "next/image"
import { motion } from "framer-motion"
import { Globe } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { SectionHeading } from "./section-heading"

const languages = [
  {
    nameKey: 'spanish' as const,
    levelKey: 'native' as const,
    flagUrl: 'https://flagcdn.com/es.svg',
    color: 'from-red-500/20 to-yellow-500/20 border-red-500/30',
    textColor: 'text-red-400',
  },
  {
    nameKey: 'russian' as const,
    levelKey: 'native' as const,
    flagUrl: 'https://flagcdn.com/ru.svg',
    color: 'from-blue-500/20 to-red-500/20 border-blue-500/30',
    textColor: 'text-blue-400',
  },
  {
    nameKey: 'english' as const,
    levelKey: 'advanced' as const,
    flagUrl: 'https://flagcdn.com/gb.svg',
    color: 'from-blue-500/20 to-red-500/20 border-blue-500/30',
    textColor: 'text-cyan-400',
  },
]

export function Languages() {
  const { t } = useLanguage()

  return (
    <section id="languages" className="py-16">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t('languagesTitle')}
          subtitle={t('languagesSubtitle')}
        />

        <div className="max-w-3xl mx-auto">
          <div className="flex flex-wrap justify-center gap-4 md:gap-6">
            {languages.map((lang, index) => (
              <motion.div
                key={lang.nameKey}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                viewport={{ once: true }}
                whileHover={{ scale: 1.05, y: -5 }}
              >
                <div className={`relative overflow-hidden rounded-xl bg-gradient-to-br ${lang.color} backdrop-blur-sm border p-5 min-w-[140px] transition-all duration-300`}>
                  <div className="flex flex-col items-center gap-3">
                    {/* Flag */}
                    <div className="w-12 h-9 relative rounded overflow-hidden shadow-md">
                      <Image
                        src={lang.flagUrl}
                        alt={lang.nameKey}
                        fill
                        className="object-cover"
                        unoptimized
                      />
                    </div>

                    {/* Language name */}
                    <span className="text-lg font-semibold text-white">
                      {t(lang.nameKey)}
                    </span>

                    {/* Level badge */}
                    <span className={`px-3 py-1 rounded-full text-xs font-medium bg-zinc-800/50 ${lang.textColor}`}>
                      {t(lang.levelKey)}
                    </span>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>

          {/* Global communication note */}
          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            transition={{ duration: 0.5, delay: 0.4 }}
            viewport={{ once: true }}
            className="flex items-center justify-center gap-2 mt-8 text-zinc-500 text-sm"
          >
            <Globe className="w-4 h-4" />
            <span>3 languages for global collaboration</span>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
