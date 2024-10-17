import { env } from "process";

const BACKEND_URL = env.BACKEND_URL;

export async function getArticles(): Promise<object[]> {
    return await fetch(`${BACKEND_URL}/articles`).then(a => a.json());
};
