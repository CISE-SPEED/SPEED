import { Article } from "@/models/article.model";
import { getArticle } from "@/services/apiService";
import { useEffect, useState } from "react";

export default function ArticleDetails({ id }: { id: string; }) {
    const [article, setArticle] = useState<Article>();

    useEffect(() => {
        getArticle(id).then(a => setArticle(a));
    }, [id]);

    if (!article) {
        return <h1>Loading...</h1>;
    }

    return (
        <div>
            <h1>{article.title}</h1>
            <h2>Authors: {article.authors}, Year: {article.year}</h2>
            <p>DOI: {article.doi}</p>
        </div>
    );
}
