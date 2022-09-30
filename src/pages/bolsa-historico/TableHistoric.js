import { useEffect, useState } from 'react';
import { TableContainer, Table, TableHead, TableBody, TableRow, TableCell, Paper } from '@mui/material';
import DeleteIcon from '@mui/icons-material/Delete';
import IconButton from '@mui/material/IconButton';

import api from '../../services/api';
import SnackbarAlert from 'components/SnackbarAlert';

const TableHistoric = () => {
    const [notas, SetNotas] = useState([]);
    const [snackbar, setSnackBar] = useState([]);

    useEffect(() => {
        const dados = JSON.parse(localStorage.getItem('dados'));

        api.get(`/${dados.cpf}/notas`).then((res) => {
            console.log(res.data);
            SetNotas(res.data);
        });
    }, []);

    function handleClick() {
        setSnackBar([true, 'warning', 'botão de deletar ainda desativado']);
    }
    return (
        <TableContainer component={Paper} sx={{ maxHeight: '300', mt: 4 }}>
            <Table aria-label="semple table" stickyHeader>
                <TableHead>
                    <TableRow>
                        <TableCell>Data Upload</TableCell>
                        <TableCell>Nome do Arquivo</TableCell>
                        <TableCell>Status</TableCell>
                        <TableCell>Editar</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {notas.map((row, i) => (
                        <TableRow key={i} sx={{ '&:last-child td, &:last-child th': { border: 0 } }}>
                            <TableCell>{row.data_upload.substr(0, 10).split('-').reverse().join('/')}</TableCell>
                            <TableCell>{row.nome_original_arquivo}</TableCell>
                            <TableCell>{row.status === 'S' ? 'Nota lida com sucesso' : 'Nota ainda em processamento'}</TableCell>
                            <TableCell>
                                <IconButton onClick={handleClick}>
                                    <DeleteIcon />
                                </IconButton>
                            </TableCell>
                        </TableRow>
                    ))}
                </TableBody>
            </Table>
            {snackbar[0] === true ? <SnackbarAlert tipo={snackbar[1]} title={snackbar[2]} /> : ''}
        </TableContainer>
    );
};

export default TableHistoric;

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
