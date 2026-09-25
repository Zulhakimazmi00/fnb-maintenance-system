import { requireRole } from '@/lib/auth/roles'
import { createClient } from '@/lib/supabase/server'

export default async function AuditTrailPage() {
  const supabase = await createClient()

  const {
    data: { user },
  } = await supabase.auth.getUser()

  if (!user) {
    return null
  }

  const { data: profile } = await supabase
    .from('profiles')
    .select('role')
    .eq('id', user.id)
    .maybeSingle()

  if (!profile) {
    return null
  }

  requireRole(profile.role, ['HQ_ADMIN', 'MANAGEMENT'])

  return (
    <div className="space-y-6">
      <div>
        <div className="text-sm font-semibold uppercase tracking-wider text-[#e85d91]">
          Administration
        </div>

        <h1 className="mt-1 text-3xl font-black text-[#4a2633]">
          Audit Trail
        </h1>

        <p className="mt-2 text-sm text-slate-500">
          Review system activity and maintenance record changes.
        </p>
      </div>

      <div className="dunkin-card p-6">
        <h2 className="text-lg font-black text-[#4a2633]">
          Audit Activity
        </h2>

        <p className="mt-2 text-sm text-slate-500">
          Audit trail functionality will be implemented here.
        </p>
      </div>
    </div>
  )
}
