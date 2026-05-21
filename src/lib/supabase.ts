import { createClient } from '@supabase/supabase-js'

export const supabase = createClient(
  process.env.NEXT_PUBLIC_SUPABASE_URL || 'https://wraxcyngnngvrqhbrsvo.supabase.co',
  process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || 'sb_publishable_J_H5BEfn700B-sCflufyHQ_krRdgIFM'
)
