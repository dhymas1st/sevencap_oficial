import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';

const ListImportedNotes = () => {
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300', mt: 4 }}>
            <Table aria-label="semple table" stickyHeader>
                <TableBody>
                    {tableData.map((row) => (
                        <TableRow key={row.id} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell align="center">{row.id}</TableCell>
                            <TableCell>{row.number_note}</TableCell>
                            <TableCell>{row.message_notification}</TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
};

export default ListImportedNotes;

const tableData = [
    {
        id: 1,
        number_note: 2807,
        message_notification: 'Aguardando o processamento do arquivo'
    },
    {
        id: 2,
        number_note: 2807,
        message_notification: 'Aguardando o processamento do arquivo'
    },
    {
        id: 3,
        number_note: 2807,
        message_notification: 'Aguardando o processamento do arquivo'
    },
    {
        id: 4,
        number_note: 2807,
        message_notification: 'Aguardando o processamento do arquivo'
    },
    {
        id: 5,
        number_note: 2807,
        message_notification: 'Aguardando o processamento do arquivo'
    },
    {
        id: 6,
        number_note: 2807,
        message_notification: 'Aguardando o processamento do arquivo'
    },
    {
        id: 7,
        number_note: 2807,
        message_notification: 'Aguardando o processamento do arquivo'
    }
];
