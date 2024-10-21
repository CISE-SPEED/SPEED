'use client';
import ArticleGrid from '@/components/ArticleGrid';
import { getArticlesByStatus } from '@/services/apiService';

export default function Page() {
    return (
        <>
            <h1>Discover</h1>
            <ArticleGrid articleSource={getArticlesByStatus('included')} extraCols={['practice', 'claims']}></ArticleGrid>
        </>
    );
}
