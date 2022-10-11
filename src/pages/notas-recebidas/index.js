// material-ui
import { Grid, Typography } from '@mui/material';
import TableReceived from './TableReceived';

// ==============================|| NOTAS RECEBIDAS ||============================== //

const NotesReceived = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sm={12} md={12} lg={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Notas Recebidas</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TableReceived />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        </Grid>
    );
};

export default NotesReceived;
