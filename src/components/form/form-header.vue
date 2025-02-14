<template>
    <div>
        <div class="d-flex justify-content-between align-items-center py-2">
            <div class="d-flex align-items-center" style="cursor: pointer;" @click.prevent="$emit('back')">
                <i class='bx bx-arrow-back me-2 fs-6'></i>
                <a class="title text-decoration-none d-flex align-items-center">
                    <span class="fw-bold">{{ title }}</span>
                </a>
            </div>
            <div v-if="saveAble" class="d-flex gap-2">
                <button class="btn btn-outline-success d-flex align-items-center gap-1" @click="$emit('refresh')">
                    <i class='bx bx-sync fs-4'></i>
                    <span>Đặt lại</span>
                </button>
                <button class="btn btn-success d-flex align-items-center gap-1" @click="$emit('save')">
                    <i class='bx bxs-save fs-4'></i>
                    <span>Lưu lại</span>
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
    },
};
</script>

<style scoped>
.header {
    padding: 1rem 0;
}

.d-flex.align-items-center a, i {
    display: flex;
    align-items: center;
    color: var(--primary-color) !important
}
</style>