// assets
import {
    AppstoreAddOutlined,
    AntDesignOutlined,
    BarcodeOutlined,
    BgColorsOutlined,
    FontSizeOutlined,
    LoadingOutlined,
    GlobalOutlined,
    CopyOutlined,
    LoginOutlined
} from '@ant-design/icons';

// icons
const icons = {
    FontSizeOutlined,
    BgColorsOutlined,
    BarcodeOutlined,
    AntDesignOutlined,
    LoadingOutlined,
    AppstoreAddOutlined,
    GlobalOutlined,
    CopyOutlined,
    LoginOutlined
};

// ==============================|| MENU ITEMS - UTILITIES ||============================== //

const utilities = {
    id: 'offshore',
    title: 'Offshore',
    type: 'group',
    children: [
        {
            id: 'offshore-obrigacoes',
            title: 'Obrigações',
            type: 'item',
            url: '/offshore-obrigacoes',
            icon: icons.LoginOutlined,
            breadcrumbs: false
        },
        {
            id: 'offshore-relatorios',
            title: 'Relatórios',
            type: 'item',
            url: '/offshore-relatorios',
            icon: icons.CopyOutlined,
            breadcrumbs: false
        }
    ]
};

export default utilities;
