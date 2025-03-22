<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top border-3 p-0">
            <div class="d-flex justify-content-between w-100">
                <a class="navbar-brand d-flex align-items-center justify-content-center">
                    <button class="btn mx-3 text-white" @click="$emit('toggle-sidebar')">
                        <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
                    </button>
                    <h5 class="fw-bold text-white d-none d-sm-block mb-0 text-shadow">
                        MANAGER HOTEL
                    </h5>
                </a>
                <b-dropdown right toggle-class="p-0 border-0 d-flex align-items-center bg-transparent me-3">
                    <template #button-content>
                        <div class="d-flex align-items-center">
                            <h6 class="mb-0 me-2 d-none d-md-block text-white">{{ user.name || 'Người dùng' }}</h6>
                        </div>
                    </template>
                    <b-dropdown-item @click="showProfile">Thông tin cá nhân</b-dropdown-item>
                    <b-dropdown-item @click="logout" class="text-danger">Đăng xuất</b-dropdown-item>
                </b-dropdown>
            </div>
        </nav>
    </div>
</template>

<script>
export default {
    name: 'NavBar',
    data() {
        return {
            user: {
                name: '',
                avatar: ''
            },
        };
    },
    created() {
        this.loadUserData();
    },
    methods: {
        loadUserData() {
            const userData = localStorage.getItem('user');
            if (userData) {
                this.user = JSON.parse(userData);
            }
        },
        showProfile() {
            this.$router.push({ name: 'profile.detail' })
        },
        changePassword() {
        },
        logout() {
            localStorage.removeItem('user');
            this.user = { name: '', avatar: '' };
            this.$router.push('/login');
        }
    }
};
</script>

<style scoped>
.navbar {
    height: 60px;
    width: 100%;
    background-color: var(--primary-color);
}
.text-shadow {
    text-shadow: 3px 3px 8px rgba(0, 0, 0, 0.7);
}

</style>
