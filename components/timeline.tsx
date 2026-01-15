"use client"

import { motion } from "framer-motion"
import { useMobile } from "@/hooks/use-mobile"
import { useLanguage } from "@/hooks/use-language"

// Experiencia laboral con traducciones ES/EN
const experiencesData = {
  es: [
    {
      title: "Ingeniero de Datos y Business Intelligence",
      company: "Enerlink Spa",
      period: "Feb 2025 - Actualidad",
      description:
        "Arquitecté plataforma de datos empresarial en GCP BigQuery integrando 12 fuentes externas (Odoo ERP, Kushki, Clay, Siigo, HubSpot, BUK) en 4 países LATAM. Desarrollé +100 modelos dbt con +1000 tests automatizados logrando 99.9% de confiabilidad.",
      metrics: ["100+ modelos dbt", "1000+ tests", "12 fuentes", "4 países", "99.9% uptime"],
    },
    {
      title: "Analista de Control de Gestión (BI y Automatización)",
      company: "Wenco SA",
      period: "Jun 2024 - Dic 2024",
      description:
        "Diseño e implementación de soluciones de BI, creando dashboards interactivos en Power BI para KPIs comerciales. Desarrollo de modelos predictivos para optimización de costos y automatización de reportería.",
      metrics: ["Optimización de costos", "Modelos predictivos", "Power BI"],
    },
    {
      title: "Desarrollador Frontend (Visualización de Datos)",
      company: "Broota Spa",
      period: "Ago 2023 - Dic 2023",
      description:
        "Participé en el desarrollo de una plataforma de análisis, creando dashboards interactivos con Javascript y React para visualizar datos financieros de startups y PYMES. Integré múltiples APIs de servicios financieros.",
      metrics: ["Dashboards interactivos", "50+ startups", "React + D3.js"],
    },
    {
      title: "Asesor de Gerencia (Líder de Proyectos de Datos)",
      company: "Inversiones Don Laureano SPA",
      period: "Dic 2022 - Ago 2023",
      description:
        "Lideré una iniciativa de transformación digital que reestructuró la organización a través del análisis de datos. Implementé un sistema integral de monitoreo de KPIs financieros.",
      metrics: ["Transformación digital", "KPIs en tiempo real", "3 unidades de negocio"],
    },
    {
      title: "Administrativo (Analítica y Sistemas)",
      company: "Terramayor Spa",
      period: "Ago 2020 - Mar 2022",
      description:
        "Diseñé e implementé procesos analíticos que condujeron a la reducción de costos operativos mediante la optimización de modelos de negocio. Desarrollé reportes automatizados para el seguimiento del desempeño organizacional.",
      metrics: ["20% reducción costos", "Reportes automatizados", "Excel + VBA"],
    },
  ],
  en: [
    {
      title: "Data Engineer & Business Intelligence",
      company: "Enerlink Spa",
      period: "Feb 2025 - Present",
      description:
        "Architected enterprise data platform on GCP BigQuery integrating 12 external sources (Odoo ERP, Kushki, Clay, Siigo, HubSpot, BUK) across 4 LATAM countries. Developed +100 dbt models with +1000 automated tests achieving 99.9% data reliability.",
      metrics: ["100+ dbt models", "1000+ tests", "12 sources", "4 countries", "99.9% uptime"],
    },
    {
      title: "Management Control Analyst (BI & Automation)",
      company: "Wenco SA",
      period: "Jun 2024 - Dec 2024",
      description:
        "Design and implementation of BI solutions, creating interactive Power BI dashboards for commercial KPIs. Development of predictive models for cost optimization and report automation.",
      metrics: ["Cost optimization", "Predictive models", "Power BI"],
    },
    {
      title: "Frontend Developer (Data Visualization)",
      company: "Broota Spa",
      period: "Aug 2023 - Dec 2023",
      description:
        "Participated in developing an analytics platform, creating interactive dashboards with Javascript and React to visualize financial data from startups and SMEs. Integrated multiple financial services APIs.",
      metrics: ["Interactive dashboards", "50+ startups", "React + D3.js"],
    },
    {
      title: "Management Advisor (Data Projects Lead)",
      company: "Inversiones Don Laureano SPA",
      period: "Dec 2022 - Aug 2023",
      description:
        "Led a digital transformation initiative that restructured the organization through data analysis. Implemented a comprehensive financial KPI monitoring system.",
      metrics: ["Digital transformation", "Real-time KPIs", "3 business units"],
    },
    {
      title: "Administrative (Analytics & Systems)",
      company: "Terramayor Spa",
      period: "Aug 2020 - Mar 2022",
      description:
        "Designed and implemented analytical processes that led to operational cost reduction through business model optimization. Developed automated reports for organizational performance tracking.",
      metrics: ["20% cost reduction", "Automated reports", "Excel + VBA"],
    },
  ],
}

export function Timeline() {
  const isMobile = useMobile()
  const { language } = useLanguage()
  const experiences = experiencesData[language]

  return (
    <div
      className={`space-y-12 relative ${
        !isMobile
          ? "before:absolute before:inset-0 before:left-1/2 before:ml-0 before:-translate-x-px before:border-l-2 before:border-zinc-700 before:h-full before:z-0"
          : ""
      }`}
    >
      {experiences.map((experience, index) => (
        <div
          key={index}
          className={`relative z-10 flex items-center ${index % 2 === 0 ? "md:flex-row-reverse" : "md:flex-row"}`}
        >
          <motion.div
            className={`w-full md:w-1/2 ${index % 2 === 0 ? "md:pl-10" : "md:pr-10"}`}
            initial={{ opacity: 0, x: index % 2 === 0 ? 50 : -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.5 }}
            viewport={{ once: true }}
          >
            <div className="relative overflow-hidden rounded-xl bg-zinc-800/50 backdrop-blur-sm border border-zinc-700/50 p-6 transition-all duration-300 hover:border-emerald-500/50">
              <div className="absolute -inset-1 bg-gradient-to-r from-emerald-500/10 to-cyan-700/10 rounded-xl blur opacity-25 hover:opacity-100 transition duration-1000 hover:duration-200"></div>

              <div className="relative">
                <h3 className="text-xl font-bold">{experience.title}</h3>
                <div className="text-zinc-400 mb-4">
                  {experience.company} | {experience.period}
                </div>
                <p className="text-zinc-300 mb-4">{experience.description}</p>
                {experience.metrics && (
                  <div className="flex flex-wrap gap-2">
                    {experience.metrics.map((metric, i) => (
                      <span
                        key={i}
                        className="px-2 py-1 text-xs font-medium rounded-full bg-emerald-500/10 text-emerald-400 border border-emerald-500/20"
                      >
                        {metric}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          </motion.div>

          {!isMobile && (
            <div className="absolute left-1/2 -translate-x-1/2 flex items-center justify-center">
              <motion.div
                className="w-6 h-6 rounded-full bg-gradient-to-r from-emerald-600 to-cyan-800 z-10 flex items-center justify-center"
                initial={{ scale: 0 }}
                whileInView={{ scale: 1 }}
                transition={{ duration: 0.3 }}
                viewport={{ once: true }}
              >
                <div className="w-2 h-2 rounded-full bg-white"></div>
              </motion.div>
            </div>
          )}
        </div>
      ))}
    </div>
  )
}
