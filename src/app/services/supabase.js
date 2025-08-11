import { createClient } from '@supabase/supabase-js';

const API_KEY = env.API_KEY
const API_URL = env.API_URL

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



export async function getLastCod() {
  try {
    const { data, error } = await supabase
      .from('Pedidos')
      .select('*')
      .order('id', { ascending: false })
      .limit(1);

    if (error) {
      console.error("Erro ao buscar dados:", error);
      return;
    }

    const lastCod = data[0]?.id;
    return lastCod;
  } catch (err) {
    console.error("Erro ao executar exemplo:", err);
  }
}

export async function getLastCodFrom(resource) {
  resource = String(resource);
  try {
    const { data, error } = await supabase
      .from(resource)
      .select('*')
      .order('Código', { ascending: false })
      .limit(1);

    if (error) {
      console.error("Erro ao buscar dados:", error);
      return;
    }

    const lastCod = data[0].Código;
    console.log(lastCod);
    return lastCod;
  } catch (err) {
    console.error("Erro ao executar exemplo:", err);
  }
}