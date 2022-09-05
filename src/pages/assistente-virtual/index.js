// material-ui
import { Grid, Typography } from '@mui/material';

// ==============================|| ASSISTENTE VIRTUAL ||============================== //

const VirtualAssistant = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Assistente Virtual</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={6}>
                <h1>Teste</h1>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={6}>
                <h1>Teste</h1>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={6}>
                <h1>Teste</h1>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={6}>
                <h1>Teste</h1>
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        </Grid>
    );
};

export default VirtualAssistant;
