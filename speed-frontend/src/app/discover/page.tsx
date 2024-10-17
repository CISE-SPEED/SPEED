'use client';
import { getArticles } from '@/services/apiService';
import styled from '@emotion/styled';
import { DataGrid, GridColDef } from '@mui/x-data-grid';
import { useEffect, useState } from 'react';

const columns: GridColDef[] = [
    { field: 'col1', headerName: 'Column 1', width: 150 },
    { field: 'col2', headerName: 'Column 2', width: 150 },
];

const StyledDataGrid = styled(DataGrid)(({ theme }) => ({
    border: 0,
    color: 'rgba(255,255,255,0.85)',
    fontFamily: [
        '-apple-system',
        'BlinkMacSystemFont',
        '"Segoe UI"',
        'Roboto',
        '"Helvetica Neue"',
        'Arial',
        'sans-serif',
        '"Apple Color Emoji"',
        '"Segoe UI Emoji"',
        '"Segoe UI Symbol"',
    ].join(','),
    WebkitFontSmoothing: 'auto',
    letterSpacing: 'normal',
    '& .MuiDataGrid-columnsContainer': {
        backgroundColor: '#1d1d1d',
    },
    '& .MuiDataGrid-iconSeparator': {
        display: 'none',
    },
    '& .MuiDataGrid-columnHeader, .MuiDataGrid-cell': {
        borderRight: '1px solid #303030',
    },
    '& .MuiDataGrid-columnsContainer, .MuiDataGrid-cell': {
        borderBottom: '1px solid #303030',
    },
    '& .MuiDataGrid-cell': {
        color: 'rgba(255,255,255,0.65)',
    },
    '& .MuiDataGrid-columnHeaders': {
        backgroundColor: '#ff0000'
    },
    '& .MuiPaginationItem-root': {
        borderRadius: 0,
    },
}));

export default function Page() {

    const [data, setData] = useState<object[]>();
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getArticles()
            .then(d => {
                setData(d);
                setLoading(false);
            });
    }, []);

    if (isLoading) return <p>Loading...</p>;

    return (
        <>
            <h1>Dikscoer</h1>

            <StyledDataGrid rows={data} columns={columns} getRowId={r => r._id} />
        </>

    );
}
