<template>
    <div>
        <nav class="navbar navbar-expand-lg fixed-top border-3 p-0">
            <div class="d-flex justify-content-between w-100">
                <a class="navbar-brand d-flex align-items-center justify-content-center">
                    <button class="btn mx-3 text-white" @click="$emit('toggle-sidebar')">
                        <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
                    </button>
                    <img src="https://storage.googleapis.com/a1aa/image/acjGlEnUhQ3QtT_F6ZXqxjMQGxIieGEoitiNXTKEFnA.jpg"
                        height="40" width="40" alt="Homie Hotel Logo" />
                    <h5 class="ms-3 fw-bold text-white d-none d-sm-block mb-0">HOMIE HOTEL</h5>
                </a>
                <b-dropdown right toggle-class="p-0 border-0 d-flex align-items-center bg-transparent me-3">
                    <template #button-content>
                        <div class="d-flex align-items-center">
                            <h6 class="mb-0 me-2 d-none d-md-block text-white">Phan Đức</h6>
                            <img src="https://plus.unsplash.com/premium_photo-1736165168647-e216dcd23720?q=80&w=1925&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                                alt="Avt" class="rounded-circle me-2" width="40" height="40" />
                        </div>
                    </template>
                    <b-dropdown-item @click="showProfile">Thông tin cá nhân</b-dropdown-item>
                    <b-dropdown-item @click="changePassword">Đổi mật khẩu</b-dropdown-item>
                    <b-dropdown-item @click="logout" class="text-danger">Đăng xuất</b-dropdown-item>
                </b-dropdown>
            </div>
        </nav>
    </div>

</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        toggleRightBar() {
            this.$emit('toggle-sidebar');
        },
        showProfile() {
            console.log("Hiển thị thông tin cá nhân");
        },
        changePassword() {
            console.log("Chuyển đến trang đổi mật khẩu");
        },
        logout() {
            console.log("Đăng xuất");
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

.user-dropdown {
    flex-grow: 1;
    display: flex;
    justify-content: flex-end;
}

.username {
    display: block;
    font-weight: bold;
}

@media (max-width: 576px) {
    .user-dropdown {
        justify-content: center;
    }

    .username {
        font-size: 14px;
    }

    .avatar {
        width: 35px;
        height: 35px;
    }
}
</style>
