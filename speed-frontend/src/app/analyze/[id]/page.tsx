'use client';
import ArticleDetails from '@/components/ArticleDetails';
import { Button, FormControl, Input, InputLabel } from '@mui/material';
import { useState } from 'react';

export default function Page({ params: { id } }: { params: { id: string; }; }) {

    const [claim, setClaim] = useState("");


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

            <Button variant='contained'>Confirm</Button>
        </>
    );
}
