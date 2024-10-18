'use client';
import ArticleGrid from "@/components/ArticleGrid";
import { getArticlesByStatus, submitArticle } from "@/services/apiService";
import { Button, FormControl, Input, InputLabel } from "@mui/material";
import { FormEvent, useState } from "react";

export default function Page() {
    const [title, setTitle] = useState("");
    const [authors, setAuthors] = useState("");
    const [journal, setJournal] = useState("");
    const [year, setYear] = useState<number | string>("");
    const [doi, setDoi] = useState("");

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();

        // Simple validation to ensure no field is empty
        if (!title || !authors || !journal || !year) {
            alert("Please fill out all fields.");
            return;
        }

        const res = await submitArticle({
            title,
            authors,
            journal,
            year,
            doi
        });

        const json = await res.json();

        if (!res.ok) {
            alert(json.message);
        } else {
            window.location.reload();
        }
    };

    return (
        <>
            <h1>Submit</h1>
            <form onSubmit={handleSubmit}>
                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="title">Title</InputLabel>
                    <Input
                        id="title"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="authors">Authors</InputLabel>
                    <Input
                        id="authors"
                        value={authors}
                        onChange={(e) => setAuthors(e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="journal">Journal</InputLabel>
                    <Input
                        id="journal"
                        value={journal}
                        onChange={(e) => setJournal(e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="year">Year</InputLabel>
                    <Input
                        id="year"
                        type="number"
                        value={year}
                        onChange={(e) => setYear(+e.target.value)}
                    />
                </FormControl>

                <FormControl fullWidth margin="normal">
                    <InputLabel htmlFor="year">DOI</InputLabel>
                    <Input
                        id="doi"
                        value={doi}
                        onChange={(e) => setDoi(e.target.value)}
                    />
                </FormControl>

                <Button variant="contained" color="primary" type="submit">
                    Submit
                </Button>
            </form>

            <h1>Awaiting moderation</h1>
            <ArticleGrid articleSource={getArticlesByStatus('submitted')}></ArticleGrid>

            <h1>Rejected</h1>
            <ArticleGrid articleSource={getArticlesByStatus('rejected')}></ArticleGrid>

        </>
    );
}
