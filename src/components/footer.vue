<template>
    <footer class="bg-primary text-white text-center py-4">
        <div class="container">
            <h5 class="fw-bold">Khách sạn Luxury Stay</h5>
            <p class="mb-2">Địa chỉ: 123 Đường Biển, Quận 1, TP. Hồ Chí Minh</p>
            <p class="mb-2">Hotline: <a href="tel:+84123456789" class="text-white">+84 123 456 789</a> | Email: <a
                    href="mailto:contact@luxurystay.com" class="text-white">contact@luxurystay.com</a></p>
            <p class="m-0">&copy; {{ new Date().getFullYear() }} Luxury Stay. Tất cả các quyền được bảo lưu.</p>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'SiteFooter',
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
