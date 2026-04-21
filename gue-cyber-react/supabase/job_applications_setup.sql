-- Run this script in Supabase SQL Editor.
-- It creates the job applications table, duplicate protection,
-- and storage bucket/policies for CV uploads.

create table if not exists public.job_applications (
  id bigserial primary key,
  full_name text not null,
  email text not null,
  phone text,
  job_key text not null,
  job_title text not null,
  cover_letter text,
  cv_file_path text not null,
  status text not null default 'new' check (status in ('new', 'shortlisted', 'interview', 'rejected', 'hired')),
  source text not null default 'website',
  created_at timestamptz not null default now(),
  updated_at timestamptz not null default now()
);

create unique index if not exists job_applications_email_job_unique
  on public.job_applications (lower(email), job_key);

create index if not exists job_applications_status_idx
  on public.job_applications (status);

create index if not exists job_applications_created_at_idx
  on public.job_applications (created_at desc);

alter table public.job_applications enable row level security;

drop policy if exists "Allow public inserts for job applications" on public.job_applications;

create policy "Allow public inserts for job applications"
on public.job_applications
for insert
to anon, authenticated
with check (true);

insert into storage.buckets (id, name, public, file_size_limit, allowed_mime_types)
values (
  'candidate-cv',
  'candidate-cv',
  false,
  5242880,
  array['application/pdf', 'application/msword', 'application/vnd.openxmlformats-officedocument.wordprocessingml.document']
)
on conflict (id) do update
set
  public = excluded.public,
  file_size_limit = excluded.file_size_limit,
  allowed_mime_types = excluded.allowed_mime_types;

drop policy if exists "Allow public CV uploads" on storage.objects;

create policy "Allow public CV uploads"
on storage.objects
for insert
to anon, authenticated
with check (bucket_id = 'candidate-cv');

-- Optional: allow authenticated admins to read CV files in-app.
drop policy if exists "Allow authenticated CV access" on storage.objects;

create policy "Allow authenticated CV access"
on storage.objects
for select
to authenticated
using (bucket_id = 'candidate-cv');
