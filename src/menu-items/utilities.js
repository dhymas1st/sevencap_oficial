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
    id: 'cadastro',
    title: 'Cadastro',
    type: 'group',
    children: [
        {
            id: 'empresas',
            title: 'Empresas',
            type: 'item',
            url: '/empresas',
            icon: icons.LoginOutlined,
            breadcrumbs: false
        },
        {
            id: 'clientes',
            title: 'Clientes',
            type: 'item',
            url: '/clientes',
            icon: icons.CopyOutlined,
            breadcrumbs: false
        }
    ]
};

export default utilities;
