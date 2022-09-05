// material-ui
import { Button, Card, Link, Stack, Typography } from '@mui/material';

// project import
import MainCard from 'components/MainCard';

// assets
import avatar from 'assets/images/users/avatar-group.png';
import AnimateButton from 'components/@extended/AnimateButton';

// ==============================|| DRAWER CONTENT - NAVIGATION CARD ||============================== //

const Teste = () => (
    <Card variant="outlined" sx={{ p: 4 }}>
        <Stack alignItems="center" spacing={2.5}>
            <Stack alignItems="center">
                <Typography variant="h5">Mantis Pro</Typography>
                <Typography align="center" variant="h6" color="secondary">
                    Havendo a necessidade de importar seu saldo inicial, informe a posição atual de seus investimentos, clique no botão
                    abaixo, por favor.
                </Typography>
            </Stack>
            <Button variant="contained" component="label">
                Importar nota
                <input hidden accept="image/*" multiple type="file" />
            </Button>
        </Stack>
    </Card>
);

export default Teste;
