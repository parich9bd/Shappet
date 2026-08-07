import { api } from "./api";

export async function getProducts() {
  return api("/products");
}