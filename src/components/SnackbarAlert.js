import { useState } from 'react';
import { Snackbar, Alert } from '@mui/material';

const SnackbarAlert = (props) => {
    const [open, setOpen] = useState(true);
    return (
        <>
            <Snackbar
                onClose={() => setOpen(false)}
                autoHideDuration={6000}
                open={open}
                anchorOrigin={{ vertical: 'top', horizontal: 'right' }}
                sx={{ marginTop: '2.5rem' }}
            >
                <Alert severity={props.tipo}>{props.title}</Alert>
            </Snackbar>
        </>
    );
};

export default SnackbarAlert;
