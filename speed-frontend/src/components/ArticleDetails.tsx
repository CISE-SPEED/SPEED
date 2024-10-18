import { getArticle } from "@/services/apiService";
import { useEffect, useState } from "react";

export default function ArticleDetails({ id }: { id: string; }) {
    const [article, setArticle] = useState<any>();

    useEffect(() => {
        getArticle(id).then(a => setArticle(a));
    }, []);

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
