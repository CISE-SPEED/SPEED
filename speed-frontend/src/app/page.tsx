'use client';

import { Button } from "@mui/material";

export default function Page() {
    return (
        <>
            <h1>Welcome to SPEED!</h1>
            <p>At SPEED, we believe that better software development decisions come from evidence, not just opinions.</p>
            <p>Whether you are a software engineer, researcher, or student, our platform gives you access to a curated database of empirical research on software engineering practices.</p>
            <p>Explore the latest studies, compare claims, and make informed choices to improve code quality, efficiency, and reliability.</p>
            <Button variant="contained" onClick={() => window.location.href = '/discover'}>Begin!</Button>
        </>
    );
}
