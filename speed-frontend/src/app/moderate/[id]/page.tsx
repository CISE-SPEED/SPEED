'use client';
import ArticleDetails from '@/components/ArticleDetails';
import { setArticleStatus } from '@/services/apiService';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useRouter } from 'next/navigation';
import { useState } from 'react';

export default function Page({ params: { id } }: { params: { id: string; }; }) {
    const router = useRouter();

    const [reason, setReason] = useState("");

    const approve = async () => {
        await setArticleStatus(id, 'approved');
        router.push('/moderate');
    };

    const reject = async() => {
        await setArticleStatus(id, 'rejected');
        router.push('/moderate');
    };

    return (
        <>
            <h1>Moderate Article</h1>
            <ArticleDetails id={id}></ArticleDetails>

            <FormControl fullWidth margin="normal">
                <InputLabel htmlFor="reason">Reason</InputLabel>
                <Input
                    id="reason"
                    value={reason}
                    onChange={(e) => setReason(e.target.value)}
                />
            </FormControl>

            <Button variant='contained' onClick={approve}>Approve</Button>
            <Button variant='contained' onClick={reject}>Reject</Button>
        </>
    );
}
