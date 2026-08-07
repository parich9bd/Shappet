const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  const response = await fetch(`${API_URL}/articles`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return Response.json(
      { error: "Failed to fetch articles" },
      { status: response.status }
    );
  }

  const articles = await response.json();

  return Response.json(articles);
}