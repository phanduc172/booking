<template>
  <div class="side-bar" :class="{ collapsed: isCollapsed }">
    <ul class="menu">
      <li>
        <router-link to="/dashboard">
          <i class="bx bxs-dashboard me-3"></i>
          <span v-if="!isCollapsed">Dashboard</span>
        </router-link>
      </li>
      <li>
        <router-link to="/bookings">
          <i class="bx bx-calendar-check me-3"></i>
          <span v-if="!isCollapsed">Đặt phòng</span>
        </router-link>
      </li>
      <li>
        <router-link to="/rooms">
          <i class="bx bx-bed me-3"></i>
          <span v-if="!isCollapsed">Phòng</span>
        </router-link>
      </li>
      <li>
        <router-link to="/customers">
          <i class="bx bx-user me-3"></i>
          <span v-if="!isCollapsed">Khách hàng</span>
        </router-link>
      </li>
      <li>
        <router-link to="/staff">
          <i class="bx bx-user-check me-3"></i>
          <span v-if="!isCollapsed">Nhân viên</span>
        </router-link>
      </li>
      <li>
        <router-link to="/services">
          <i class="bx bx-bell me-3"></i>
          <span v-if="!isCollapsed">Dịch vụ</span>
        </router-link>
      </li>
      <li>
        <router-link to="/reports">
          <i class="bx bx-bar-chart me-3"></i>
          <span v-if="!isCollapsed">Báo cáo</span>
        </router-link>
      </li>
      <li>
        <router-link to="/settings">
          <i class="bx bx-cog me-3"></i>
          <span v-if="!isCollapsed">Cài đặt</span>
        </router-link>
      </li>
    </ul>
  </div>
</template>

<script>
export default {
  name: "SideBar",
  props: {
    isCollapsed: Boolean,
  },
};
</script>
<style scoped>
.side-bar {
  position: fixed;
  top: 75px;
  left: 0;
  width: 250px;
  height: calc(100vh - 75px);
  background: white;
  color: #333;
  transition: width 0.3s ease-in-out;
  overflow-y: auto;
  border-right: 1px solid #ddd;
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
  background: #f0f0f0;
}

.menu a i {
  font-size: 24px;
  transition: margin-right 0.3s;
  color: #555;
}

.collapsed .menu a i {
  margin-right: 0;
}

.menu a span {
  transition: opacity 0.3s ease-in-out;
}

.collapsed .menu a span {
  opacity: 0;
  width: 0;
  overflow: hidden;
}
</style>
