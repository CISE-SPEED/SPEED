import {
  getArticle,
  getArticles,
  getArticlesByStatus,
  submitArticle,
} from "@/services/apiService";

const BACKEND_URL =
  process.env.VERCEL_ENV === "production"
    ? "https://speed-backend-ecru.vercel.app"
    : "http://localhost:8080";

global.fetch = jest.fn();

describe("apiService", () => {
  beforeEach(() => {
    fetch.mockClear();
  });

  test("getArticle fetches the correct URL and returns data", async () => {
    const mockArticle = { id: "1", title: "Test Article" };
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockArticle,
    });

    const article = await getArticle("1");
    expect(fetch).toHaveBeenCalledWith(`${BACKEND_URL}/articles/1`);
    expect(article).toEqual(mockArticle);
  });

  test("getArticles fetches the correct URL and returns data", async () => {
    const mockArticles = [{ id: "1", title: "Test Article" }];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockArticles,
    });

    const articles = await getArticles();
    expect(fetch).toHaveBeenCalledWith(`${BACKEND_URL}/articles`);
    expect(articles).toEqual(mockArticles);
  });

  test("getArticlesByStatus fetches the correct URL and returns data", async () => {
    const mockArticles = [
      { id: "1", title: "Test Article", status: "submitted" },
    ];
    fetch.mockResolvedValueOnce({
      ok: true,
      json: async () => mockArticles,
    });

    const articles = await getArticlesByStatus("submitted");
    expect(fetch).toHaveBeenCalledWith(
      `${BACKEND_URL}/articles?status=submitted`
    );
    expect(articles).toEqual(mockArticles);
  });

  test("submitArticle sends the correct data and returns response", async () => {
    const mockResponse = { ok: true };
    const articleData = {
      title: "New Article",
      authors: "Author",
      journal: "Journal",
      year: 2024,
      doi: "10.1234/testdoi",
    };
    fetch.mockResolvedValueOnce(mockResponse);

    const response = await submitArticle(articleData);
    expect(fetch).toHaveBeenCalledWith(`${BACKEND_URL}/articles`, {
      method: "POST",
      body: JSON.stringify(articleData),
      headers: {
        "Content-Type": "application/json",
      },
    });
    expect(response).toEqual(mockResponse);
  });
});
