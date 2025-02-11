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
                name: 'dashboard',
                component: () => import('@/resources/app/home')
            },
            {
                path: 'rooms',
                name: 'rooms',
                component: () => import('@/resources/app/room')
            },
        ]
    },
    ...auth
];
