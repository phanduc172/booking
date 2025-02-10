<template>
    <div id="layout-wrapper">
        <NavBar @toggle-sidebar="toggleSidebar" />

        <SideBar :is-collapsed="isCollapsed" />

        <div class="main-content p-3" :class="{ 'expanded': !isCollapsed, 'collapsed': isCollapsed }">
            <div class="page-content">
                <vue-page-transition name="fade-in-left">
                    <router-view />
                </vue-page-transition>
            </div>
        </div>

        <Footer />
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
            isCollapsed: false
        };
    },
    methods: {
        toggleSidebar() {
            this.isCollapsed = !this.isCollapsed;
        }
    }
};
</script>

<style scoped>
.main-content {
    margin-top: 75px;
    transition: margin-left 0.3s ease-in-out;
}


.expanded {
    margin-left: 250px;
}

.collapsed {
    margin-left: 0px;
}
</style>
