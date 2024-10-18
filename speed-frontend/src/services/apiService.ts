import { Article } from "@/models/article.model";

const BACKEND_URL = "https://speed-backend-ecru.vercel.app";

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
