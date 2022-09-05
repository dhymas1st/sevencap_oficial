// material-ui
import { Button, Card, Link, Stack, Typography } from '@mui/material';
import UploadFileIcon from '@mui/icons-material/UploadFile';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const CardImportNotes = () => (
    <Card variant="outlined" sx={{ p: 4 }}>
        <Stack alignItems="center" spacing={2.5}>
            <Stack alignItems="center">
                <UploadFileIcon sx={{ fontSize: 60 }} />
                <Typography align="center" variant="h6" color="secondary">
                    Havendo a necessidade de importar seu saldo inicial, informe a posição atual de seus investimentos, clique no botão
                    abaixo, por favor.
                </Typography>
            </Stack>
            <Button variant="contained" component="label">
                Importar saldo inicial
                <input hidden accept="image/*" multiple type="file" />
            </Button>
        </Stack>
    </Card>
);

export default CardImportNotes;
