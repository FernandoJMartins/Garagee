import { createClient } from '@supabase/supabase-js';

const API_KEY = "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6Im56YWttb2thZWdrZWhwZGFvc2NwIiwicm9sZSI6InNlcnZpY2Vfcm9sZSIsImlhdCI6MTczMTk5OTU2OCwiZXhwIjoyMDQ3NTc1NTY4fQ.m2Od2yzR6Q2l98uD9ruj-o-1kCeVaBC1B3oczpAwW6U";
const API_URL = "https://nzakmokaegkehpdaoscp.supabase.co";

const supabase = createClient(API_URL, API_KEY);

export default supabase;

export async function create(resource, data) {
  const { data: createdData, error } = await supabase
    .from(resource)
    .insert(data)
    .select('*');

  if (error) {
    throw error;
  }

  return createdData?.[0];
}

export async function read(resource, id) {
  const { data, error } = id
    ? await supabase.from(resource).select('*').eq('id', id)
    : await supabase.from(resource).select('*');

  if (error) {
    throw error;
  }

  return data;
}

export async function update(resource, data) {
  const { data: updatedData, error } = await supabase
    .from(resource)
    .update(data)
    .eq('id', data.id)
    .select('*');

  if (error) {
    throw error;
  }

  return updatedData?.[0];
}

export async function remove(resource, id) {
  const { error } = await supabase.from(resource).delete().eq('id', id);

  if (error) {
    throw error;
  } else {
    return true;
  }
}
