// assets
import { ChromeOutlined, QuestionOutlined } from '@ant-design/icons';

// icons
const icons = {
    ChromeOutlined,
    QuestionOutlined
};

// ==============================|| MENU ITEMS - SAMPLE PAGE & DOCUMENTATION ||============================== //

const support = {
    id: 'support',
    title: 'Suporte',
    type: 'group',
    children: [
        {
            id: 'abrir-chamado',
            title: 'Abrir chamado',
            type: 'item',
            url: '/abrir-chamado',
            icon: icons.ChromeOutlined
        },
        {
            id: 'faq',
            title: 'FAQ',
            type: 'item',
            url: 'faq',
            icon: icons.QuestionOutlined,
            external: true,
            target: true
        }
    ]
};

export default support;
