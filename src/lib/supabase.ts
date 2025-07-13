import { createClient } from "@supabase/supabase-js";

const supabaseUrl = process.env.NEXT_PUBLIC_SUPABASE_URL;
const supabaseAnonKey = process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY;

// Only create client if environment variables are available
export const supabase =
  supabaseUrl && supabaseAnonKey
    ? createClient(supabaseUrl, supabaseAnonKey)
    : null;

// Types for our database
export interface Project {
  id: string;
  title: string;
  description: string;
  image_url: string;
  project_url: string;
  github_url: string;
  technologies: string[];
  created_at: string;
}

export interface Skill {
  id: string;
  name: string;
  level: number;
  category: string;
}

export interface Contact {
  id: string;
  name: string;
  email: string;
  message: string;
  created_at: string;
}

// Database functions
export async function getProjects(): Promise<Project[]> {
  if (!supabase) {
    console.warn("Supabase client not initialized");
    return [];
  }

  const { data, error } = await supabase
    .from("projects")
    .select("*")
    .order("created_at", { ascending: false });

  if (error) {
    console.error("Error fetching projects:", error);
    return [];
  }

  return data || [];
}

export async function getSkills(): Promise<Skill[]> {
  if (!supabase) {
    console.warn("Supabase client not initialized");
    return [];
  }

  const { data, error } = await supabase
    .from("skills")
    .select("*")
    .order("level", { ascending: false });

  if (error) {
    console.error("Error fetching skills:", error);
    return [];
  }

  return data || [];
}

export async function submitContact(
  contact: Omit<Contact, "id" | "created_at">
) {
  if (!supabase) {
    throw new Error("Supabase client not initialized");
  }

  const { data, error } = await supabase
    .from("contacts")
    .insert([contact])
    .select();

  if (error) {
    throw error;
  }

  return data;
}
