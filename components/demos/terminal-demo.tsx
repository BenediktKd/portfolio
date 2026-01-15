"use client"

import { useState, useEffect, useRef } from 'react'
import { Play, RotateCcw } from 'lucide-react'
import { Button } from '../ui/button'

const commands = [
  { text: '$ dbt run --select +marts_finanzas', delay: 0 },
  { text: '', delay: 500 },
  { text: 'Running with dbt=1.9.0', delay: 100, color: 'text-zinc-500' },
  { text: 'Found 107 models, 1233 tests, 12 sources', delay: 100, color: 'text-zinc-500' },
  { text: '', delay: 300 },
  { text: 'Concurrency: 4 threads (target=\'prod\')', delay: 100, color: 'text-zinc-400' },
  { text: '', delay: 200 },
  { text: '1 of 47 START sql view stg_odoo_erp.facturas_linea', delay: 150, color: 'text-blue-400' },
  { text: '1 of 47 OK created sql view stg_odoo_erp.facturas_linea [OK in 0.84s]', delay: 300, color: 'text-green-400' },
  { text: '', delay: 50 },
  { text: '2 of 47 START sql view stg_kushki.transferencias', delay: 100, color: 'text-blue-400' },
  { text: '2 of 47 OK created sql view stg_kushki.transferencias [OK in 1.12s]', delay: 400, color: 'text-green-400' },
  { text: '', delay: 50 },
  { text: '...', delay: 200, color: 'text-zinc-600' },
  { text: '', delay: 100 },
  { text: '45 of 47 START sql view dwh.fct_facturas_linea', delay: 100, color: 'text-blue-400' },
  { text: '45 of 47 OK created sql view dwh.fct_facturas_linea [OK in 2.34s]', delay: 500, color: 'text-green-400' },
  { text: '', delay: 50 },
  { text: '46 of 47 START sql view dwh.dim_cliente', delay: 100, color: 'text-blue-400' },
  { text: '46 of 47 OK created sql view dwh.dim_cliente [OK in 0.67s]', delay: 300, color: 'text-green-400' },
  { text: '', delay: 50 },
  { text: '47 of 47 START sql view marts_finanzas.v_reporte_cobranza', delay: 100, color: 'text-blue-400' },
  { text: '47 of 47 OK created sql view marts_finanzas.v_reporte_cobranza [OK in 1.45s]', delay: 400, color: 'text-green-400' },
  { text: '', delay: 300 },
  { text: 'Finished running 47 view models in 0 hours 0 minutes and 23.45 seconds.', delay: 200, color: 'text-zinc-300' },
  { text: '', delay: 200 },
  { text: '┌─────────────────────────────────────────────────────────┐', delay: 50, color: 'text-emerald-400' },
  { text: '│ ✓ Completed successfully                                │', delay: 50, color: 'text-emerald-400' },
  { text: '│                                                         │', delay: 50, color: 'text-emerald-400' },
  { text: '│   47 models created    0 errors    0 warnings          │', delay: 50, color: 'text-emerald-400' },
  { text: '│   1,233 tests passed   100% coverage                   │', delay: 50, color: 'text-emerald-400' },
  { text: '└─────────────────────────────────────────────────────────┘', delay: 50, color: 'text-emerald-400' },
  { text: '', delay: 300 },
  { text: '$ ', delay: 200, color: 'text-white', cursor: true },
]

export function TerminalDemo() {
  const [lines, setLines] = useState<typeof commands>([])
  const [isRunning, setIsRunning] = useState(false)
  const [currentIndex, setCurrentIndex] = useState(0)
  const terminalRef = useRef<HTMLDivElement>(null)

  const runAnimation = () => {
    setLines([])
    setCurrentIndex(0)
    setIsRunning(true)
  }

  useEffect(() => {
    if (!isRunning) return
    if (currentIndex >= commands.length) {
      setIsRunning(false)
      return
    }

    const timer = setTimeout(() => {
      setLines(prev => [...prev, commands[currentIndex]])
      setCurrentIndex(prev => prev + 1)

      // Auto-scroll
      if (terminalRef.current) {
        terminalRef.current.scrollTop = terminalRef.current.scrollHeight
      }
    }, commands[currentIndex].delay)

    return () => clearTimeout(timer)
  }, [currentIndex, isRunning])

  // Auto-start on mount
  useEffect(() => {
    const timer = setTimeout(() => runAnimation(), 1000)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className="rounded-xl overflow-hidden border border-zinc-800 bg-zinc-950">
      {/* Terminal Header */}
      <div className="flex items-center justify-between px-4 py-2 bg-zinc-900 border-b border-zinc-800">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
        </div>
        <span className="text-xs text-zinc-500 font-mono">dbt-terminal</span>
        <Button
          size="sm"
          variant="ghost"
          onClick={runAnimation}
          disabled={isRunning}
          className="h-6 px-2 text-xs"
        >
          {isRunning ? (
            <span className="flex items-center gap-1">
              <span className="animate-spin">⏳</span> Running...
            </span>
          ) : (
            <span className="flex items-center gap-1">
              <RotateCcw className="w-3 h-3" /> Replay
            </span>
          )}
        </Button>
      </div>

      {/* Terminal Body */}
      <div
        ref={terminalRef}
        className="h-[350px] overflow-y-auto p-4 font-mono text-sm"
      >
        {lines.map((line, i) => (
          <div key={i} className={`${line.color || 'text-white'} whitespace-pre-wrap`}>
            {line.text}
            {line.cursor && <span className="animate-pulse">▋</span>}
          </div>
        ))}
        {lines.length === 0 && !isRunning && (
          <div className="text-zinc-600 flex items-center gap-2">
            <Play className="w-4 h-4" />
            Click Replay to see dbt in action
          </div>
        )}
      </div>
    </div>
  )
}
