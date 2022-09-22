import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarAlert = () => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <Snackbar onClose={() => setOpen(false)} autoHideDuration={6000} open={open}>
                <Alert severity="success">Cadastro realizado com sucesso!</Alert>
            </Snackbar>
        </>
    );
};

export default SnackbarAlert;
