'use client';
import ArticleDetails from '@/components/ArticleDetails';
import { setArticleStatus } from '@/services/apiService';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page({ params: { id } }: { params: { id: string; }; }) {
    const router = useRouter();

    const [claim, setClaim] = useState("");

    const confirm = async() => {
        await setArticleStatus(id, 'included');
        router.push('/analyze');
    }


    return (
        <>
            <h1>Analyze Article</h1>
            <ArticleDetails id={id}></ArticleDetails>

            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="claim">Claim</InputLabel>
                <Input
                    id="reason"
                    value={claim}
                    onChange={(e) => setClaim(e.target.value)}
                />
            </FormControl>

            <Button variant='contained' onClick={confirm}>Confirm</Button>
        </>
    );
}
