<template>
  <div>
    <div class="d-flex justify-content-between align-items-center py-2">
      <div class="d-flex align-items-center" style="cursor: pointer" @click.prevent="$emit('back')">
        <i class="bx bx-arrow-back me-2 fs-6"></i>
        <a class="title text-decoration-none d-flex align-items-center">
          <span class="text-title fw-bold">{{ title }}</span>
        </a>
      </div>
      <div v-if="saveAble" class="d-flex gap-2">
        <button class="btn btn-outline-primary d-flex align-items-center gap-1" @click="$emit('refresh')">
          <i class="bx bx-sync fs-4"></i>
          <span>Reset</span>
        </button>
        <button class="btn btn-primary d-flex align-items-center gap-1" @click="$emit('save')">
          <i class="bx bxs-save fs-4"></i>
          <span>Save</span>
        </button>
      </div>
      <div v-if="confirmAble" class="d-flex gap-2">
        <button class="btn btn-outline-danger d-flex align-items-center gap-1" @click="$emit('refresh')">
          <i class="bx bx-sync fs-4"></i>
          <span>Cancel</span>
        </button>
        <button class="btn btn-primary d-flex align-items-center gap-1" @click="$emit('confirm')">
          <i class="bx bx-check fs-4"></i>
          <span>Confirm booking</span>
        </button>
      </div>
    </div>
    <hr class="my-3" />
  </div>
</template>

<script>
export default {
  props: {
    title: {
      type: String,
      required: true,
    },
    saveAble: {
      type: Boolean,
      default: true,
    },
    confirmAble: {
      type: Boolean,
      default: true,
    },
  },
};
</script>

<style scoped>
.header {
  padding: 1rem 0;
}

.d-flex.align-items-center a,
i {
  display: flex;
  align-items: center;
}

.d-flex.align-items-center .text-title {
  color: var(--primary-color) !important;
}

.btn-primary {
  background-color: var(--primary-color);
  border-color: var(--primary-color);
}

.btn-primary:hover {
  background-color: #199492;
  border-color: #199492;
}

.btn-primary i {
  color: white !important;
}

.btn-outline-primary {
  border-color: var(--primary-color);
  color: var(--primary-color);
}

.btn-outline-primary i,
.btn-outline-primary span {
  color: var(--primary-color);
}

.btn-outline-primary:hover {
  background: var(--primary-color) !important;
  color: white !important;
}

.btn-outline-primary:hover i,
.btn-outline-primary:hover span {
  color: white !important;
}

.btn-outline-danger:hover i {
  color: white !important
}
</style>
