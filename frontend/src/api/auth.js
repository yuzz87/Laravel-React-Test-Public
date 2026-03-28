import { apiFetch, removeToken, setToken } from "./client";

export async function register(name, email, password, passwordConfirmation) {
  const data = await apiFetch("/register", {
    method: "POST",
    body: JSON.stringify({
      name,
      email,
      password,
      password_confirmation: passwordConfirmation,
    }),
  });

  const token = data?.data?.token;

  if (!token) {
    throw new Error("Token not found in response");
  }

  setToken(token);

  return data;
}

export async function login(email, password) {
  const data = await apiFetch("/login", {
    method: "POST",
    body: JSON.stringify({ email, password }),
  });

  const token = data?.data?.token;

  if (!token) {
    throw new Error("Token not found in response");
  }

  setToken(token);

  return data;
}

export async function fetchMe() {
  return apiFetch("/me", {
    method: "GET",
  });
}

export async function logout() {
  const data = await apiFetch("/logout", {
    method: "POST",
  });

  removeToken();

  return data;
}