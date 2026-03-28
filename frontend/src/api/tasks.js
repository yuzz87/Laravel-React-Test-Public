import { apiFetch } from "./client";

export async function fetchTasks() {
  return apiFetch("/tasks", {
    method: "GET",
  });
}

export async function createTask(title) {
  return apiFetch("/tasks", {
    method: "POST",
    body: JSON.stringify({
      title,
      is_done: false,
    }),
  });
}