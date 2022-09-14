import Axios from 'axios';
import { Box, Tab } from '@mui/material';
import { TabContext, TabList, TabPanel } from '@mui/lab';
import { useState, useEffect } from 'react';
import { DataGridPro, GridColDef, GridToolbar, ptBR } from '@mui/x-data-grid-pro';
import { LicenseInfo } from '@mui/x-license-pro';
import CollapsibleTable from './CollapsibleTable';
import api from 'services/api';
import { object } from 'prop-types';

LicenseInfo.setLicenseKey('f88f009b072cafbc44cd21b892432a8cTz00NjIwNCxFPTE2ODc2MTgyMDc3ODgsUz1wcm8sTE09c3Vic2NyaXB0aW9uLEtWPTI=');

const ColumnsTest = [
    { field: 'id', headerName: 'ID', width: 90 },
    {
        field: 'papper',
        headerName: 'Empresa',
        width: 150,
        editable: false
    },
    {
        field: 'quantity',
        headerName: 'Quantidade',
        type: 'number',
        width: 150,
        editable: false
    },
    /*
    {
        field: 'vlr_unit',
        headerName: 'Valor Unitário',
        type: 'number',
        width: 110,
        editable: false
    },
    */
    {
        field: 'avg_price',
        headerName: 'Preço Medio',
        type: 'number',
        width: 110,
        editable: false
    },
    {
        field: 'price',
        headerName: 'Total',
        type: 'number',
        width: 110,
        editable: false
    }
];
const columnsVrMean = [
    { field: 'id', headerName: 'id', width: 90 },
    {
        field: 'paper',
        headerName: 'Empresa',
        width: 150,
        editable: true
    },
    {
        field: 'quantity',
        headerName: 'Quantidade',
        type: 'number',
        width: 150,
        editable: true
    },
    {
        field: 'vlr_unit',
        headerName: 'Preço Medio',
        type: 'number',
        width: 110,
        editable: true
    },

    {
        field: 'price',
        headerName: 'Total',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'tipo',
        headerName: 'Tipo',
        width: 110,
        editable: true
    },
    {
        field: 'emolumnts',
        headerName: 'Emolumentos',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'taxes',
        headerName: 'Taxas',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'total_taxes',
        headerName: 'Total de Taxas',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'tx_liquid',
        headerName: 'Taxa Liquida',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'tx_operation',
        headerName: 'Taxa de Operação',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'tx_reg',
        headerName: 'Taxa de Registro',
        type: 'number',
        width: 110,
        editable: true
    },
    {
        field: 'others',
        headerName: 'Outros',
        type: 'number',
        width: 110,
        editable: true
    }
];

const rowsTest = [
    {
        id: '1',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '2',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '4.164,00',
        quantity: '300',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.14',
        others: '0.83',
        taxes: '2.28',
        total_taxes: '25.79',
        tx_liquid: '1.14',
        tx_operation: '21.39',
        tx_reg: '0.00'
    },
    {
        id: '3',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '4',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '9.716,00',
        quantity: '700',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.32',
        others: '1.95',
        taxes: '5.33',
        total_taxes: '60.18',
        tx_liquid: '2.67',
        tx_operation: '49.92',
        tx_reg: '0.00'
    },
    {
        id: '5',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '6',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    }
];

