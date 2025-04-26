<template>
    <footer class="bg-primary text-white text-center py-4">
        <div class="container">
            <h5 class="fw-bold">{{ entry.name }}</h5>
            <p class="mb-2">{{ entry.address }}</p>
            <p class="mb-2">
                Hotline: <a :href="`tel:${phone}`" class="text-white">{{ phone }}</a> |
                Email: <a :href="`mailto:${email}`" class="text-white">{{ email }}</a>
            </p>
            <p class="m-0">{{ entry.copyright }}</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SiteFooter',
    computed: {
        phone() {
            return process.env.VUE_APP_PHONE_USER || this.entry.phone;
        },
        email() {
            return process.env.VUE_APP_EMAIL_USER || this.entry.email;
        }
    },
    data() {
        return {
            entry: {
                name: "Khách sạn Luxury Stay",
                phone: '0383181111',
                email: 'default@email.com',
                address: '123 Đường Biển, Quận 1, TP. Hồ Chí Minh',
                copyright: '© 2025 Luxury Stay. Tất cả các quyền được bảo lưu.'
            }
        }
    }
};
</script>

<style scoped>
.bg-primary {
    background: var(--primary-color) !important;
}

a {
    text-decoration: none;
}
</style>
