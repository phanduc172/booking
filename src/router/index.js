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
                component: () => import('@/resources/app/booking'),
                redirect: {
                    name: 'bookings.list',
                },
                children: [
                    {
                        path: 'list',
                        name: 'bookings.list',
                        component: () => import('@/resources/app/booking/list.vue')
                    },
                    {
                        path: 'detail/:id',
                        name: 'bookings.detail',
                        component: () => import('@/resources/app/booking/partials/booking-detail.vue')
                    },
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
                        name: 'rooms.update',
                        component: () => import('@/resources/app/room/update.vue'),
                        props: true
                    },
                ]
            },
            {
                path: 'customers',
                component: () => import('@/resources/app/customer'),
                redirect: {
                    name: 'customers.list',
                },
                children: [
                    {
                        path: 'list',
                        name: 'customers.list',
                        component: () => import('@/resources/app/customer/list.vue')
                    },
                    {
                        path: ':id/update',
                        name: 'customers.update',
                        component: () => import('@/resources/app/customer/update.vue')
                    }
                ]
            },
            {
                path: 'staff',
                component: () => import('@/resources/app/staff'),
                redirect: {
                    name: 'staff.list',
                },
                children: [
                    {
                        path: 'list',
                        name: 'staff.list',
                        component: () => import('@/resources/app/staff/list.vue')
                    },
                    {
                        path: ':id/update',
                        name: 'staff.update',
                        component: () => import('@/resources/app/staff/update.vue')
                    }
                ]
            },

        ]
    },
    ...auth
];
