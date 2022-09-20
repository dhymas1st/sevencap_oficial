// material-ui
import { Grid, Typography } from '@mui/material';
import CardImportNotes from './CardImportNotes';
import OpeningBalance from './OpeningBalance';
import ListImportedNotes from './ListImportedNotes';
import { useState } from 'react';
import api from 'services/api';

// ==============================|| BOLSA DE VALORES - OBRIGAÇÕES ||============================== //x

const ExchangeObligations = () => {
    const [pdf, setPdf] = useState(['']);
    const dados = JSON.parse(localStorage.getItem('dados'));
    const handlePdf = (e) => {
        /* 
        const today = new Date();
        const date = today.getFullYear() + '-' + (today.getMonth() + 1) + '-' + today.getDate();
        const time = today.getHours() + ':' + today.getMinutes() + ':' + today.getSeconds();
        const dateTime = date + ' ' + time;
        const fileName = e.target.files[0].name;
        const file = { dateTime, fileName };
        setPdf([file]);
        console.log(dateTime);
        
        */
        const cpf = dados.cpf.replace(/\./g, '').replace('-', '');
        const arquivo = e.target.files[0];
        let formData = new FormData();

        formData.append('image', arquivo);
        formData.append('cpf', cpf);

        console.log(arquivo);
        console.log(formData);

        api.post(`/uploadfile/${cpf}`, formData)
            .then((res) => {
                console.log(arquivo);
                console.log(res);
                alert('Nota Recebida com sucesso');
            })
            .catch((err) => {
                console.log('erro :', err);
                alert('Falha ao receber nota');
            });
    };

    //useState(() => {}, []);
    return (
        <Grid container rowSpacing={4.5} columnSpacing={2.75}>
            {/* row 1 */}
            <Grid item xs={12} sx={{ mb: -2.25 }}>
                <Typography variant="h5">Obrigações</Typography>
            </Grid>
            <Grid item xs={12} sm={12} md={12} lg={12}>
                <CardImportNotes
                    onChange={(e) => {
                        handlePdf(e);
                    }}
                />
                <ListImportedNotes />
            </Grid>
            {/*<Grid item xs={12} sm={6} md={4} lg={6}>
                <OpeningBalance />
    </Grid>*/}

            <Grid item md={8} sx={{ display: { sm: 'none', md: 'block', lg: 'none' } }} />
        </Grid>
    );
};

export default ExchangeObligations;
