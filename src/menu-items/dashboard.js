// assets
import { DashboardOutlined, BulbOutlined, DollarOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    BulbOutlined,
    DollarOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'assistente-virtual',
            title: 'Assistente Virtual',
            type: 'item',
            url: '/assistente-virtual',
            icon: icons.BulbOutlined,
            breadcrumbs: false
        },
        {
            id: 'resumo',
            title: 'Resumo',
            type: 'item',
            url: '/resumo',
            icon: icons.DashboardOutlined,
            breadcrumbs: false
        },
        {
            id: 'meus-ativos',
            title: 'Meus Ativos',
            type: 'item',
            url: '/meus-ativos',
            icon: icons.DollarOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
