const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api(endpoint, options = {}) {
  const response = await fetch(`${BASE_URL}${endpoint}`, {
    ...options,
    credentials: "include",
  });

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}