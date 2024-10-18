import { Article } from "@/models/article.model";
import { env } from "process";

const BACKEND_URL =
  env.NODE_ENV === "production"
    ? "https://speed-backend-ecru.vercel.app"
    : "http://localhost:8080";

export async function getArticle(id: string): Promise<Article> {
  return await fetch(`${BACKEND_URL}/articles/${id}`).then((a) => a.json());
}

export async function getArticles(): Promise<Article[]> {
  return await fetch(`${BACKEND_URL}/articles`).then((a) => a.json());
}

export async function getArticlesByStatus(status: string): Promise<Article[]> {
  return await fetch(`${BACKEND_URL}/articles?status=${status}`).then((a) =>
    a.json()
  );
}

export async function submitArticle(article: object): Promise<Response> {
  return await fetch(`${BACKEND_URL}/articles`, {
    method: "POST",
    body: JSON.stringify(article),
    headers: {
      "Content-Type": "application/json",
    },
  });
}
