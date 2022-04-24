import { MenuItem } from "../interfaces/interfaces";

export const menuItems: MenuItem[] = [
    {
        name: 'Animation 101',
        icon: 'cube-outline',
        component: 'Animation101'
    },
    {
        name: 'Animation 102',
        icon: 'albums-outline',
        component: 'Animation102'
    },
    {
        name: 'Switches',
        icon: 'toggle-outline',
        component: 'SwitchScreen'
    },
    {
        name: 'Alerts',
        icon: 'alert-circle-outline',
        component: 'AlertScreen'
    },
    {
        name: 'TextInput',
        icon: 'document-text-outline',
        component: 'TextInputScreen'
    },
    {
        name: 'PullToRefresh',
        icon: 'refresh-outline',
        component: 'PullToRefreshScreen'
    },
    {
        name: 'SectionList',
        icon: 'list-circle-outline',
        component: 'CustomSectionListScreen'
    },
    {
        name: 'Modal Screen',
        icon: 'copy-outline',
        component: 'ModalScreen'
    },
    {
        name: 'Infinite Scroll',
        icon: 'download-outline',
        component: 'InfiniteScrollScreen'
    },
]