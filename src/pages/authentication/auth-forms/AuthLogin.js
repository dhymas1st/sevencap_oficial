import React, { useEffect } from 'react';
import { Link as RouterLink, Navigate } from 'react-router-dom';

// material-ui
import {
    Button,
    Checkbox,
    Divider,
    FormControlLabel,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography
} from '@mui/material';

//API
import api from '../../../services/api';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import FirebaseSocial from './FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import { object } from 'prop-types';

// ============================|| FIREBASE - LOGIN ||============================ //

const AuthLogin = () => {
    const [checked, setChecked] = React.useState(false);
    const [showPassword, setShowPassword] = React.useState(false);
    const [redirect, setRedirect] = React.useState(false);
    const [account, setAccount] = React.useState('');
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    async function SignIn(values) {
        const login = await api.post('/login', {
            email: values.email,
            senha: values.password
        });
        /*
        console.log(login.data);
        if (login.data[0] == '23') {
            console.log('oi');
        } else {
            setRedirect(login.data);
            console.log('a');
        }
        */
        //console.log(login.data);object

        if (login.status == 200) {
            localStorage.setItem('dados', JSON.stringify(login.data[0]));
            localStorage.setItem('logado', true);
            setRedirect(true);
            console.log(JSON.parse(localStorage.getItem('dados')));
        } else {
            setAccount(login.data);
        }
    }
    if (redirect) {
        return <Navigate to="/perfil" />;
    }

    return (
        <>
            <Formik
                initialValues={{
                    email: 'example@gmail.com',
                    password: 'senha',
                    submit: null
                }}
                validationSchema={Yup.object().shape({
                    email: Yup.string().email('Digite um e-mail válido').max(255).required('O e-mail é obrigatório'),
                    password: Yup.string().max(255).required('Senha obrigatória')
                })}
                onSubmit={
                    //SignIn(values)

                    async (values, { setErrors, setStatus, setSubmitting }) => {
                        try {
                            SignIn(values);
                            setStatus({ success: false });
                            setSubmitting(false);
                        } catch (err) {
                            setStatus({ success: false });
                            setErrors({ submit: err.message });
                            setSubmitting(false);
                        }
                    }
                }
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-login">E-mail</InputLabel>
                                    <OutlinedInput
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu e-mail"
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="standard-weight-helper-text-email-login">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="password-login">Senha</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.password && errors.password)}
                                        id="-password-login"
                                        type={showPassword ? 'text' : 'password'}
                                        value={values.password}
                                        name="password"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        endAdornment={
                                            <InputAdornment position="end">
                                                <IconButton
                                                    aria-label="toggle password visibility"
                                                    onClick={handleClickShowPassword}
                                                    onMouseDown={handleMouseDownPassword}
                                                    edge="end"
                                                    size="large"
                                                >
                                                    {showPassword ? <EyeOutlined /> : <EyeInvisibleOutlined />}
                                                </IconButton>
                                            </InputAdornment>
                                        }
                                        placeholder="Digite a sua senha"
                                    />
                                    {touched.password && errors.password && (
                                        <FormHelperText error id="standard-weight-helper-text-password-login">
                                            {errors.password}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>

                            <Grid item xs={12} sx={{ mt: -1 }}>
                                <Stack direction="row" justifyContent="space-between" alignItems="center" spacing={2}>
                                    <FormControlLabel
                                        control={
                                            <Checkbox
                                                checked={checked}
                                                onChange={(event) => setChecked(event.target.checked)}
                                                name="checked"
                                                color="primary"
                                                size="small"
                                            />
                                        }
                                        label={<Typography variant="h6">Mantenha-me conectado</Typography>}
                                    />
                                    <Link variant="h6" component={RouterLink} to="" color="text.primary">
                                        Esqueceu a senha?
                                    </Link>
                                </Stack>
                            </Grid>
                            {errors.submit && (
                                <Grid item xs={12}>
                                    <FormHelperText error>{errors.submit}</FormHelperText>
                                </Grid>
                            )}
                            <Grid item xs={12}>
                                <AnimateButton>
                                    <Button
                                        disableElevation
                                        disabled={isSubmitting}
                                        fullWidth
                                        size="large"
                                        type="submit"
                                        variant="contained"
                                        color="primary"
                                    >
                                        Login
                                    </Button>
                                </AnimateButton>
                                <Typography color="red" align="center" padding="1rem">
                                    {account}
                                </Typography>
                            </Grid>
                            <Grid item xs={12}>
                                <Divider>
                                    <Typography variant="caption"> Acessar com</Typography>
                                </Divider>
                            </Grid>
                            <Grid item xs={12}>
                                <FirebaseSocial />
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
        </>
    );
};

export default AuthLogin;
