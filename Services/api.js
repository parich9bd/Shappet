const BASE_URL = "/api";

export async function api(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}