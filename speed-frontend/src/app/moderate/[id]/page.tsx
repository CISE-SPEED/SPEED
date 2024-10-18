'use client';
import ArticleDetails from '@/components/ArticleDetails';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useState } from 'react';

export default function Page({ params: { id } }: { id: string; params: { id: string; }; }) {
    const [reason, setReason] = useState("");


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

            <Button variant='contained'>Approve</Button>
            <Button variant='contained'>Reject</Button>
        </>
    );
}
