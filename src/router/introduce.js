export default [
    {
        path: '/introduce',
        name: 'introduce.room',
        component: () => import('@/resources/app/introduce/list.vue')
    },
    {
        path: '/bookingroom/:id',
        name: 'introduce.bookingroom',
        component: () => import('@/resources/app/introduce/detail-booking.vue')
    },
];