const rowsVrConference = [
    {
        id: '1',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '2',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '4.164,00',
        quantity: '300',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.14',
        others: '0.83',
        taxes: '2.28',
        total_taxes: '25.79',
        tx_liquid: '1.14',
        tx_operation: '21.39',
        tx_reg: '0.00'
    },
    {
        id: '3',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '4',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '9.716,00',
        quantity: '700',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.32',
        others: '1.95',
        taxes: '5.33',
        total_taxes: '60.18',
        tx_liquid: '2.67',
        tx_operation: '49.92',
        tx_reg: '0.00'
    },
    {
        id: '5',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '6',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '7',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: '8',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '5.552,00',
        quantity: '400',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.18',
        others: '1.11',
        taxes: '3.05',
        total_taxes: '34.39',
        tx_liquid: '1.53',
        tx_operation: '28.53',
        tx_reg: '0.00'
    },
    {
        id: '9',
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BR MALLS PARON NM',
        price: '1.388,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 13.88,
        emolumnts: '0.05',
        others: '0.28',
        taxes: '0.76',
        total_taxes: '8.60',
        tx_liquid: '0.38',
        tx_operation: '7.13',
        tx_reg: '0.00'
    },
    {
        id: 10,
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BRASILON NM',
        price: '3.903,00',
        quantity: '100',
        type_operation: 'C',
        vlr_unit: 39.03,
        emolumnts: '0.13',
        others: '0.78',
        taxes: '2.14',
        total_taxes: '24.18',
        tx_liquid: '1.07',
        tx_operation: '20.05',
        tx_reg: '0.00'
    },
    {
        id: 11,
        date: '10/03/2020',
        number_leaf: '19794916 1',
        paper: 'VISTA BRASILON NM',
        price: '23.418,00',
        quantity: '600',
        type_operation: 'C',
        vlr_unit: 39.03,
        emolumnts: '0.76',
        others: '4.69',
        taxes: '12.85',
        total_taxes: '145.06',
        tx_liquid: '6.44',
        tx_operation: '120.32',
        tx_reg: '0.00'
    }
];

// {
//   "id": 6393,
//   "operations": [
//     {
//       "date": "10/03/2020",
//       "number_leaf": "19794916 1",
//       "paper": "VISTA BRASILON NM",
//       "price": "3.903,00",
//       "quantity": "100",
//       "type_operation": "C",
//       "vlr_unit": 39.03
//     },
//     {
//       "date": "10/03/2020",
//       "number_leaf": "19794916 1",
//       "paper": "VISTA BRASILON NM",
//       "price": "23.418,00",
//       "quantity": "600",
//       "type_operation": "C",
//       "vlr_unit": 39.03
//     }
//   ],
//   "paper": "VISTA BRASILON NM",
//   "quantity": 700,
//   "total": "27321.00",
//   "vr_medio": "39.03"
// },

const rowsVrMean = [
    {
        id: 2185,
        operations: [
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '4.164,00',
                quantity: '300',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '9.716,00',
                quantity: '700',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '5.552,00',
                quantity: '400',
                type_operation: 'C',
                vlr_unit: 13.88
            },
            {
                date: '10/03/2020',
                number_leaf: '19794916 1',
                paper: 'VISTA BR MALLS PARON NM',
                price: '1.388,00',
                quantity: '100',
                type_operation: 'C',
                vlr_unit: 13.88
            }
        ],
        paper: 'VISTA BR MALLS PARON NM',
        quantity: 2000,
        total: '27760.00',
        vr_medio: '13.88'
    }
];

