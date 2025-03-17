import auth from "./auth";
import introduce from "./introduce";

export default [
    ...auth,
    ...introduce,
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
                path: 'booking',
                component: () => import('@/resources/app/booking'),
                redirect: {
                    name: 'booking.list',
                },
                children: [
                    {
                        path: 'list',
                        name: 'booking.list',
                        component: () => import('@/resources/app/booking/list.vue')
                    },
                    {
                        path: 'detail/:id',
                        name: 'booking.detail',
                        component: () => import('@/resources/app/booking/detail.vue')
                    },
                ]
            },
            {
                name: 'room',
                path: 'room',
                component: () => import('@/resources/app/room'),
                redirect: {
                    name: 'room.list',
                },
                children: [
                    {
                        path: 'list',
                        name: 'room.list',
                        component: () => import('@/resources/app/room/list.vue')
                    },
                    {
                        path: 'detail',
                        name: 'room.detail',
                        component: () => import('@/resources/app/room/detail.vue')
                    },
                    {
                        path: 'create',
                        name: 'room.create',
                        component: () => import('@/resources/app/room/create.vue')
                    },
                    {
                        path: ':id/update',
                        name: 'room.update',
                        component: () => import('@/resources/app/room/update.vue'),
                        props: true
                    },
                ]
            },
            {
                path: 'customer',
                component: () => import('@/resources/app/customer'),
                redirect: {
                    name: 'customer.list',
                },
                children: [
                    {
                        path: 'list',
                        name: 'customer.list',
                        component: () => import('@/resources/app/customer/list.vue')
                    },
                    {
                        path: 'create',
                        name: 'customer.create',
                        component: () => import('@/resources/app/customer/create.vue')
                    },
                    {
                        path: ':id/update',
                        name: 'customer.update',
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
                        path: 'create',
                        name: 'staff.create',
                        component: () => import('@/resources/app/staff/create.vue')
                    },
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
            {
                path: 'service',
                component: () => import('@/resources/app/service'),
                redirect: {
                    name: 'service.list',
                },
                children: [
                    {
                        path: 'create',
                        name: 'service.create',
                        component: () => import('@/resources/app/service/create.vue')
                    },
                    {
                        path: 'list',
                        name: 'service.list',
                        component: () => import('@/resources/app/service/list.vue')
                    },
                    {
                        path: ':id/update',
                        name: 'service.update',
                        component: () => import('@/resources/app/service/update.vue')
                    }
                ]
            },
            {
                path: 'facility',
                component: () => import('@/resources/app/facility'),
                redirect: {
                    name: 'facility.list',
                },
                children: [
                    {
                        path: 'create',
                        name: 'facility.create',
                        component: () => import('@/resources/app/facility/create.vue')
                    },
                    {
                        path: 'list',
                        name: 'facility.list',
                        component: () => import('@/resources/app/facility/list.vue')
                    },
                    {
                        path: ':id/update',
                        name: 'facility.update',
                        component: () => import('@/resources/app/facility/update.vue')
                    }
                ]
            },
        ]
    },
];
