// material-ui
import { Grid, Typography } from '@mui/material';
import BoxResume from './BoxResume';
import ChartInvestment from './ChartInvestment';
import MyInvestments from './MyInvestments';

// ==============================|| RESUMO ||============================== //

const Summary = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Resumo</Typography>
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <BoxResume title="Patrimônio bruto" value="3.306.690,67" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <BoxResume title="Custo de aquisição" value="2.626.850,74" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <BoxResume title="Ganho / Perda no Período" value="6.690,67" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <BoxResume title="Previsão de impostos a pagar" value="0,00" />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={9}>
                <MyInvestments />
            </Grid>
            <Grid item xs={12} sm={6} md={4} lg={3}>
                <ChartInvestment />
            </Grid>
            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        </Grid>
    );
};

export default Summary;
