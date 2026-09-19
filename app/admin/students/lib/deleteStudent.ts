export async function deleteStudent(id: string) {
  const res = await fetch("/api/admin/students", {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      id,
    }),
  });

  return await res.json();
}