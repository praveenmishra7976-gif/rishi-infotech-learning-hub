export async function updateStudent(
  id: string,
  values: {
    full_name: string;
  }
) {
  const res = await fetch("/api/admin/student/update", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
      ...values,
    }),
  });

  return await res.json();
}