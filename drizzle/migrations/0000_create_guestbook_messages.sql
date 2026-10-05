CREATE TABLE public.guestbook_messages (
  id UUID PRIMARY KEY DEFAULT gen_random_uuid(),
  name TEXT NOT NULL CHECK (char_length(name) BETWEEN 2 AND 60),
  message TEXT NOT NULL CHECK (char_length(message) BETWEEN 2 AND 280),
  created_at TIMESTAMPTZ NOT NULL DEFAULT now()
);
GRANT SELECT, INSERT ON public.guestbook_messages TO anon;
GRANT SELECT, INSERT ON public.guestbook_messages TO authenticated;
GRANT ALL ON public.guestbook_messages TO service_role;
ALTER TABLE public.guestbook_messages ENABLE ROW LEVEL SECURITY;
CREATE POLICY "Guestbook messages are publicly readable"
ON public.guestbook_messages FOR SELECT
TO anon, authenticated
USING (true);
CREATE POLICY "Visitors can leave guestbook messages"
ON public.guestbook_messages FOR INSERT
TO anon, authenticated
WITH CHECK (char_length(name) BETWEEN 2 AND 60 AND char_length(message) BETWEEN 2 AND 280);