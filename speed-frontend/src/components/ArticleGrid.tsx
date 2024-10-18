import { Article } from "@/models/article.model";
import { DataGrid, GridColDef } from "@mui/x-data-grid";
import { useEffect, useState } from "react";

export const articleDef: GridColDef[] = [
    { field: 'title', headerName: 'Title', flex: 3 },
    { field: 'authors', headerName: 'Authors', flex: 2 },
    { field: 'journal', headerName: 'Journal', flex: 2 },
    { field: 'doi', headerName: 'DOI', flex: 2 },
    { field: 'year', headerName: 'Year', flex: 1 },
];

const statusDef: GridColDef = {
    field: 'status', headerName: 'Status', flex: 1
};

export default function ArticleGrid({ articleSource, showStatus, onRowClick }: { articleSource: Promise<Article[]>; showStatus?: boolean; onRowClick?: (row: Article) => void; }) {
    const [data, setData] = useState<Article[]>();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        articleSource.then(d => {
            setData(d);
            setLoading(false);
        });
    }, [articleSource]);

    if (isLoading) return <p>Loading...</p>;

    return (
        <DataGrid disableRowSelectionOnClick rows={data} columns={[...articleDef, ...(showStatus ? [statusDef] : [])]} getRowId={r => r._id} onRowClick={e => onRowClick?.(e.row)} />
    );
}
