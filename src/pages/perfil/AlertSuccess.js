import { Alert, AlertTitle, Button, Snackbar } from '@mui/material';

const AlertSuccess = () => {
    return (
        <>
            <Button variant="outlined" onClick={handleClick}>
                Open success snackbar
            </Button>
            <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
                <Alert onClose={handleClose} severity="success" sx={{ width: '100%' }}>
                    Cadastro realizado com sucesso!
                </Alert>
            </Snackbar>
        </>
    );
};

export default AlertSuccess;
