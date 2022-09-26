// assets
import { LoginOutlined, ProfileOutlined, CopyOutlined } from '@ant-design/icons';

// icons
const icons = {
    LoginOutlined,
    ProfileOutlined,
    CopyOutlined
};

// ==============================|| MENU ITEMS - EXTRA PAGES ||============================== //

const pages = {
    id: 'bolsa-de-valores',
    title: 'Bolsa de Valores',
    type: 'group',
    children: [
        {
            id: 'importar-notas',
            title: 'Importar Notas',
            type: 'item',
            url: '/importar-notas',
            icon: icons.LoginOutlined,
            breadcrumbs: false
        },
        {
            id: 'bolsa-de-valores-relatorios',
            title: 'Relatórios',
            type: 'item',
            url: '/bolsa-de-valores-relatorios',
            icon: icons.CopyOutlined,
            breadcrumbs: false
        }
    ]
};

export default pages;
