<script>
import simplebar from "simplebar-vue";

import SideNav from "./side-nav";

export default {
  components: { simplebar, SideNav },
  props: {
    isCondensed: {
      type: Boolean,
      default: false,
    },
    isCollapsed: {
      type: Boolean,
      default: false,
    },
  },
  data() {
    return {
      settings: {
        minScrollbarLength: 60,
      },
    };
  },

  methods: {},
};
</script>

<template>
  <div class="vertical-menu">
    <simplebar v-if="!isCondensed" :settings="settings" class="h-100">
      <SideNav :is-collapsed="isCollapsed" />
    </simplebar>

    <simplebar v-else class="h-100">
      <SideNav :is-collapsed="isCollapsed" />
    </simplebar>
  </div>
  <!-- Left Sidebar End -->
</template>
<style lang="scss">
.vertical-collpsed .vertical-menu #sidebar-menu>ul>li:hover>ul {
  overflow-x: auto;
  overflow-y: scroll;

  &::-webkit-scrollbar {
    width: 4px;
    height: 4px;
  }

  &::-webkit-scrollbar-track {
    background: #f1f1f1;
  }

  /* Handle */
  &::-webkit-scrollbar-thumb {
    background: #aaa;
    border-radius: 2px;
  }

  /* Handle on hover */
  &::-webkit-scrollbar-thumb:hover {
    background: #888;
  }
}
</style>
