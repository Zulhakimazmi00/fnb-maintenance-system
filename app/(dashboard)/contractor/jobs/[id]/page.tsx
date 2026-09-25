'use client'

import { useParams } from 'next/navigation'

export default function ContractorJobDetailPage() {
  const params = useParams()

  return (
    <div className="dunkin-card p-8">
      <div className="text-xs font-black uppercase tracking-wider text-[#f582ae]">
        Contractor Portal
      </div>

      <h1 className="mt-2 text-3xl font-black text-[#4a2633]">
        Contractor Job Detail
      </h1>

      <div className="mt-6 rounded-xl bg-[#fff8fa] p-5">
        <div className="text-xs font-black uppercase tracking-wider text-slate-500">
          Job ID
        </div>

        <div className="mt-2 break-all font-mono text-lg font-black text-[#4a2633]">
          {String(params.id)}
        </div>
      </div>
    </div>
  )
}