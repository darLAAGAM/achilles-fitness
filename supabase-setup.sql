-- Run this in Supabase SQL Editor (Dashboard → SQL Editor → New Query)

-- Single table to store full app data per user
create table if not exists user_data (
  id text primary key default 'default',
  data jsonb not null default '{}',
  updated_at timestamptz not null default now()
);

-- Auto-update timestamp
create or replace function update_timestamp()
returns trigger as $$
begin
  new.updated_at = now();
  return new;
end;
$$ language plpgsql;

create trigger user_data_timestamp
  before update on user_data
  for each row execute function update_timestamp();

-- Allow public access (anon key) - single user app, no auth needed
alter table user_data enable row level security;

create policy "Allow all access" on user_data
  for all using (true) with check (true);
