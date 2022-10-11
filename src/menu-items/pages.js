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
    id: 'nf-s',
    title: 'NF-s',
    type: 'group',
    children: [
        {
            id: 'recebidas',
            title: 'Recebidas',
            type: 'item',
            url: '/recebidas',
            icon: icons.LoginOutlined,
            breadcrumbs: false
        }
    ]
};

export default pages;
