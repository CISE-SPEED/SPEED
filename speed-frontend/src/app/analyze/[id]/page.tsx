'use client';
import ArticleDetails from '@/components/ArticleDetails';
import { updateArticle } from '@/services/apiService';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page({ params: { id } }: { params: { id: string; }; }) {
    const router = useRouter();

    const [practice, setPractice] = useState("");
    const [claims, setClaims] = useState("");

    const confirm = async () => {
        await updateArticle(id, {
            status: 'included',
            practice,
            claims
        });
        router.push('/analyze');
    };

    return (
        <>
            <h1>Analyze Article</h1>
            <ArticleDetails id={id}></ArticleDetails>

            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="practice">Practice</InputLabel>
                <Input
                    id="practice"
                    value={practice}
                    onChange={(e) => setPractice(e.target.value)}
                />
            </FormControl>

            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="claims">Claims</InputLabel>
                <Input
                    multiline
                    id="claims"
                    value={claims}
                    onChange={(e) => setClaims(e.target.value)}
                />
            </FormControl>

            <Button variant='contained' onClick={confirm}>Confirm</Button>
        </>
    );
}
