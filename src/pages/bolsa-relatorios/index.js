// material-ui
import { Grid, Typography } from '@mui/material';
import { TabsMenu } from './TabsMenu';
import CollapsibleTable from './CollapsibleTable';

// ==============================|| BOLSA DE VALORES - RELATÓRIOS ||============================== //

const ExchangeReports = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Relatórios</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <TabsMenu />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        </Grid>
    );
};

export default ExchangeReports;
