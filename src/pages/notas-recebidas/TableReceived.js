import * as React from 'react';
import Paper from '@mui/material/Paper';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TablePagination from '@mui/material/TablePagination';
import TableRow from '@mui/material/TableRow';

const columns = [
    { id: 'numero', label: 'Número', minWidth: 170 },
    { id: 'serie', label: 'Série', minWidth: 100 },
    {
        id: 'emissor',
        label: 'Emissor',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'destinatario',
        label: 'Destinatário',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'valor',
        label: 'Valor',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'destinatario',
        label: 'Destinatário',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'data_emissao',
        label: 'Data de emissão',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    },
    {
        id: 'status',
        label: 'Status',
        minWidth: 170,
        align: 'right',
        format: (value) => value.toLocaleString('en-US')
    }
];

function createData(numero, serie, emissor, destinatario, valor, data_emissao, status) {
    return { numero, serie, emissor, destinatario, valor, data_emissao, status };
}

const rows = [
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente'),
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente'),
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente'),
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente'),
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente'),
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente'),
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente'),
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente'),
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente'),
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente'),
    createData(10728, 2807, 'Edmilson Santos', 'Sevenfy', 20000, '11/10/2022', 'Pendente')
];

export default function TableReceived() {
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
            <TableContainer sx={{ maxHeight: 440 }}>
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
                                <TableRow hover role="checkbox" tabIndex={-1} key={row.serie}>
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
            <TablePagination
                rowsPerPageOptions={[10, 25, 100]}
                component="div"
                count={rows.length}
                rowsPerPage={rowsPerPage}
                page={page}
                onPageChange={handleChangePage}
                onRowsPerPageChange={handleChangeRowsPerPage}
            />
        </Paper>
    );
}
