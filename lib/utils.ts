import { supabase } from "./supabase/client";

export async function getSubjects() {
  const { data, error } = await supabase
    .from("subjects")
    .select("*")
    .order("name");

  if (error) throw error;

  return data;
}

export async function getNotes() {
  const { data, error } = await supabase
    .from("notes")
    .select("*");

  if (error) throw error;

  return data;
}

export async function getVideos() {
  const { data, error } = await supabase
    .from("videos")
    .select("*");

  if (error) throw error;

  return data;
}

export async function getQuizzes() {
  const { data, error } = await supabase
    .from("quizzes")
    .select("*");

  if (error) throw error;

  return data;
}