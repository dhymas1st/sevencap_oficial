import * as React from 'react';
import Box from '@mui/material/Box';
import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Button from '@mui/material/Button';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import ReactPlayer from 'react-player';

const steps = [
    {
        label: 'Cadastro',
        description:
            'Para perfeita apuração e conferência de dados, é fundamental o preenchimento completo do formulário de cadastro. Para mais instruções, veja o video abaixo.',
        url: 'https://www.youtube.com/watch?v=ysz5S6PUM-U'
    },
    {
        label: 'Importar Saldo inicial',
        description:
            'Se você ja é investidor e deseja informar os ativos que possue em sua carteira de investimentos, siga as orientações do video. ',
        url: 'https://www.youtube.com/watch?v=kz9lEScu0Wo'
    },
    {
        label: 'Importar Notas de Corretagem',
        description:
            'Agora que você ja completou o cadastro e importou o seu saldo inicial, chegou a hora de importar suas notas de corretagem.',
        url: 'https://www.youtube.com/watch?v=w3fqJ_G-8Mw'
    }
];

export default function StepperAssistant() {
    const [activeStep, setActiveStep] = React.useState(0);

    const handleNext = () => {
        setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };

    const handleBack = () => {
        setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };

    const handleReset = () => {
        setActiveStep(0);
    };

    return (
        <Box sx={{ maxWidth: 960 }}>
            <Stepper activeStep={activeStep} orientation="vertical">
                {steps.map((step, index) => (
                    <Step key={step.label}>
                        <StepLabel optional={index === 2 ? <Typography variant="caption">Próximo</Typography> : null}>
                            {step.label}
                        </StepLabel>
                        <StepContent>
                            <Typography mb={2}>{step.description}</Typography>
                            <ReactPlayer url={step.url} />
                            <Box sx={{ mb: 2, mt: 2 }}>
                                <div>
                                    <Button variant="contained" onClick={handleNext} sx={{ mt: 1, mr: 1 }}>
                                        {index === steps.length - 1 ? 'Concluir' : 'Avançar'}
                                    </Button>
                                    <Button disabled={index === 0} onClick={handleBack} sx={{ mt: 1, mr: 1 }}>
                                        Voltar
                                    </Button>
                                </div>
                            </Box>
                        </StepContent>
                    </Step>
                ))}
            </Stepper>
            {activeStep === steps.length && (
                <Paper square elevation={0} sx={{ p: 3 }}>
                    <Typography>
                        Parabens! Todas as etapas foram concluídas. Agora você pode relaxar enquanto seus impostos são apurados, com a
                        garantia da Consultfy!
                    </Typography>
                    <Button onClick={handleReset} sx={{ mt: 1, mr: 1 }}>
                        Reiniciar
                    </Button>
                </Paper>
            )}
        </Box>
    );
}
