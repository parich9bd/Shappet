const BASE_URL = process.env.NEXT_PUBLIC_API_URL;

export async function api(endpoint) {
  const response = await fetch(`${BASE_URL}${endpoint}`);

  if (!response.ok) {
    throw new Error("Something went wrong");
  }

  return response.json();
}