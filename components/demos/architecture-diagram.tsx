"use client"

import { useCallback, useState } from 'react'
import ReactFlow, {
  Node,
  Edge,
  addEdge,
  Connection,
  useNodesState,
  useEdgesState,
  Background,
  Controls,
  MiniMap,
  MarkerType,
} from 'reactflow'
import 'reactflow/dist/style.css'
import { GlassmorphicCard } from '../glassmorphic-card'

const nodeStyles = {
  sources: { background: 'linear-gradient(135deg, #6b7280 0%, #4b5563 100%)', color: 'white', border: '2px solid #9ca3af' },
  raw: { background: 'linear-gradient(135deg, #ef4444 0%, #dc2626 100%)', color: 'white', border: '2px solid #f87171' },
  staging: { background: 'linear-gradient(135deg, #eab308 0%, #ca8a04 100%)', color: 'white', border: '2px solid #facc15' },
  dwh: { background: 'linear-gradient(135deg, #10b981 0%, #059669 100%)', color: 'white', border: '2px solid #34d399' },
  marts: { background: 'linear-gradient(135deg, #06b6d4 0%, #0891b2 100%)', color: 'white', border: '2px solid #22d3ee' },
  bi: { background: 'linear-gradient(135deg, #8b5cf6 0%, #7c3aed 100%)', color: 'white', border: '2px solid #a78bfa' },
}

const initialNodes: Node[] = [
  // Sources
  { id: 'kushki', position: { x: 0, y: 0 }, data: { label: '🏦 Kushki API' }, style: { ...nodeStyles.sources, width: 120 } },
  { id: 'odoo', position: { x: 140, y: 0 }, data: { label: '📊 Odoo ERP' }, style: { ...nodeStyles.sources, width: 120 } },
  { id: 'clay', position: { x: 280, y: 0 }, data: { label: '📒 Clay Acc.' }, style: { ...nodeStyles.sources, width: 120 } },
  { id: 'hubspot', position: { x: 420, y: 0 }, data: { label: '📧 HubSpot' }, style: { ...nodeStyles.sources, width: 120 } },
  { id: 'more', position: { x: 560, y: 0 }, data: { label: '+ 8 more' }, style: { ...nodeStyles.sources, width: 100, opacity: 0.7 } },

  // Cloud Run
  { id: 'cloudrun', position: { x: 250, y: 80 }, data: { label: '☁️ Cloud Run ETL (6 services)' }, style: { ...nodeStyles.sources, width: 220 } },

  // RAW Layer
  { id: 'raw', position: { x: 200, y: 170 }, data: { label: '📁 RAW Layer\n11 datasets | External Tables' }, style: { ...nodeStyles.raw, width: 300, height: 50, whiteSpace: 'pre-wrap', textAlign: 'center' } },

  // STAGING Layer
  { id: 'staging', position: { x: 200, y: 260 }, data: { label: '🔄 STAGING Layer\n47 models | Cleaning & Normalization' }, style: { ...nodeStyles.staging, width: 300, height: 50, whiteSpace: 'pre-wrap', textAlign: 'center' } },

  // DWH Layer
  { id: 'dwh', position: { x: 200, y: 350 }, data: { label: '⭐ DWH Layer\n13 dims + 23 facts | Star Schema' }, style: { ...nodeStyles.dwh, width: 300, height: 50, whiteSpace: 'pre-wrap', textAlign: 'center' } },

  // MARTS Layer
  { id: 'marts_ops', position: { x: 50, y: 440 }, data: { label: '📈 marts_operaciones' }, style: { ...nodeStyles.marts, width: 150 } },
  { id: 'marts_fin', position: { x: 220, y: 440 }, data: { label: '💰 marts_finanzas' }, style: { ...nodeStyles.marts, width: 140 } },
  { id: 'marts_kushki', position: { x: 380, y: 440 }, data: { label: '💳 marts_kushki' }, style: { ...nodeStyles.marts, width: 130 } },

  // BI Layer
  { id: 'powerbi', position: { x: 200, y: 530 }, data: { label: '📊 Power BI Dashboards' }, style: { ...nodeStyles.bi, width: 300 } },

  // dbt & Tests
  { id: 'dbt', position: { x: 550, y: 260 }, data: { label: '🔧 dbt\n107 models' }, style: { background: '#18181b', color: '#ff694a', border: '2px solid #ff694a', width: 100, whiteSpace: 'pre-wrap', textAlign: 'center' } },
  { id: 'tests', position: { x: 550, y: 350 }, data: { label: '✅ 1,233 Tests\n100% coverage' }, style: { background: '#18181b', color: '#22c55e', border: '2px solid #22c55e', width: 110, whiteSpace: 'pre-wrap', textAlign: 'center' } },
]

