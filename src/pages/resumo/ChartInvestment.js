import { useEffect, useState } from 'react';
import { Box, Paper } from '@mui/material';
import { Chart } from 'react-google-charts';
import _ from 'lodash';

export const options = {
    legend: 'none'
};

function ChartInvestment() {
    const [chartData, setChartData] = useState([]);

    const loadData = (data) => {
        const values = _.groupBy(data, (value) => value.manufacturer);

        console.log('values', values);

        const result = _.map(values, (value, key) => [key, _.sumBy(values[key], (v) => v.sales)]);

        console.log('result', result);

        return [['Fabricante', 'Vendas'], ...result];
    };

    useEffect(() => {
        const data = [
            { manufacturer: 'Ações', model: 'Ka', sales: 30 },
            { manufacturer: 'Fundos Imobíliários', model: 'Fiesta', sales: 70 }
        ];
        setChartData(loadData(data));
    }, []);

    return (
        <>
            <Paper elevation={2}>
                <Box
                    elevation={2}
                    sx={{
                        backgroundColor: 'white',
                        width: '100%',
                        borderRadius: 2,
                        padding: 2
                    }}
                >
                    <Chart chartType="PieChart" data={chartData} width="100%" height="460px" options={options} />
                </Box>
            </Paper>
        </>
    );
}

export default ChartInvestment;