export const TabsMenu = () => {
    const [value, setValue] = useState('1');
    //const [Columns, setColumns] = useState([]);
    const [Rows, setRows] = useState([]);
    //const [dados, setDados] = useState([]);
    const dados = JSON.parse(localStorage.getItem('dados'));
    const handleChange = (event, newValue) => {
        setValue(newValue);
    };
    const [operations, setOperations] = useState([]);

    useEffect(() => {
        api.post('/getOperacoesbyClient', { cpf: dados.cpf }).then((res) => {
            let datas = res.data;
            let inf = [];
            /*const infos = res.data.reduce((acc, item) => {
                if (!inf.find((el) => el == item.titulo)) {
                    console.log(item.titulo);
                    inf.push(item.titulo);
                }
                console.log(inf);
                */
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
                /*
api.post('/getResumoFinanceiro', {
                            cpf: el.cpf_cnpj,
                            nr_nota: el.numero_nf
                        }).then((res) => {
                            Object.assign(el, res.data[0]);
                            console.log(el);
                        });
                        */
                //api.post('/getResFinOp');
                //setDados(inf);
            });

            let acoes = [];
            /* Busca Resumos FIn
            inf.map((item) => {
                item.transactions.reduce((acc, el) => {
                    console.log(Acoes);
                    console.log(el.titulo);
                    if (acoes.find((e) => e.titulo == el.titulo)) {
                        if (!acoes.find((e) => e.numero_nf)) {
                            const index = acoes.findIndex((e) => e.titulo == el.titulo);
                            return acoes.push({
                                papper: el.titulo,
                                papper: el.numero_nf
                            });
                        }
                    } else {
                        return acoes.push({
                            papper: el.titulo,
                            papper: el.numero_nf
                        });
                    }
                }, []);
            });
            */

            const dadostabela = inf.map((item, array, i) => {
                const id = inf.findIndex((el) => el.papper == item.papper);
                const quantidade = item.transactions.reduce((acc, item) => acc + parseInt(item.quantidade), 0);
                const preco = item.transactions.reduce((acc, item) => acc + parseFloat(item.preco), 0);
                const valor = item.transactions.reduce((acc, item) => acc + parseFloat(item.valor), 0);
                const avg = preco / item.transactions.length;

                /*
                const emoluentes = item.transactions.reduce((acc, item) => acc + parseFloat(item.tx_emolumento), 0);
                const taxas = item.transactions.reduce((acc, item) => acc + parseFloat(item.taxes), 0);
                const TaxasTotal = item.transactions.reduce((acc, item) => acc + parseFloat(item.taxes), 0);
                const taxasLiquida = item.transactions.reduce((acc, item) => acc + parseFloat(item.tx_liquid), 0);
                const taxasOperacao = item.transactions.reduce((acc, item) => acc + parseFloat(item.tx_impostos), 0);
                const taxasRegistro = item.transactions.reduce((acc, item) => acc + parseFloat(item.tx_registro), 0);
                const outras = item.transactions.reduce((acc, item) => acc + parseFloat(item.tx_outras), 0);
                */
                const tipo = item.transactions[0].debit_credit;
                const emolumentos = parseFloat(item.transactions[0].fees);
                const taxas = parseFloat(item.transactions[0].taxes);
                const TaxasTotal = parseFloat(item.transactions[0].taxes);
                const taxasLiquida = parseFloat(item.transactions[0].taxes);
                const taxasOperacao = parseFloat(item.transactions[0].taxes);
                const taxasRegistro = parseFloat(item.transactions[0].taxes);
                const outros = parseFloat(item.transactions[0].taxes);
                return {
                    id: id,
                    paper: item.papper,
                    quantity: quantidade,
                    //vlr_unit: preco,
                    vlr_unit: avg.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                    price: valor.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                    tipo: tipo,
                    emolumnts: emolumentos.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                    taxes: taxas.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                    total_taxes: TaxasTotal.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                    tx_liquid: taxasLiquida.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                    tx_operation: taxasOperacao.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                    tx_reg: taxasRegistro.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' }),
                    others: outros.toLocaleString('pt-br', { style: 'currency', currency: 'BRL' })
                };
            });

            /*
                    id - id
                    empresa - paper
                    quantidade  -  quantity
                    valor unitario  -  vlr_unit
                    total  -  price
                    emoluentes  -  emolumnts
                    taxas  -  taxes
                    total de taxas  -  total_taxes
                    taxa liqueida  -  tx_liquid
                    taxa de operacao  -  tx_operation
                    taxa de registro  -  tx_reg
                    outas  -  others

                */
            console.log(dadostabela);
            setRows(dadostabela);
        }, []);
    }, []);
    console.log(Rows);
    return (
        <Box>
            <TabContext value={value}>
                <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
                    <TabList aria-label="Tabs" onChange={handleChange} centered>
                        <Tab label="Resumo financeiro" value="1" />
                        <Tab label="Ganho de Capital" value="2" />
                        <Tab label="Imposto de Renda Anual" value="3" />
                        <Tab label="Custo Médio de Ações" value="4" />
                    </TabList>
                </Box>
                <TabPanel value="1">
                    <Box sx={{ height: 500, width: '100%' }}>
                        <DataGridPro
                            rows={Rows}
                            columns={columnsVrMean}
                            pageSize={5}
                            rowsPerPageOptions={[5]}
                            checkboxSelection
                            disableSelectionOnClick
                            localeText={ptBR.components.MuiDataGrid.defaultProps.localeText}
                            components={{ Toolbar: GridToolbar }}
                        />
                    </Box>
                </TabPanel>
                <TabPanel value="2">Ganho de Capital</TabPanel>
                <TabPanel value="3">Imposto de Renda Anual</TabPanel>
                <TabPanel value="4">
                    <CollapsibleTable />
                </TabPanel>
            </TabContext>
        </Box>
    );
};