const initialEdges: Edge[] = [
  // Sources to Cloud Run
  { id: 'e1', source: 'kushki', target: 'cloudrun', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e2', source: 'odoo', target: 'cloudrun', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e3', source: 'clay', target: 'cloudrun', animated: true, style: { stroke: '#9ca3af' } },
  { id: 'e4', source: 'hubspot', target: 'cloudrun', animated: true, style: { stroke: '#9ca3af' } },

  // Cloud Run to RAW
  { id: 'e5', source: 'cloudrun', target: 'raw', animated: true, style: { stroke: '#ef4444' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#ef4444' } },

  // RAW to STAGING
  { id: 'e6', source: 'raw', target: 'staging', animated: true, style: { stroke: '#eab308' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#eab308' } },

  // STAGING to DWH
  { id: 'e7', source: 'staging', target: 'dwh', animated: true, style: { stroke: '#10b981' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#10b981' } },

  // DWH to MARTS
  { id: 'e8', source: 'dwh', target: 'marts_ops', animated: true, style: { stroke: '#06b6d4' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' } },
  { id: 'e9', source: 'dwh', target: 'marts_fin', animated: true, style: { stroke: '#06b6d4' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' } },
  { id: 'e10', source: 'dwh', target: 'marts_kushki', animated: true, style: { stroke: '#06b6d4' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#06b6d4' } },

  // MARTS to Power BI
  { id: 'e11', source: 'marts_ops', target: 'powerbi', style: { stroke: '#8b5cf6' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' } },
  { id: 'e12', source: 'marts_fin', target: 'powerbi', style: { stroke: '#8b5cf6' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' } },
  { id: 'e13', source: 'marts_kushki', target: 'powerbi', style: { stroke: '#8b5cf6' }, markerEnd: { type: MarkerType.ArrowClosed, color: '#8b5cf6' } },

  // dbt connections
  { id: 'e14', source: 'dbt', target: 'staging', style: { stroke: '#ff694a', strokeDasharray: '5,5' } },
  { id: 'e15', source: 'dbt', target: 'dwh', style: { stroke: '#ff694a', strokeDasharray: '5,5' } },
  { id: 'e16', source: 'tests', target: 'dwh', style: { stroke: '#22c55e', strokeDasharray: '5,5' } },
]

const layerInfo: Record<string, { title: string; description: string }> = {
  kushki: { title: 'Kushki Payment Platform', description: 'Payment processing for Chile, Colombia, and Mexico' },
  odoo: { title: 'Odoo ERP', description: 'Business operations: invoices, customers, products' },
  clay: { title: 'Clay Accounting', description: 'Chilean accounting system with libro mayor' },
  hubspot: { title: 'HubSpot CRM', description: 'Customer data, leads, and marketing attribution' },
  cloudrun: { title: 'Cloud Run ETL Services', description: '6 Python services extracting data on schedule' },
  raw: { title: 'RAW Layer', description: 'External tables on GCS Parquet files. No transformations.' },
  staging: { title: 'STAGING Layer', description: 'Data cleaning, normalization, and type casting with dbt' },
  dwh: { title: 'DWH Layer', description: 'Dimensional model: 13 dimensions + 23 fact tables' },
  marts_ops: { title: 'Operations MART', description: 'Operational KPIs and service metrics' },
  marts_fin: { title: 'Finance MART', description: 'Financial reporting, invoicing, and collections' },
  marts_kushki: { title: 'Payments MART', description: 'Payment reconciliation and transaction analysis' },
  powerbi: { title: 'Power BI', description: 'Executive dashboards and self-service analytics' },
  dbt: { title: 'dbt Core', description: '107 models with 6 packages for transformations' },
  tests: { title: 'Data Quality', description: '1,233 automated tests with dbt_expectations' },
}

export function ArchitectureDiagram() {
  const [nodes, setNodes, onNodesChange] = useNodesState(initialNodes)
  const [edges, setEdges, onEdgesChange] = useEdgesState(initialEdges)
  const [selectedNode, setSelectedNode] = useState<string | null>(null)

  const onNodeClick = useCallback((event: React.MouseEvent, node: Node) => {
    setSelectedNode(node.id)
  }, [])

  const info = selectedNode ? layerInfo[selectedNode] : null

  return (
    <div className="space-y-4">
      <div className="h-[500px] rounded-xl overflow-hidden border border-zinc-800 bg-zinc-900/50">
        <ReactFlow
          nodes={nodes}
          edges={edges}
          onNodesChange={onNodesChange}
          onEdgesChange={onEdgesChange}
          onNodeClick={onNodeClick}
          fitView
          attributionPosition="bottom-left"
          className="bg-zinc-950"
        >
          <Background color="#27272a" gap={20} />
          <Controls className="bg-zinc-800 border-zinc-700 rounded-lg" />
          <MiniMap
            nodeColor={(node) => {
              if (node.id.includes('raw')) return '#ef4444'
              if (node.id.includes('staging')) return '#eab308'
              if (node.id.includes('dwh')) return '#10b981'
              if (node.id.includes('marts')) return '#06b6d4'
              if (node.id.includes('power')) return '#8b5cf6'
              return '#6b7280'
            }}
            className="bg-zinc-900 border-zinc-700 rounded-lg"
          />
        </ReactFlow>
      </div>

      {/* Info Panel */}
      {info && (
        <GlassmorphicCard className="p-4 animate-in fade-in duration-300">
          <h4 className="font-bold text-white">{info.title}</h4>
          <p className="text-zinc-400 text-sm mt-1">{info.description}</p>
        </GlassmorphicCard>
      )}

      <p className="text-center text-zinc-500 text-sm">
        Click on any node to see details • Drag to pan • Scroll to zoom
      </p>
    </div>
  )
}
