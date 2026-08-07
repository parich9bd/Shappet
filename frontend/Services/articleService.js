import { api } from "./api";

export async function getArticles() {
  return api("/articles");
}