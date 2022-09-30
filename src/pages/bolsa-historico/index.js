// material-ui
import { Grid, Typography, Stack, Button } from '@mui/material';
import TableHistoric from './TableHistoric';

// ==============================|| ASSISTENTE VIRTUAL ||============================== //

const Historic = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Histórico</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TableHistoric />
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <Stack direction="row" spacing={2} justifyContent="end" alignItems="center">
                    <Button variant="contained">Concluir importação</Button>
                    <Button variant="contained">Visualizar Histórico</Button>
                </Stack>
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        </Grid>
    );
};

export default Historic;
