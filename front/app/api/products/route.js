export async function GET() {
  const response = await fetch("http://localhost:3001/api/products", {
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