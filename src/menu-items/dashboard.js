// assets
import { DashboardOutlined, BulbOutlined, DollarOutlined, HomeOutlined } from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    BulbOutlined,
    DollarOutlined,
    HomeOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const dashboard = {
    id: 'group-dashboard',
    title: '',
    type: 'group',
    children: [
        {
            id: 'home',
            title: 'Home',
            type: 'item',
            url: '/home',
            icon: icons.HomeOutlined,
            breadcrumbs: false
        }
    ]
};

export default dashboard;
