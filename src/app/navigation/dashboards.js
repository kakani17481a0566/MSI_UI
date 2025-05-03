import { HomeIcon } from '@heroicons/react/24/outline';
import DashboardsIcon from 'assets/dualicons/dashboards.svg?react'
import { NAV_TYPE_ROOT, NAV_TYPE_ITEM } from 'constants/app.constant'

const ROOT_DASHBOARDS = '/dashboards'

const path = (root, item) => `${root}${item}`;

export const dashboards = {
    id: 'dashboards',
    type: NAV_TYPE_ROOT,
    path: '/dashboards',
    title: 'Dashboards',
    transKey: 'nav.dashboards.dashboards',
    Icon: DashboardsIcon,
    childs: [
        {
            id: 'dashboards.home',
            path: path(ROOT_DASHBOARDS, '/home'),
            type: NAV_TYPE_ITEM,
            title: 'Home',
            transKey: 'nav.dashboards.home',
            Icon: HomeIcon,
        },
        {
            id: 'dashboards.ceo', // Unique identifier
            path: 'dashboards/ceo', // Route path
            type: NAV_TYPE_ITEM, // Item type (NAV_TYPE_ITEM, NAV_TYPE_ROOT, or NAV_TYPE_COLLAPSE)
            title: 'CEO', // Title
            transKey: 'CEO', // Translation key (optional)
            Icon: HomeIcon, // Icon component (optional)
        },
        {
            id: 'dashboards.franchise', // Unique identifier
            path: 'dashboards/franchise', // Route path
            type: NAV_TYPE_ITEM, // Item type (NAV_TYPE_ITEM, NAV_TYPE_ROOT, or NAV_TYPE_COLLAPSE)
            title: 'Franchise', // Title
            transKey: 'Franchise', // Translation key (optional)
            Icon: HomeIcon, // Icon component (optional)
        },
        {
            id: 'dashboards.teacher', // Unique identifier
            path: 'dashboards/teacher', // Route path
            type: NAV_TYPE_ITEM, // Item type (NAV_TYPE_ITEM, NAV_TYPE_ROOT, or NAV_TYPE_COLLAPSE)
            title: 'Teacher', // Title
            transKey: 'Teacher', // Translation key (optional)
            Icon: HomeIcon, // Icon component (optional)
        },
        {
            id: 'dashboards.orders', // Unique identifier
            path: 'dashboards/leads', // Route path
            type: NAV_TYPE_ITEM, // Item type (NAV_TYPE_ITEM, NAV_TYPE_ROOT, or NAV_TYPE_COLLAPSE)
            title: 'Leads', // Title
            transKey: 'Leads', // Translation key (optional)
            Icon: HomeIcon, // Icon component (optional)
        },

    ]
}
