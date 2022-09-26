// material-ui
import { Grid, Typography } from '@mui/material';
import TableMyStocks from './TableMyStocks';

// ==============================|| MEUS ATIVOS ||============================== //

const MyInvestments = () => {
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Meus Ativos</Typography>
            </Grid>
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <TableMyStocks />
            </Grid>

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        </Grid>
    );
};

export default MyInvestments;
