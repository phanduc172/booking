<template>
    <div id="layout-wrapper">
        <NavBar @toggle-sidebar="toggleSidebar" />

        <SideBar :is-collapsed="isCollapsed" />

        <div class="main-content" :class="isCollapsed ? 'collapsed' : 'expanded'">
            <div class="page-content ps-3 ps-md-4">
                <vue-page-transition name="fade-in-left">
                    <router-view />
                </vue-page-transition>
            </div>
        </div>

    </div>
</template>

<script>
import NavBar from "@/components/nav-bar.vue";
import Footer from "@/components/footer.vue";
import SideBar from "@/components/side-bar.vue";

export default {
    name: "IndexPage",
    components: {
        NavBar,
        SideBar,
        Footer
    },
    data() {
        return {
            isCollapsed: window.innerWidth < 992
        };
    },
    mounted() {
        window.addEventListener("resize", this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener("resize", this.handleResize);
    },
    methods: {
        toggleSidebar() {
            this.isCollapsed = !this.isCollapsed;
        },
        handleResize() {
            this.isCollapsed = window.innerWidth < 992;
        }
    }
};
</script>

<style scoped>
.main-content {
    margin-left: 250px;
    transition: margin-left 0.3s ease-in-out;
}

.page-content {
    padding: 72px 16px 40px 16px;
    background-color: #f1f1f5;
    min-height: 100vh;
}

.expanded {
    margin-left: 250px;
}

.collapsed {
    margin-left: 70px;
}

@media (max-width: 991.98px) {
    .main-content {
        margin-left: 0 !important;
    }
}
</style>
