<template>
  <div class="button-container">
    <b-button
      variant="success"
      class="add-btn"
      @click="createAction"
    >
      <i class="bx bx-plus" style="margin-right: 0.75rem"></i>
      Thêm mới
    </b-button>
  </div>
</template>

<script>
export default {
  name: "table-actions",
  props: {
    createAble: Boolean,
    createAction: {
      type: Function,
      default: () => {
        return false;
      },
    },
  },
};
</script>

<style scoped>
.header-table-content {
  display: flex;
  justify-content: space-between;
  padding: 1rem 1.5rem;
  align-items: center;
}

.header-table-content .info {
  font-weight: 500;
  font-size: 0.875rem;
  line-height: 1.5;
  color: #18a55b;
}

.header-table-content .button-container button.btn {
  transition: transform 0.1s ease;
  padding: 10px;
  margin: 0 0.5rem;
  font-size: 0.875rem;
  vertical-align: middle;
  box-sizing: border-box;
  border-radius: 5px;
}

.header-table-content .button-container button:hover {
  transform: translateY(4px) scale(1.05);
}

.header-table-content .button-container button.activeBtn {
  box-shadow: 1px 2px 8px #70bb7f !important;
}

.header-table-content .button-container {
  display: flex;
}

.header-table-content .button-container i.bx {
  font-size: 1rem;
}

.header-table-content .button-container .add-btn {
  background: #18a55b;
  color: #ffffff !important;
  display: flex;
  align-items: center;
}
</style>
