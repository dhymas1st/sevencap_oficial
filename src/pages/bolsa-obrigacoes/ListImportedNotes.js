import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import { useEffect, useState } from 'react';
import api from '../../services/api';
const ListImportedNotes = () => {
    const [notas, SetNotas] = useState([]);

    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem('dados'));

        api.get(`/${dados.cpf}/notas`).then((res) => {
            console.log(res.data);
            SetNotas(res.data);
        });
    }, []);
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300', mt: 4 }}>
            <Table aria-label="semple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Data Upload</TableCell>
                        <TableCell align="right">Nome do Arquivo</TableCell>
                        <TableCell align="right">Status</TableCell>
                        <TableCell align="right">Editar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notas.map((row, i) => (
                        <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{row.data_upload.substr(0, 10).split('-').reverse().join('/')}</TableCell>
                            <TableCell>{row.nome_original_arquivo}</TableCell>
                            <TableCell>{row.status}</TableCell>
                            <TableCell>icon</TableCell>
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
