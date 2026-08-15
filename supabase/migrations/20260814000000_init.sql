CREATE TABLE public.quiz_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  branch TEXT NOT NULL,
  locale TEXT,
  answers JSONB NOT NULL DEFAULT '{}'::jsonb,
  priority_tag TEXT NOT NULL DEFAULT 'B',
  status TEXT NOT NULL DEFAULT 'new',
  assigned_to TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now(),
  updated_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.quiz_submissions TO anon, authenticated;
GRANT ALL ON public.quiz_submissions TO service_role;
ALTER TABLE public.quiz_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert quiz submissions"
  ON public.quiz_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

CREATE TABLE public.litigation_submissions (
  id UUID NOT NULL DEFAULT gen_random_uuid() PRIMARY KEY,
  session_id TEXT NOT NULL,
  locale TEXT,
  description TEXT NOT NULL,
  contact_name TEXT,
  contact_type TEXT,
  contact_value TEXT,
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT INSERT ON public.litigation_submissions TO anon, authenticated;
GRANT ALL ON public.litigation_submissions TO service_role;
ALTER TABLE public.litigation_submissions ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Anyone can insert litigation submissions"
  ON public.litigation_submissions FOR INSERT
  TO anon, authenticated
  WITH CHECK (true);

