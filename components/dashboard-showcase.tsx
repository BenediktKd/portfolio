"use client"

import { BarChart3, TrendingUp, TrendingDown, Users, AlertTriangle, DollarSign, Globe, Activity } from "lucide-react"
import { GlassmorphicCard } from "./glassmorphic-card"
import { useLanguage } from "@/hooks/use-language"

// Mini KPI Card component
function KPICard({
  label,
  value,
  trend,
  trendUp = true,
  color = "emerald"
}: {
  label: string
  value: string
  trend?: string
  trendUp?: boolean
  color?: "emerald" | "cyan" | "amber" | "red" | "purple"
}) {
  const colorClasses = {
    emerald: "from-emerald-500/20 to-emerald-600/10 border-emerald-500/30 text-emerald-400",
    cyan: "from-cyan-500/20 to-cyan-600/10 border-cyan-500/30 text-cyan-400",
    amber: "from-amber-500/20 to-amber-600/10 border-amber-500/30 text-amber-400",
    red: "from-red-500/20 to-red-600/10 border-red-500/30 text-red-400",
    purple: "from-purple-500/20 to-purple-600/10 border-purple-500/30 text-purple-400",
  }

  return (
    <div className={`p-3 rounded-lg bg-gradient-to-br ${colorClasses[color]} border`}>
      <div className="text-xs text-zinc-400 mb-1">{label}</div>
      <div className="text-lg font-bold text-white">{value}</div>
      {trend && (
        <div className={`flex items-center gap-1 text-xs mt-1 ${trendUp ? 'text-emerald-400' : 'text-red-400'}`}>
          {trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
          {trend}
        </div>
      )}
    </div>
  )
}

// Mini Bar Chart component (visual representation)
function MiniBarChart({ data }: { data: { label: string; value: number; color: string }[] }) {
  const maxValue = Math.max(...data.map(d => d.value))

  return (
    <div className="space-y-2">
      {data.map((item, i) => (
        <div key={i} className="flex items-center gap-2">
          <div className="w-16 text-xs text-zinc-400 truncate">{item.label}</div>
          <div className="flex-1 h-4 bg-zinc-800 rounded-full overflow-hidden">
            <div
              className={`h-full rounded-full ${item.color}`}
              style={{ width: `${(item.value / maxValue) * 100}%` }}
            />
          </div>
        </div>
      ))}
    </div>
  )
}

// Country indicator pills
function CountryPills() {
  const countries = [
    { code: "CL", name: "Chile", color: "bg-emerald-500" },
    { code: "CO", name: "Colombia", color: "bg-yellow-500" },
    { code: "MX", name: "Mexico", color: "bg-red-500" },
    { code: "PE", name: "Peru", color: "bg-cyan-500" },
  ]

  return (
    <div className="flex flex-wrap gap-2">
      {countries.map((country) => (
        <div key={country.code} className="flex items-center gap-1.5 px-2 py-1 rounded-full bg-zinc-800/50 border border-zinc-700/50">
          <div className={`w-2 h-2 rounded-full ${country.color}`} />
          <span className="text-xs text-zinc-300">{country.code}</span>
        </div>
      ))}
    </div>
  )
}

// Health status indicator
function HealthIndicator({ healthy, atRisk, critical }: { healthy: number; atRisk: number; critical: number }) {
  const total = healthy + atRisk + critical

  return (
    <div className="space-y-2">
      <div className="flex h-3 rounded-full overflow-hidden bg-zinc-800">
        <div className="bg-emerald-500" style={{ width: `${(healthy / total) * 100}%` }} />
        <div className="bg-amber-500" style={{ width: `${(atRisk / total) * 100}%` }} />
        <div className="bg-red-500" style={{ width: `${(critical / total) * 100}%` }} />
      </div>
      <div className="flex justify-between text-xs">
        <span className="text-emerald-400">Healthy</span>
        <span className="text-amber-400">At Risk</span>
        <span className="text-red-400">Critical</span>
      </div>
    </div>
  )
}

// Metrics list
function MetricsList() {
  const metrics = ["MRR", "ARR", "NRR", "Churn", "LTV", "ARPU", "CAC"]

  return (
    <div className="flex flex-wrap gap-1.5">
      {metrics.map((metric) => (
        <span key={metric} className="px-2 py-0.5 text-xs rounded bg-zinc-800 text-zinc-300 border border-zinc-700/50">
          {metric}
        </span>
      ))}
    </div>
  )
}

export function DashboardShowcase() {
  const { t } = useLanguage()

  // MRR Bridge visualization data
  const mrrBridgeData = [
    { label: "Expansion", value: 12400, color: "bg-emerald-500" },
    { label: "Contraction", value: 3200, color: "bg-amber-500" },
    { label: "Churn", value: 1800, color: "bg-red-500" },
  ]

  return (
    <div className="space-y-8">
      <div className="text-center mb-8">
        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-blue-500/10 border border-blue-500/20 text-blue-400 text-sm mb-4">
          <BarChart3 className="w-4 h-4" />
          Power BI
        </div>
        <h2 className="text-3xl font-bold mb-2">{t('dashboardsTitle')}</h2>
        <p className="text-zinc-400">{t('dashboardsSubtitle')}</p>
      </div>

      <div className="grid md:grid-cols-3 gap-6">
        {/* NRR Executive Dashboard */}
        <GlassmorphicCard className="p-5 group hover:border-blue-500/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Activity className="w-5 h-5 text-blue-400" />
              <h3 className="font-semibold text-white">{t('dashboardNrr')}</h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <KPICard label="MRR" value="$47.2K" trend="+8%" color="emerald" />
              <KPICard label="ARR" value="$566K" color="cyan" />
              <KPICard label="NRR" value="112%" trend="stable" trendUp={true} color="purple" />
              <KPICard label="Churn" value="2.1%" trendUp={false} color="amber" />
            </div>

            <div className="pt-3 border-t border-zinc-700/50">
              <div className="text-xs text-zinc-500 mb-2">MRR Bridge</div>
              <MiniBarChart data={mrrBridgeData} />
            </div>
          </div>
        </GlassmorphicCard>

        {/* Finance & Revenue Dashboard */}
        <GlassmorphicCard className="p-5 group hover:border-emerald-500/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <DollarSign className="w-5 h-5 text-emerald-400" />
              <h3 className="font-semibold text-white">{t('dashboardFinance')}</h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <KPICard label="Revenue" value="$892K" trend="+18%" color="emerald" />
              <KPICard label="Costs" value="$234K" color="red" />
              <KPICard label="Net Margin" value="38%" color="cyan" />
              <KPICard label="ARPU" value="$1.2K" trend="+5%" color="purple" />
            </div>

            <div className="pt-3 border-t border-zinc-700/50">
              <div className="text-xs text-zinc-500 mb-2">{t('dashboardCountries')}</div>
              <CountryPills />
            </div>
          </div>
        </GlassmorphicCard>

        {/* Customer Analysis Dashboard */}
        <GlassmorphicCard className="p-5 group hover:border-purple-500/50 transition-all duration-300">
          <div className="space-y-4">
            <div className="flex items-center gap-2 mb-3">
              <Users className="w-5 h-5 text-purple-400" />
              <h3 className="font-semibold text-white">{t('dashboardCustomer')}</h3>
            </div>

            <div className="grid grid-cols-2 gap-2">
              <KPICard label="Active" value="382" color="emerald" />
              <KPICard label="At Risk" value="28" color="amber" />
              <KPICard label="Avg LTV" value="$14.8K" color="purple" />
              <KPICard label="Lifetime" value="24 mo" color="cyan" />
            </div>

            <div className="pt-3 border-t border-zinc-700/50">
              <div className="text-xs text-zinc-500 mb-2">Health Status</div>
              <HealthIndicator healthy={82} atRisk={12} critical={6} />
            </div>
          </div>
        </GlassmorphicCard>
      </div>

      {/* Metrics summary */}
      <div className="flex flex-col sm:flex-row items-center justify-center gap-4 pt-4">
        <div className="text-sm text-zinc-400">{t('dashboardMetrics')}:</div>
        <MetricsList />
      </div>
    </div>
  )
}
