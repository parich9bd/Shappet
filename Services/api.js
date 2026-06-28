const BASE_URL = "http://localhost:4000";

export async function api(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}