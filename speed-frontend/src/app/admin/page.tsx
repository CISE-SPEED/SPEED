'use client';
import ArticleGrid from '@/components/ArticleGrid';
import { getArticles } from '@/services/apiService';

export default function Page() {
    return (
        <>
            <h1>Admin</h1>
            <ArticleGrid articleSource={getArticles()} showStatus></ArticleGrid>
        </>
    );
}
