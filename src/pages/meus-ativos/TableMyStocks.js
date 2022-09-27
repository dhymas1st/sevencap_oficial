import * as React from 'react';
import PropTypes from 'prop-types';
import Box from '@mui/material/Box';
import Collapse from '@mui/material/Collapse';
import IconButton from '@mui/material/IconButton';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Typography from '@mui/material/Typography';
import Paper from '@mui/material/Paper';
import KeyboardArrowDownIcon from '@mui/icons-material/KeyboardArrowDown';
import KeyboardArrowUpIcon from '@mui/icons-material/KeyboardArrowUp';
import api from 'services/api';

function createData(name, calories, fat, carbs, protein, price) {
    return {
        name,
        calories,
        fat,
        carbs,
        protein,
        price,
        history: [
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 100,
                preco: 14.66,
                valor: 14660.0
            },
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 500,
                preco: 14.66,
                valor: 14660.0
            },
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 400,
                preco: 14.66,
                valor: 14660.0
            },
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 300,
                preco: 14.66,
                valor: 14660.0
            },
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 100,
                preco: 14.66,
                valor: 14660.0
            },
            {
                date: '2020-01-05',
                negociacao: '1-BOVESPA',
                debit_credit: 'C',
                tipo_mercado: 'VISTA',
                titulo: 'AMBEV S/A          ON',
                quantidade: 100,
                preco: 14.66,
                valor: 14660.0
            }
        ]
    };
}

function Row(props) {
    const { row } = props;
    const [open, setOpen] = React.useState(false);

    return (
        <React.Fragment>
            <TableRow sx={{ '& > *': { borderBottom: 'unset' } }}>
                <TableCell>
                    <IconButton aria-label="expand row" size="small" onClick={() => setOpen(!open)}>
                        {open ? <KeyboardArrowUpIcon /> : <KeyboardArrowDownIcon />}
                    </IconButton>
                </TableCell>
                <TableCell component="th" scope="row">
                    {row.name}
                </TableCell>
                <TableCell align="right">{row.calories}</TableCell>
                <TableCell align="right">{row.fat}</TableCell>
                <TableCell align="right">{row.carbs}</TableCell>
                <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
            <TableRow>
                <TableCell style={{ paddingBottom: 0, paddingTop: 0 }} colSpan={6}>
                    <Collapse in={open} timeout="auto" unmountOnExit>
                        <Box sx={{ margin: 1 }}>
                            <Typography variant="h6" gutterBottom component="div">
                                Historico
                            </Typography>
                            <Table size="small" aria-label="purchases">
                                <TableHead>
                                    <TableRow>
                                        <TableCell align="left">Data</TableCell>
                                        <TableCell align="right">Negociação</TableCell>
                                        <TableCell align="right">C/V</TableCell>
                                        <TableCell align="right">Tipo de mercado</TableCell>
                                        <TableCell align="right">Especificação do título</TableCell>
                                        <TableCell align="right">Quantidade</TableCell>
                                        <TableCell align="right">Preço</TableCell>
                                        <TableCell align="right">Valor Operação</TableCell>
                                    </TableRow>
                                </TableHead>
                                <TableBody>
                                    {row.history.map((historyRow) => (
                                        <TableRow key={historyRow.date}>
                                            <TableCell align="left" component="th" scope="row">
                                                {historyRow.date}
                                            </TableCell>
                                            {/*<TableCell>{historyRow.customerId}</TableCell>*/}
                                            <TableCell align="right">{historyRow.negociacao}</TableCell>
                                            <TableCell align="right">{historyRow.debit_credit}</TableCell>
                                            <TableCell align="right">{historyRow.tipo_mercado}</TableCell>
                                            <TableCell align="right">{historyRow.titulo}</TableCell>
                                            <TableCell align="right">{historyRow.quantidade}</TableCell>
                                            <TableCell align="right">{historyRow.preco}</TableCell>
                                            <TableCell align="right">{historyRow.valor}</TableCell>
                                            {/*<TableCell align="right">{Math.round(historyRow.amount * row.price * 100) / 100}</TableCell>*/}
                                        </TableRow>
                                    ))}
                                </TableBody>
                            </Table>
                        </Box>
                    </Collapse>
                </TableCell>
            </TableRow>
        </React.Fragment>
    );
}

