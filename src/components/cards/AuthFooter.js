// material-ui
import { useMediaQuery, Container, Link, Typography, Stack } from '@mui/material';

// ==============================|| FOOTER - AUTHENTICATION ||============================== //

const AuthFooter = () => {
    const matchDownSM = useMediaQuery((theme) => theme.breakpoints.down('sm'));

    return (
        <Container maxWidth="xl">
            <Stack
                direction={matchDownSM ? 'column' : 'row'}
                justifyContent={matchDownSM ? 'center' : 'space-between'}
                spacing={2}
                textAlign={matchDownSM ? 'center' : 'inherit'}
            >
                <Typography variant="subtitle2" color="secondary" component="span">
                    &copy; Consultfy-BR &nbsp;
                    <Typography component={Link} variant="subtitle2" href="#" target="_blank" underline="hover">
                        Desenvolvido por Sevenfy
                    </Typography>
                </Typography>

                <Stack
                    direction={matchDownSM ? 'column' : 'row'}
                    spacing={matchDownSM ? 1 : 3}
                    textAlign={matchDownSM ? 'center' : 'inherit'}
                >
                    <Typography variant="subtitle2" color="secondary" component={Link} href="#" target="_blank" underline="hover">
                        Política de privacidade
                    </Typography>
                    <Typography variant="subtitle2" color="secondary" component={Link} href="#" target="_blank" underline="hover">
                        Suporte
                    </Typography>
                </Stack>
            </Stack>
        </Container>
    );
};

export default AuthFooter;
