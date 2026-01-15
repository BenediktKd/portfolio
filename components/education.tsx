"use client"

import { motion } from "framer-motion"
import { GraduationCap, Award, Calendar } from "lucide-react"
import { useLanguage } from "@/hooks/use-language"
import { SectionHeading } from "./section-heading"

export function Education() {
  const { t } = useLanguage()

  return (
    <section id="education" className="py-20">
      <div className="container mx-auto px-4">
        <SectionHeading
          title={t('educationTitle')}
          subtitle={t('educationSubtitle')}
        />

        <div className="max-w-3xl mx-auto">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-2xl bg-gradient-to-br from-zinc-800/80 to-zinc-900/80 backdrop-blur-sm border border-zinc-700/50 p-8 transition-all duration-300 hover:border-emerald-500/50 group">
              {/* Gradient glow effect */}
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/20 via-cyan-500/20 to-emerald-500/20 rounded-2xl blur opacity-25 group-hover:opacity-50 transition duration-500"></div>

              <div className="relative">
                {/* University badge */}
                <div className="flex items-center gap-2 mb-6">
                  <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-emerald-500/10 border border-emerald-500/20 text-emerald-400 text-sm">
                    <Award className="w-4 h-4" />
                    {t('topUniversity')}
                  </div>
                </div>

                <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-6">
                  {/* Left side - Degree info */}
                  <div className="flex-1">
                    <div className="flex items-start gap-4">
                      <div className="p-3 rounded-xl bg-gradient-to-br from-emerald-500/20 to-cyan-600/20 border border-emerald-500/30">
                        <GraduationCap className="w-8 h-8 text-emerald-400" />
                      </div>
                      <div>
                        <h3 className="text-2xl font-bold text-white mb-1">
                          {t('degree')}
                        </h3>
                        <p className="text-emerald-400 font-medium mb-3">
                          {t('major')}
                        </p>
                        <p className="text-xl text-zinc-300 font-semibold">
                          {t('university')}
                        </p>
                      </div>
                    </div>
                  </div>

                  {/* Right side - Year */}
                  <div className="flex items-center gap-2 px-4 py-2 rounded-lg bg-zinc-800/50 border border-zinc-700/50">
                    <Calendar className="w-5 h-5 text-zinc-400" />
                    <span className="text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-emerald-400 to-cyan-400">
                      {t('graduationYear')}
                    </span>
                  </div>
                </div>

                {/* Decorative elements */}
                <div className="absolute top-4 right-4 w-24 h-24 bg-gradient-to-br from-emerald-500/10 to-cyan-500/10 rounded-full blur-2xl"></div>
                <div className="absolute bottom-4 left-4 w-16 h-16 bg-gradient-to-br from-cyan-500/10 to-emerald-500/10 rounded-full blur-xl"></div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  )
}
