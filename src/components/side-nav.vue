<template>
    <div class="side-bar" :class="{ collapsed: isCollapsed }">
        <ul class="menu">
            <li v-for="item in menuItems" :key="item.path" :class="{ active: $route.path.includes(item.path) }">
                <router-link :to="item.path">
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
                { path: "/booking", icon: "bx bx-calendar-check", label: "Booking" },
                { path: "/room", icon: "bx bx-bed", label: "Room" },
                { path: "/customer", icon: "bx bx-user", label: "Customer" },
                { path: "/staff", icon: "bx bx-user-check", label: "Staff" },
                { path: "/facility", icon: "bx bx-spreadsheet", label: "Facilities" },
                { path: "/service", icon: "bx bx-bell", label: "Services" },
                // { path: "/report", icon: "bx bx-bar-chart", label: "Report" },
                // { path: "/setting", icon: "bx bx-cog", label: "Setting" }
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

.menu li.active a {
    border-left: 5px solid var(--primary-color);;
    color: var(--primary-color);
    font-weight: bold;
    background: linear-gradient(90deg, rgb(255, 255, 255) 0%, rgb(244, 243, 243) 100%);
}
.menu li.active i {
    color: var(--primary-color);
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
    border-left: 5px solid #20b4b1;
    border-color: #20b4b1;
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
