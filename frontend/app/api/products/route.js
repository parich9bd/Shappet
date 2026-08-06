const API_URL = process.env.NEXT_PUBLIC_API_URL;

export async function GET() {
  const response = await fetch(`${API_URL}/products`, {
    cache: "no-store",
  });

  if (!response.ok) {
    return Response.json(
      { error: "Failed to fetch products" },
      { status: response.status }
    );
  }

  const products = await response.json();

  return Response.json(products);
}