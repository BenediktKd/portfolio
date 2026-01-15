"use client"

import { useState, useEffect } from 'react'
import { TrendingUp, TrendingDown, CheckCircle, AlertTriangle, Database, Clock, BarChart3 } from 'lucide-react'

const metrics = [
  { label: 'Models Deployed', value: 107, icon: Database, trend: '+12', trendUp: true },
  { label: 'Tests Passing', value: '1,233', icon: CheckCircle, trend: '100%', trendUp: true },
  { label: 'Data Freshness', value: '< 1h', icon: Clock, trend: 'Real-time', trendUp: true },
  { label: 'Quality Score', value: '98.5%', icon: BarChart3, trend: '+2.1%', trendUp: true },
]

const layerData = [
  { name: 'RAW', models: 11, color: 'bg-red-500' },
  { name: 'STAGING', models: 47, color: 'bg-yellow-500' },
  { name: 'DWH', models: 36, color: 'bg-emerald-500' },
  { name: 'MARTS', models: 24, color: 'bg-cyan-500' },
]

const recentTests = [
  { name: 'fct_facturas_linea', status: 'passed', tests: 42 },
  { name: 'dim_cliente', status: 'passed', tests: 18 },
  { name: 'stg_kushki.transferencias', status: 'passed', tests: 31 },
  { name: 'marts_finanzas.v_cobranza', status: 'passed', tests: 15 },
  { name: 'dim_producto', status: 'warning', tests: 12 },
]

export function DashboardMockup() {
  const [animatedValues, setAnimatedValues] = useState<Record<string, number>>({})

  useEffect(() => {
    // Animate layer bars
    const timer = setTimeout(() => {
      setAnimatedValues({
        RAW: 11,
        STAGING: 47,
        DWH: 36,
        MARTS: 24,
      })
    }, 500)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
      {/* Dashboard Header */}
      <div className="flex items-center justify-between px-4 py-3 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-2 h-2 rounded-full bg-emerald-500 animate-pulse" />
          <span className="text-sm font-medium text-white">Data Quality Dashboard</span>
        </div>
        <span className="text-xs text-zinc-500">Last updated: just now</span>
      </div>

      <div className="p-4 space-y-4">
        {/* KPI Cards */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-3">
          {metrics.map((metric, i) => (
            <div
              key={i}
              className="p-3 rounded-lg bg-zinc-900/50 border border-zinc-800 hover:border-zinc-700 transition-colors"
            >
              <div className="flex items-center justify-between mb-2">
                <metric.icon className="w-4 h-4 text-zinc-500" />
                <span className={`text-xs flex items-center gap-1 ${metric.trendUp ? 'text-emerald-400' : 'text-red-400'}`}>
                  {metric.trendUp ? <TrendingUp className="w-3 h-3" /> : <TrendingDown className="w-3 h-3" />}
                  {metric.trend}
                </span>
              </div>
              <div className="text-xl font-bold text-white">{metric.value}</div>
              <div className="text-xs text-zinc-500">{metric.label}</div>
            </div>
          ))}
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
          {/* Models by Layer Chart */}
          <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
            <h4 className="text-sm font-medium text-white mb-4">Models by Layer</h4>
            <div className="space-y-3">
              {layerData.map((layer, i) => (
                <div key={i} className="space-y-1">
                  <div className="flex justify-between text-xs">
                    <span className="text-zinc-400">{layer.name}</span>
                    <span className="text-zinc-300">{layer.models} models</span>
                  </div>
                  <div className="h-2 bg-zinc-800 rounded-full overflow-hidden">
                    <div
                      className={`h-full ${layer.color} rounded-full transition-all duration-1000 ease-out`}
                      style={{ width: `${(animatedValues[layer.name] || 0) / 50 * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Recent Test Results */}
          <div className="p-4 rounded-lg bg-zinc-900/50 border border-zinc-800">
            <h4 className="text-sm font-medium text-white mb-4">Recent Test Results</h4>
            <div className="space-y-2">
              {recentTests.map((test, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between p-2 rounded bg-zinc-800/50 text-sm"
                >
                  <div className="flex items-center gap-2">
                    {test.status === 'passed' ? (
                      <CheckCircle className="w-4 h-4 text-emerald-400" />
                    ) : (
                      <AlertTriangle className="w-4 h-4 text-yellow-400" />
                    )}
                    <span className="text-zinc-300 font-mono text-xs">{test.name}</span>
                  </div>
                  <span className="text-xs text-zinc-500">{test.tests} tests</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Footer Stats */}
        <div className="flex items-center justify-between pt-2 border-t border-zinc-800 text-xs text-zinc-500">
          <span>4 Countries • 3 Currencies • 12 Data Sources</span>
          <span className="flex items-center gap-1">
            <div className="w-2 h-2 rounded-full bg-emerald-500" />
            All systems operational
          </span>
        </div>
      </div>
    </div>
  )
}
