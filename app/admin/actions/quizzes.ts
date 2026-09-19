"use server";

import { adminSupabase } from "../lib/supabaseAdmin";

export async function getQuizzes() {

  const { data } = await adminSupabase
    .from("quizzes")
    .select("*");

  return data;
}

export async function createQuiz(quiz: any) {

  await adminSupabase
    .from("quizzes")
    .insert(quiz);
}

export async function deleteQuiz(id: string) {

  await adminSupabase
    .from("quizzes")
    .delete()
    .eq("id", id);
}