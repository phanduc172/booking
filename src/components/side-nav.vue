<template>
    <div class="side-bar" :class="{ collapsed: isCollapsed }">
        <ul class="menu">
            <li v-for="item in menuItems" :key="item.path">
                <!-- Sử dụng active-class="active" để đặt class "active" khi route khớp -->
                <router-link :to="item.path" active-class="active" exact>
                    <i :class="item.icon + ' me-3'"></i>
                    <span v-if="!isCollapsed">{{ item.label }}</span>
                </router-link>
            </li>
        </ul>
    </div>
</template>

<script>
export default {
    name: "SideNav",
    props: {
        isCollapsed: {
            type: Boolean,
            default: false
        }
    },
    data() {
        return {
            isLocalCollapsed: this.isCollapsed,
            menuItems: [
                { path: "/dashboard", icon: "bx bxs-dashboard", label: "Dashboard" },
                { path: "/bookings", icon: "bx bx-calendar-check", label: "Bookings" },
                { path: "/rooms", icon: "bx bx-bed", label: "Rooms" },
                { path: "/customers", icon: "bx bx-user", label: "Customers" },
                { path: "/staff", icon: "bx bx-user-check", label: "Staff" },
                { path: "/services", icon: "bx bx-bell", label: "Services" },
                { path: "/reports", icon: "bx bx-bar-chart", label: "Reports" },
                { path: "/settings", icon: "bx bx-cog", label: "Settings" }
            ]
        };
    },
    mounted() {
        this.handleResize();
        window.addEventListener('resize', this.handleResize);
    },
    beforeDestroy() {
        window.removeEventListener('resize', this.handleResize);
    },
    methods: {
        handleResize() {
            this.isLocalCollapsed = window.innerWidth < 992;
        }
    },
    watch: {
        isCollapsed(newVal) {
            this.isLocalCollapsed = newVal;
        }
    },
};
</script>
<style scoped>
.side-bar {
    position: fixed;
    top: 60px;
    left: 0;
    width: 250px;
    height: calc(100vh - 84px);
    background: white;
    color: #333;
    transition: width 0.3s ease-in-out;
    overflow-y: auto;
    border-right: 1px solid #ddd;
    z-index: 1050;
    border-radius: 12px;
    margin: 12px 0 12px 12px;
    overflow-x: hidden;
}

.collapsed {
    width: 70px;
}

.menu {
    list-style: none;
    padding: 10px;
}

.menu li {
    margin: 15px 0;
}

.menu a {
    display: flex;
    align-items: center;
    color: #333;
    text-decoration: none;
    padding: 10px;
    transition: background 0.3s;
    border-radius: 5px;
}

.menu a:hover {
    background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(244, 243, 243) 100%);
    border-left: 5px solid #ffd900;
    border-color: #ffd900;
}

.menu a.active {
    background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(244, 243, 243) 100%);
    border-left: 5px solid #ffd900;
    border-color: #ffd900;
}

.menu a i {
    font-size: 24px;
    transition: margin-right 0.3s;
    color: #555;
}

.menu a i:hover {
    border-radius: 10px;
}

.collapsed .menu a i {
    margin-right: 0;
}

.menu a span {
    transition: opacity 0.3s ease-in-out;
    white-space: nowrap;
}

.collapsed .menu a span {
    opacity: 0;
    width: 0;
    overflow: hidden;
}

@media (max-width: 991.98px) {
    .side-bar {
        position: fixed;
        transition: left 0.3s ease-in-out;
    }

    .collapsed {
        display: none;
    }

    .side-bar {
        width: 200px;
    }
}
</style>

