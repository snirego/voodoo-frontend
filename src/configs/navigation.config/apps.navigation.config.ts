import { APP_PREFIX_PATH } from '@/constants/route.constant'
import {
    NAV_ITEM_TYPE_TITLE,
    NAV_ITEM_TYPE_COLLAPSE,
    NAV_ITEM_TYPE_ITEM,
} from '@/constants/navigation.constant'
import { ADMIN, USER } from '@/constants/roles.constant'
import type { NavigationTree } from '@/@types/navigation'

const appsNavigationConfig: NavigationTree[] = [
    {
        key: 'app',
        path: '',
        title: 'APP',
        translateKey: 'APP',
        icon: 'apps',
        type: NAV_ITEM_TYPE_TITLE,
        authority: [ADMIN, USER],
        subMenu: [
            {
                key: 'apps.project',
                path: `${APP_PREFIX_PATH}/dashboard`,
                title: 'Dashboard',
                translateKey: 'Dashboard',
                icon: 'project',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [

                ],
            },
            {
                key: 'apps.project',
                path: `${APP_PREFIX_PATH}/videos`,
                title: 'Videos',
                translateKey: 'Videos',
                icon: 'project',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [

                ],
            },
            {
                key: 'apps.project',
                path: `${APP_PREFIX_PATH}/shorts`,
                title: 'Shorts',
                translateKey: 'Shorts',
                icon: 'project',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [

                ],
            },
            {
                key: 'apps.project',
                path: `${APP_PREFIX_PATH}/calendar`,
                title: 'Calendar',
                translateKey: 'Calendar',
                icon: 'project',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [

                ],
            },
            {
                key: 'apps.project',
                path: `${APP_PREFIX_PATH}/activity`,
                title: 'Activity',
                translateKey: 'Activity',
                icon: 'project',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [

                ],
            },
            {
                key: 'apps.project',
                path: `${APP_PREFIX_PATH}/settings`,
                title: 'Settings',
                translateKey: 'Settings',
                icon: 'project',
                type: NAV_ITEM_TYPE_COLLAPSE,
                authority: [ADMIN, USER],
                subMenu: [

                ],
            },
        ],
    },
]

export default appsNavigationConfig
