'use client';
import ArticleGrid from '@/components/ArticleGrid';
import { getArticlesByStatus } from '@/services/apiService';
import { useRouter } from 'next/navigation';

export default function Analyze() {
    const router = useRouter();

    return (
        <>
            <h1>Analysis Queue</h1>
            <ArticleGrid articleSource={getArticlesByStatus('approved')} onRowClick={r => router.push(`/analyze/${r._id}`)}></ArticleGrid>
        </>
    );
}
