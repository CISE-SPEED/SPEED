'use client';
import ArticleGrid from '@/components/ArticleGrid';
import { getArticlesByStatus } from '@/services/apiService';
import { useRouter } from 'next/navigation';

export default function Page() {
    const router = useRouter();

    return (
        <>
            <h1>Moderation Queue</h1>
            <ArticleGrid articleSource={getArticlesByStatus('submitted')} onRowClick={(r: any) => router.push(`/moderate/${r._id}`)}></ArticleGrid>
        </>
    );
}
