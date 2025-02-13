<template>
    <div>
        <div class="d-flex justify-content-between align-items-center py-2">
            <div class="d-flex align-items-center" style="cursor: pointer;">
                <i class='bx bx-arrow-back text-success me-3 fs-6'></i>
                <a @click.prevent="$emit('back')"
                    class="title text-success text-decoration-none d-flex align-items-center">
                    <span class="fw-bold">{{ title }}</span>
                </a>
            </div>
            <div v-if="saveAble" class="d-flex gap-2">
                <button class="btn btn-outline-success" @click="$emit('refresh')">
                    <i class="fas fa-sync"></i> Đặt lại
                </button>
                <button class="btn btn-success" @click="$emit('save')">
                    <i class="fa fa-save"></i> Lưu lại
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

.d-flex.align-items-center a {
    display: flex;
    align-items: center;
}
</style>