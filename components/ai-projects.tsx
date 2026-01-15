"use client"

import { Bot, MessageSquare, Zap, FileText, AlertTriangle, Link2, Sparkles, Receipt, Users, Brain, FolderSync, CheckCircle, Search, BarChart3 } from "lucide-react"
import { GlassmorphicCard } from "./glassmorphic-card"
import { useLanguage } from "@/hooks/use-language"

const aifinSqlStack = [
  "Google ADK",
  "Vertex AI",
  "Gemini 2.5 Flash",
  "BigQuery Toolset",
  "Slack Bolt",
  "Cloud Run",
  "Python"
]

const aifinAgentStack = [
  "LangChain",
  "Vertex AI",
  "Python",
  "Cloud Run"
]

const expenseStack = [
  "n8n",
  "Gemini AI",
  "Google Drive",
  "Google Sheets",
  "Slack API"
]

const leadStack = [
  "n8n",
  "Gemini AI",
  "Apollo.io",
  "Serper API",
  "Google Sheets"
]

const ragStack = [
  "n8n",
  "Gemini AI",
  "Supabase",
  "pgvector",
  "Slack API"
]

export function AIProjects() {
  const { t } = useLanguage()

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-violet-500/10 border border-violet-500/20 text-violet-400 text-sm mb-4">
          <Sparkles className="w-4 h-4" />
          AI/ML
        </div>
        <h2 className="text-3xl font-bold mb-2">{t('aiProjectsTitle')}</h2>
        <p className="text-zinc-400">{t('aiProjectsSubtitle')}</p>
      </div>

      {/* First row - 2 columns */}
      <div className="grid md:grid-cols-2 gap-6">
        {/* AIFIN SQL - AI SQL Assistant */}
        <GlassmorphicCard className="p-6 group hover:border-violet-500/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-violet-500/20 to-purple-600/20 border border-violet-500/30">
                <Bot className="w-6 h-6 text-violet-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-violet-300 transition-colors">
                  {t('aifinSqlTitle')}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {t('aifinSqlDesc')}
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <MessageSquare className="w-4 h-4 text-violet-400" />
                {t('aifinSqlFeature1')}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Zap className="w-4 h-4 text-violet-400" />
                {t('aifinSqlFeature2')}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <FileText className="w-4 h-4 text-violet-400" />
                {t('aifinSqlFeature3')}
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-700/50">
              <div className="flex flex-wrap gap-2">
                {aifinSqlStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-full bg-violet-500/10 text-violet-300 border border-violet-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassmorphicCard>

        {/* AIFIN Agent - Billing Control */}
        <GlassmorphicCard className="p-6 group hover:border-cyan-500/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-cyan-500/20 to-teal-600/20 border border-cyan-500/30">
                <FileText className="w-6 h-6 text-cyan-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-cyan-300 transition-colors">
                  {t('aifinAgentTitle')}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {t('aifinAgentDesc')}
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Zap className="w-4 h-4 text-cyan-400" />
                {t('aifinAgentFeature1')}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Link2 className="w-4 h-4 text-cyan-400" />
                {t('aifinAgentFeature2')}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <AlertTriangle className="w-4 h-4 text-cyan-400" />
                {t('aifinAgentFeature3')}
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-700/50">
              <div className="flex flex-wrap gap-2">
                {aifinAgentStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-full bg-cyan-500/10 text-cyan-300 border border-cyan-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassmorphicCard>
      </div>

      {/* Second row - 3 columns */}
      <div className="grid md:grid-cols-3 gap-6 mt-6">
        {/* Smart Expense Manager */}
        <GlassmorphicCard className="p-6 group hover:border-amber-500/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-amber-500/20 to-orange-600/20 border border-amber-500/30">
                <Receipt className="w-6 h-6 text-amber-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-amber-300 transition-colors">
                  {t('expenseTitle')}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {t('expenseDesc')}
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Zap className="w-4 h-4 text-amber-400 flex-shrink-0" />
                {t('expenseFeature1')}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <CheckCircle className="w-4 h-4 text-amber-400 flex-shrink-0" />
                {t('expenseFeature2')}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <FolderSync className="w-4 h-4 text-amber-400 flex-shrink-0" />
                {t('expenseFeature3')}
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-700/50">
              <div className="flex flex-wrap gap-2">
                {expenseStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-full bg-amber-500/10 text-amber-300 border border-amber-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassmorphicCard>

        {/* B2B Lead Enrichment */}
        <GlassmorphicCard className="p-6 group hover:border-orange-500/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-orange-500/20 to-red-600/20 border border-orange-500/30">
                <Users className="w-6 h-6 text-orange-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-orange-300 transition-colors">
                  {t('leadTitle')}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {t('leadDesc')}
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Search className="w-4 h-4 text-orange-400 flex-shrink-0" />
                {t('leadFeature1')}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <BarChart3 className="w-4 h-4 text-orange-400 flex-shrink-0" />
                {t('leadFeature2')}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Zap className="w-4 h-4 text-orange-400 flex-shrink-0" />
                {t('leadFeature3')}
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-700/50">
              <div className="flex flex-wrap gap-2">
                {leadStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassmorphicCard>

        {/* RAG Knowledge Agent */}
        <GlassmorphicCard className="p-6 group hover:border-yellow-500/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-start gap-4">
              <div className="p-3 rounded-xl bg-gradient-to-br from-yellow-500/20 to-amber-600/20 border border-yellow-500/30">
                <Brain className="w-6 h-6 text-yellow-400" />
              </div>
              <div className="flex-1">
                <h3 className="text-xl font-bold text-white group-hover:text-yellow-300 transition-colors">
                  {t('ragTitle')}
                </h3>
                <p className="text-zinc-400 text-sm mt-1">
                  {t('ragDesc')}
                </p>
              </div>
            </div>
            <div className="space-y-2 pt-2">
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <FolderSync className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                {t('ragFeature1')}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <Brain className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                {t('ragFeature2')}
              </div>
              <div className="flex items-center gap-2 text-sm text-zinc-300">
                <MessageSquare className="w-4 h-4 text-yellow-400 flex-shrink-0" />
                {t('ragFeature3')}
              </div>
            </div>
            <div className="pt-4 border-t border-zinc-700/50">
              <div className="flex flex-wrap gap-2">
                {ragStack.map((tech) => (
                  <span key={tech} className="px-2 py-1 text-xs rounded-full bg-yellow-500/10 text-yellow-300 border border-yellow-500/20">
                    {tech}
                  </span>
                ))}
              </div>
            </div>
          </div>
        </GlassmorphicCard>
      </div>
    </div>
  )
}