Row.propTypes = {
    row: PropTypes.shape({
        calories: PropTypes.number.isRequired,
        carbs: PropTypes.number.isRequired,
        fat: PropTypes.number.isRequired,
        history: PropTypes.arrayOf(
            PropTypes.shape({
                amount: PropTypes.number.isRequired,
                customerId: PropTypes.string.isRequired,
                date: PropTypes.string.isRequired
            })
        ).isRequired,
        name: PropTypes.string.isRequired,
        price: PropTypes.number.isRequired,
        protein: PropTypes.number.isRequired
    }).isRequired
};
/*
function dados() {
    const [dados, setDados] = React.useState([]);
    const [transacts, setTransacts] = React.useState([]);

    React.useEffect(() => {
        async function CarregaDados() {
        api.post('/geOperacoesbyClient', { cpf: '214.487.188-48' }).then((res) => {
            let datas = res.data;
            let inf = [];
            //let objs = {};
            datas.length = 100;

            datas.map((item, arr, i) => {
                if (inf.find((el) => el.papper == item.titulo)) {
                    const index = inf.findIndex((el) => el.papper === item.titulo);
                    inf[index].transactions.push(item);
                } else {
                    inf.push({
                        papper: item.titulo,
                        transactions: [item]
                    });
                }
                setDados(inf);
            });
            console.log(inf);

            const dadostabela = inf.map((item, array, i) => {
                const id = inf.findIndex((el) => el.papper == item.papper);
                const quantidade = item.transactions.reduce((acc, item) => acc + parseInt(item.quantidade), 0);
                const preco = item.transactions.reduce((acc, item) => acc + parseInt(item.preco), 0);
                const valor = item.transactions.reduce((acc, item) => acc + parseInt(item.valor), 0);
                const avg = preco / item.transactions.length;
                return {
                    id: id,
                    papper: item.papper,
                    quantity: quantidade,
                    //vlr_unit: preco,
                    avg_price: avg,
                    price: valor
                };
            });
            setTransacts(dadostabela);
            //console.log(dados);        
        });
    }
    CarregaDados();
    }, []);
    return transc;
}
*/

const rows = [
    createData('AMBEV S/A          ON', 1500, 14.66, 21990.0),
    createData('CIA HERING          ON NM', 1500, 14.66, 21990.0),
    createData('COSAN      ON NM', 1500, 14.66, 21990.0),
    createData('ELETROBRAS     PNB N1                           D', 1500, 14.66, 21990.0),
    createData('FLEURY     ON ED NM', 1500, 14.66, 21990.0),
    createData('PETROBRAS BR     ON NM', 1500, 14.66, 21990.0)
];

export default function TableMyStocks() {
    //const [dados, setDados] = React.useState([]);
    const [transacts, setTransacts] = React.useState([]);
    const dados = JSON.parse(localStorage.getItem('dados'));

    React.useEffect(() => {
        let inf = [];

        async function carregaNotas() {
            const resposta = await api.post('/getOperacoesbyClient', { cpf: dados.cpf });
            const datas = resposta.data;
            datas.length = 100;

            datas.map((item, arr, i) => {
                if (inf.find((el) => el.papper == item.titulo)) {
                    const index = inf.findIndex((el) => el.papper === item.titulo);
                    inf[index].transactions.push(item);
                } else {
                    inf.push({
                        papper: item.titulo,
                        transactions: [item]
                    });
                }
                //setDados(inf);
            });

            const dadostabela = inf.map((item, array, i) => {
                const id = inf.findIndex((el) => el.papper == item.papper);
                const quantidade = item.transactions.reduce((acc, item) => acc + parseInt(item.quantidade), 0);
                const preco = item.transactions.reduce((acc, item) => acc + parseFloat(item.preco), 0);
                const valor = item.transactions.reduce((acc, item) => acc + parseFloat(item.valor), 0);
                const avg = preco / item.transactions.length;
                return {
                    id: id,
                    papper: item.papper,
                    quantity: quantidade,
                    //vlr_unit: preco,
                    avg_price: avg.toFixed(2),
                    price: valor.toFixed(2)
                };
            });
            setTransacts(dadostabela);
        }
        carregaNotas();
    }, []);

    const linhas = transacts.map((item) => {
        return createData(item.papper, item.quantity, item.avg_price, item.price);
    });
    console.log(linhas);
    return (
        <TableContainer component={Paper}>
            <Table aria-label="collapsible table">
                <TableHead>
                    <TableRow>
                        <TableCell align="center">Ativo</TableCell>
                        <TableCell align="right">Quantidade</TableCell>
                        <TableCell align="right">Cotação</TableCell>
                        <TableCell align="right">Preço médio</TableCell>
                        <TableCell align="right">Custo</TableCell>
                        <TableCell align="right">Valor</TableCell>
                        <TableCell align="right">Lucro</TableCell>
                        <TableCell align="center">Rentabilidade</TableCell>
                    </TableRow>
                </TableHead>
                <TableBody>
                    {linhas.map((row) => (
                        <Row key={row.name} row={row} />
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}
