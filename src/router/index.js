import auth from "./auth";

export default [
    {
        path: '/',
        component: () => import('@/resources/app/index.vue'),
        children: [
            {
                path: '',
                redirect: '/dashboard'
            },
            {
                path: 'dashboard',
                component: () => import('@/resources/app/home'),
                children: [
                    {
                        path: '',
                        name: 'home-dashboard',
                        component: () => import('@/resources/app/home/home-dashboard.vue')
                    }
                ]
            },
            {
                path: 'bookings',
                component: () => import('@/resources/app/home'),
                children: [
                    {
                        path: '',
                        name: 'bookings',
                        component: () => import('@/resources/app/home/home-dashboard.vue')
                    }
                ]
            },

            {
                name: 'rooms',
                path: 'rooms',
                component: () => import('@/resources/app/room'),
                redirect: {
                    name: 'rooms.list',
                },
                children: [
                    {
                        path: 'list',
                        name: 'rooms.list',
                        component: () => import('@/resources/app/room/list.vue')
                    },
                    {
                        path: ':id/update',
                        name: 'rooms-update',
                        component: () => import('@/resources/app/room/update.vue'),
                        props: true
                    },
                ]
            },

            {
                path: 'customers',
                component: () => import('@/resources/app/customer'),
                children: [
                    {
                        path: '',
                        name: 'customers',
                        component: () => import('@/resources/app/customer/list.vue')
                    }
                ]
            }

        ]
    },
    ...auth
];
