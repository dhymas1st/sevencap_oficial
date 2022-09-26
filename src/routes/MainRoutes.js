import { lazy } from 'react';

// project import
import Loadable from 'components/Loadable';
import MainLayout from 'layout/MainLayout';
import ExchangeObligations from 'pages/bolsa-obrigacoes/index';
import ExchangeReports from 'pages/bolsa-relatorios/index';
import VirtualAssistant from 'pages/assistente-virtual/index';
import MyInvestments from 'pages/meus-ativos/index';
import OffshoreObligations from 'pages/offshore-obrigacoes/index';
import OffshoreReports from 'pages/offshore-relatorios/index';
import Summary from 'pages/resumo/index';
import Perfil from 'pages/perfil/index';

// render - dashboard
const DashboardDefault = Loadable(lazy(() => import('pages/dashboard')));

// render - sample page
const SamplePage = Loadable(lazy(() => import('pages/extra-pages/SamplePage')));

// render - utilities
const Typography = Loadable(lazy(() => import('pages/components-overview/Typography')));
const Color = Loadable(lazy(() => import('pages/components-overview/Color')));
const Shadow = Loadable(lazy(() => import('pages/components-overview/Shadow')));
const AntIcons = Loadable(lazy(() => import('pages/components-overview/AntIcons')));

// ==============================|| MAIN ROUTING ||============================== //

const MainRoutes = {
    path: '/',
    element: <MainLayout />,
    children: [
        {
            path: '/',
            element: <DashboardDefault />
        },
        {
            path: 'color',
            element: <Color />
        },
        {
            path: 'dashboard',
            children: [
                {
                    path: 'default',
                    element: <DashboardDefault />
                }
            ]
        },
        {
            path: 'sample-page',
            element: <SamplePage />
        },
        {
            path: 'shadow',
            element: <Shadow />
        },
        {
            path: 'typography',
            element: <Typography />
        },
        {
            path: 'icons/ant',
            element: <AntIcons />
        },
        {
            path: 'importar-notas',
            element: <ExchangeObligations />
        },
        {
            path: 'bolsa-de-valores-relatorios',
            element: <ExchangeReports />
        },
        {
            path: 'assistente-virtual',
            element: <VirtualAssistant />
        },
        {
            path: 'meus-ativos',
            element: <MyInvestments />
        },
        {
            path: 'offshore-obrigacoes',
            element: <OffshoreObligations />
        },
        {
            path: 'offshore-relatorios',
            element: <OffshoreReports />
        },
        {
            path: 'resumo',
            element: <Summary />
        },
        {
            path: 'perfil',
            element: <Perfil />
        }
    ]
};

export default MainRoutes;
