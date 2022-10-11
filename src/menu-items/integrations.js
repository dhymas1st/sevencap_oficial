// assets
import {
    DashboardOutlined,
    BulbOutlined,
    DollarOutlined,
    HomeOutlined,
    ApiOutlined,
    CloudOutlined,
    DeploymentUnitOutlined
} from '@ant-design/icons';

// icons
const icons = {
    DashboardOutlined,
    BulbOutlined,
    DollarOutlined,
    HomeOutlined,
    ApiOutlined,
    CloudOutlined,
    DeploymentUnitOutlined
};

// ==============================|| MENU ITEMS - DASHBOARD ||============================== //

const integrations = {
    id: 'group-dashboard',
    title: 'Utilidades',
    type: 'group',
    children: [
        {
            id: 'armazenamento',
            title: 'Armazenamento',
            type: 'item',
            url: '/armazenamento',
            icon: icons.CloudOutlined,
            breadcrumbs: false
        },
        {
            id: 'integracao',
            title: 'Integração',
            type: 'item',
            url: '/integracao',
            icon: icons.DeploymentUnitOutlined,
            breadcrumbs: false
        }
    ]
};

export default integrations;
