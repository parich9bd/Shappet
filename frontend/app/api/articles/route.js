export async function GET() {
  const response = await fetch("http://localhost:3001/api/articles", {
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