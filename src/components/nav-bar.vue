<template>
    <div>
        <nav class="navbar navbar-expand-lg navbar-light bg-light fixed-top border-3 p-0">
            <div class="d-flex justify-content-between w-100">
                <a class="navbar-brand d-flex align-items-center">
                    <button class="btn mx-3" @click="$emit('toggle-sidebar')">
                        <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
                    </button>
                    <img src="https://storage.googleapis.com/a1aa/image/acjGlEnUhQ3QtT_F6ZXqxjMQGxIieGEoitiNXTKEFnA.jpg"
                        height="50" width="50" alt="Homie Hotel Logo" />
                    <span class="ms-2 fw-bold text-orange d-none d-sm-block">HOMIE HOTEL</span>
                </a>
                <b-dropdown right toggle-class="p-0 border-0 d-flex align-items-center bg-transparent">
                    <template #button-content>
                        <div class="d-flex align-items-center">
                            <h6 class="mb-0 me-2 d-none d-md-block text-dark">Phan Đức</h6>
                            <img src="https://scontent.fdad3-3.fna.fbcdn.net/v/t39.30808-6/428626402_1504466653443560_3937159432259496600_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=6ee11a&_nc_eui2=AeHf88bhq4zyqmD-7UB9AWv6alhyVLN14StqWHJUs3XhKzmfyJFTuZ_69TzjUdL1aYZzFgOmm8wlCFXou4jmYjdP&_nc_ohc=vzyaqldfJ1sQ7kNvgFDkpUK&_nc_oc=Adi_8PcxOMoIUXcIwVFEsGUiQYDjJi3fD8yUeSfjzZNoIUzifhnUASZZaXQ_4Ic7gqg8J7sy2nECPsuRm-cKB6Ps&_nc_zt=23&_nc_ht=scontent.fdad3-3.fna&_nc_gid=AAonHIcpOyj-UqvgRnquSCV&oh=00_AYAMpgNSxqueOG0iURfeRHkDPzYzMQEnTTHtlVNAB2L8FQ&oe=67B08590"
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

/* Đảm bảo hiển thị avatar và tên trên mobile */
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

