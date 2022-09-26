import { useEffect, useState } from 'react';
import { Link as RouterLink } from 'react-router-dom';
import axios from 'axios';

// material-ui
import {
    Alert,
    Box,
    Button,
    Divider,
    FormControl,
    FormHelperText,
    Grid,
    Link,
    IconButton,
    InputAdornment,
    InputLabel,
    OutlinedInput,
    Stack,
    Typography,
    Select,
    MenuItem,
    NativeSelect
} from '@mui/material';

// third party
import * as Yup from 'yup';
import { Formik } from 'formik';

// project import
import FirebaseSocial from '../authentication/auth-forms/FirebaseSocial';
import AnimateButton from 'components/@extended/AnimateButton';
import { strengthColor, strengthIndicator } from 'utils/password-strength';

// assets
import { EyeOutlined, EyeInvisibleOutlined } from '@ant-design/icons';
import api from 'services/api';
import { TextField } from '../../../node_modules/@mui/material/index';
import SnackbarAlert from 'components/SnackbarAlert';
import { values } from 'lodash';

// ============================|| FIREBASE - REGISTER ||============================ //

const Form = () => {
    const [level, setLevel] = useState();
    const [showPassword, setShowPassword] = useState(false);
    const [updatePerfil, setUpdatePerfil] = useState([]);
    const handleClickShowPassword = () => {
        setShowPassword(!showPassword);
    };

    const handleMouseDownPassword = (event) => {
        event.preventDefault();
    };

    const changePassword = (value) => {
        const temp = strengthIndicator(value);
        setLevel(strengthColor(temp));
    };

    useEffect(() => {
        changePassword('');
    }, []);

    /*
    (() => {
    })();
    useEffect(() => {
        //console.log(infos[0]);
        setPerfil(infos[0]);
    }, []);
*/
    //console.log(perfil.nome);
    //perfil();

    function nomea() {
        const infos = JSON.parse(localStorage.getItem('dados'));
        return {
            firstname: infos.nome ? infos.nome : '',
            lastname: infos.sobrenome ? infos.sobrenome : '',
            cpf: infos.cpf ? infos.cpf : '',
            nascimento: infos.nascimento ? infos.nascimento : '',
            email: infos.email,
            telefone: infos.telefone ? infos.telefone : '',
            genero: infos.genero ? infos.genero : '',
            tipoendereco: infos.tipo_endereco ? infos.tipo_endereco : '',
            cep: infos.cep ? infos.cep : '',
            logradouro: infos.logradouro ? infos.logradouro : '',
            numero: infos.numero ? infos.numero : '',
            complemento: infos.complemento ? infos.complemento : '',
            cidade: infos.cidade ? infos.cidade : '',
            estado: infos.uf ? infos.uf : '',
            submit: null
        };
    }
    async function AtualizaPerfil(values) {
        //const infos = JSON.parse(localStorage.getItem('dados'));
        try {
            const atualizar = await api.post('login/complete', {
                email: values.email,
                nome: values.firstname,
                sobrenome: values.lastname,
                cpf: values.cpf,
                datanasc: values.nascimento,
                telefone: values.telefone,
                genero: values.genero,
                cep: values.cep,
                tipo_logra: values.tipoendereco,
                logradouro: values.logradouro,
                numero: values.numero,
                complemento: values.complemento,
                cidade: values.cidade,
                uf: values.estado
            });
            console.log(atualizar);
            localStorage.setItem('dados', JSON.stringify(atualizar.data[0]));
            setUpdatePerfil([true, 'success', 'Perfil atualizado com sucesso']);
        } catch (err) {
            console.log(err);
            setUpdatePerfil([true, 'error', 'erro ao atualizar Perfil']);
            //alert('erro ao atualizar Perfil');
        }
    }

    function FormmatCep(event) {
        //console.log(event.target.value);
    }

    async function BuscaCep(values, setFieldValue) {
        try {
            const cep = values.cep.replace(/[^0-9]/g, '');
            console.log(cep);
            if (cep?.length !== 8) {
                setUpdatePerfil([true, 'error', 'formato de CEP inválido']);
                return;
            }
            console.log(values.cep);
            const viaCep = `https://viacep.com.br/ws/${values.cep}/json/`;
            const endereco = await axios.get(viaCep);
            if (endereco.data.erro) {
                console.log('sim');
                setUpdatePerfil([true, 'error', 'CEP não encontrado']);
            } else {
                setFieldValue('logradouro', endereco.data.logradouro);
                setFieldValue('complemento', endereco.data.complemento);
                setFieldValue('cidade', endereco.data.localidade);
                setFieldValue('uf', endereco.data.uf);
                //setFieldValue('bairro', endereco.data.uf);
                //acrescentar bairro acima
            }

            console.log(endereco);
        } catch (err) {
            console.log('error: ', err);
            // acrescentar alert de CEP invalido
        }
    }

    /*
                                    <Select
                                        value={genero}
                                        onChange={handleChange}
                                        displayEmpty
                                        inputProps={{ 'aria-label': 'Without label' }}
                                    >
                                        <MenuItem value="">
                                            <em></em>
                                        </MenuItem>
                                        <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                        <MenuItem value={'Feminino'}>Feminino</MenuItem>
                                    </Select>
                                    */
    return (
        <>
            <Formik
                initialValues={nomea()}
                validationSchema={Yup.object().shape({
                    firstname: Yup.string().max(255).required('Este campo é obrigatório'),
                    lastname: Yup.string().max(255).required('Este campo é obrigatório'),
                    cpf: Yup.string().max(255).required('Este campo é obrigatório'),
                    nascimento: Yup.string().max(255),
                    email: Yup.string().email('Digite um e-mail válido').max(255).required('Este campo é obrigatório'),
                    telefone: Yup.string().max(255),
                    genero: Yup.string().max(255),
                    cep: Yup.string().max(255).required('Este campo é obrigatório'),
                    // tipoendereco: Yup.string().max(255),
                    logradouro: Yup.string().max(255).required('Este campo é obrigatório'),
                    numero: Yup.string().max(255).required('Este campo é obrigatório'),
                    // complemento: Yup.string().max(255).required('Este campo é obrigatório'),
                    cidade: Yup.string().max(255).required('Este campo é obrigatório'),
                    estado: Yup.string().max(255).required('Este campo é obrigatório')
                })}
                onSubmit={async (values, { setErrors, setStatus, setSubmitting }) => {
                    console.log('disparou!', values);
                    AtualizaPerfil(values);
                    try {
                        setStatus({ success: false });
                        setSubmitting(false);
                    } catch (err) {
                        console.error(err);
                        setStatus({ success: false });
                        setErrors({ submit: err.message });
                        setSubmitting(false);
                    }
                }}
            >
                {({ errors, handleBlur, handleChange, handleSubmit, isSubmitting, touched, values, setFieldValue }) => (
                    <form noValidate onSubmit={handleSubmit}>
                        <Grid container spacing={3}>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="firstname-signup">Nome*</InputLabel>
                                    <OutlinedInput
                                        id="firstname"
                                        type="firstname"
                                        value={values.firstname}
                                        name="firstname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu nome"
                                        fullWidth
                                        error={Boolean(touched.firstname && errors.firstname)}
                                    />
                                    {touched.firstname && errors.firstname && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.firstname}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="lastname-signup">Sobrenome*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.lastname && errors.lastname)}
                                        id="lastname-signup"
                                        type="lastname"
                                        value={values.lastname}
                                        name="lastname"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu sobrenome"
                                        inputProps={{}}
                                    />
                                    {touched.lastname && errors.lastname && (
                                        <FormHelperText error id="helper-text-lastname-signup">
                                            {errors.lastname}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cpf">CPF*</InputLabel>
                                    <OutlinedInput
                                        id="cpf"
                                        type="cpf"
                                        value={values.cpf}
                                        name="cpf"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu CPF"
                                        fullWidth
                                        error={Boolean(touched.cpf && errors.cpf)}
                                    />
                                    {touched.cpf && errors.cpf && (
                                        <FormHelperText error id="helper-text-cpf">
                                            {errors.cpf}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="nascimento">Data de nascimento</InputLabel>
                                    <OutlinedInput
                                        id="nascimento"
                                        type="nascimento"
                                        value={values.nascimento}
                                        name="nascimento"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite a sua data de nascimento"
                                        fullWidth
                                        error={Boolean(touched.nascimento && errors.nascimento)}
                                    />
                                    {touched.nascimento && errors.nascimento && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.nascimento}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="email-signup">E-mail*</InputLabel>
                                    <OutlinedInput
                                        fullWidth
                                        error={Boolean(touched.email && errors.email)}
                                        id="email-login"
                                        type="email"
                                        value={values.email}
                                        disabled
                                        name="email"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu e-mail"
                                        inputProps={{}}
                                    />
                                    {touched.email && errors.email && (
                                        <FormHelperText error id="helper-text-email-signup">
                                            {errors.email}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="telefone">Telefone</InputLabel>
                                    <OutlinedInput
                                        id="telefone"
                                        type="telefone"
                                        value={values.telefone}
                                        name="telefone"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu telefone"
                                        fullWidth
                                        error={Boolean(touched.telefone && errors.telefone)}
                                    />
                                    {touched.telefone && errors.telefone && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.telefone}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="genero">Gênero</InputLabel>
                                    <Select
                                        id="genero"
                                        value={values.genero}
                                        defaultValue={values.genero}
                                        name="genero"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        fullWidth
                                    >
                                        {values.genero === 'Masculino' ? (
                                            <MenuItem value={'Masculino'} selected>
                                                Masculino
                                            </MenuItem>
                                        ) : (
                                            <MenuItem value={'Feminino'} selected>
                                                Feminino
                                            </MenuItem>
                                        )}
                                        {values.genero === 'Feminino' ? (
                                            <MenuItem value={'Masculino'}>Masculino</MenuItem>
                                        ) : (
                                            <MenuItem value={'Feminino'}>Feminino</MenuItem>
                                        )}
                                    </Select>
                                    {touched.genero && errors.genero && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.genero}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cep">CEP*</InputLabel>
                                    <OutlinedInput
                                        id="cep"
                                        type="cep"
                                        value={values.cep}
                                        name="cep"
                                        onBlur={() => BuscaCep(values, setFieldValue)}
                                        onChange={handleChange}
                                        placeholder="Digite o seu CEP"
                                        fullWidth
                                        error={Boolean(touched.cep && errors.cep)}
                                    />
                                    {touched.cep && errors.cep && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.cep}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="tipoendereco">Tipo de endereço</InputLabel>
                                    <OutlinedInput
                                        id="tipoendereco"
                                        type="tipoendereco"
                                        value={values.tipoendereco}
                                        name="tipoendereco"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Casa, apartamento, chácara"
                                        fullWidth
                                        error={Boolean(touched.tipoendereco && errors.tipoendereco)}
                                    />
                                    {touched.tipoendereco && errors.tipoendereco && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.tipoendereco}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="logradouro">Logradouro</InputLabel>
                                    <OutlinedInput
                                        id="logradouro"
                                        type="logradouro"
                                        value={values.logradouro}
                                        name="logradouro"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu endereço"
                                        fullWidth
                                        error={Boolean(touched.logradouro && errors.logradouro)}
                                    />
                                    {touched.logradouro && errors.logradouro && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.logradouro}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="numero">Número</InputLabel>
                                    <OutlinedInput
                                        id="numero"
                                        type="numero"
                                        value={values.numero}
                                        name="numero"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o numero do endreço"
                                        fullWidth
                                        error={Boolean(touched.numero && errors.numero)}
                                    />
                                    {touched.numero && errors.numero && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.numero}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={3}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="complemento">Complemento</InputLabel>
                                    <OutlinedInput
                                        id="complemento"
                                        type="complemento"
                                        value={values.complemento}
                                        name="complemento"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o complemento"
                                        fullWidth
                                        error={Boolean(touched.complemento && errors.complemento)}
                                    />
                                    {touched.complemento && errors.complemento && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.complemento}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cidade">Cidade</InputLabel>
                                    <OutlinedInput
                                        id="cidade"
                                        type="cidade"
                                        value={values.cidade}
                                        name="cidade"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite a sua cidade"
                                        fullWidth
                                        error={Boolean(touched.cidade && errors.cidade)}
                                    />
                                    {touched.cidade && errors.cidade && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.cidade}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
                            <Grid item xs={12} md={6}>
                                <Stack spacing={1}>
                                    <InputLabel htmlFor="cidade">Estado</InputLabel>
                                    <OutlinedInput
                                        id="estado"
                                        type="estado"
                                        value={values.estado}
                                        name="estado"
                                        onBlur={handleBlur}
                                        onChange={handleChange}
                                        placeholder="Digite o seu estado"
                                        fullWidth
                                        error={Boolean(touched.estado && errors.estado)}
                                    />
                                    {touched.estado && errors.estado && (
                                        <FormHelperText error id="helper-text-firstname-signup">
                                            {errors.estado}
                                        </FormHelperText>
                                    )}
                                </Stack>
                            </Grid>
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
                                        Cadastrar
                                    </Button>
                                </AnimateButton>
                            </Grid>
                        </Grid>
                    </form>
                )}
            </Formik>
            {updatePerfil[0] === true ? <SnackbarAlert tipo={updatePerfil[1]} title={updatePerfil[2]} /> : ''}
        </>
    );
};

export default Form;
