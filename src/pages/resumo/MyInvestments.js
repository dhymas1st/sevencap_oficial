import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'name', label: 'Ativo', minWidth: 170 },
    { id: 'code', label: 'Quantidade', minWidth: 100 },
    {
        id: 'population',
        label: 'Preço Médio',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'size',
        label: 'Total',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'rentabilidade',
        label: 'Rentabilidade',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toFixed(2)
    }
];

function createData(name, code, population, size, rentabilidade) {
    const density = population / size;
    return { name, code, population, size, rentabilidade };
}

const rows = [
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%'),
    createData('B3SA3', '1000', '13,93', '13.930,00', '10%')
];

export default function MyInvestments() {
    const [page, setPage] = React.useState(0);
    const [rowsPerPage, setRowsPerPage] = React.useState(10);

    const handleChangePage = (event, newPage) => {
        setPage(newPage);
    };

    const handleChangeRowsPerPage = (event) => {
        setRowsPerPage(+event.target.value);
        setPage(0);
    };

    return (
        <Paper sx={{ width: '100%', overflow: 'hidden' }}>
            <TableContainer sx={{ maxHeight: 460 }}>
                <Table stickyHeader aria-label="sticky table">
                    <TableHead>
                        <TableRow>
                            {columns.map((column) => (
                                <TableCell key={column.id} align={column.align} style={{ minWidth: column.minWidth }}>
                                    {column.label}
                                </TableCell>
                            ))}
                        </TableRow>
                    </TableHead>
                    <TableBody>
                        {rows.slice(page * rowsPerPage, page * rowsPerPage + rowsPerPage).map((row) => {
                            return (
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.code}>
                                    {columns.map((column) => {
                                        const value = row[column.id];
                                        return (
                                            <TableCell key={column.id} align={column.align}>
                                                {column.format && typeof value === 'number' ? column.format(value) : value}
                                            </TableCell>
                                        );
                                    })}
                                </TableRow>
                            );
                        })}
                    </TableBody>
                </Table>
            </TableContainer>
        </Paper>
    );
}
