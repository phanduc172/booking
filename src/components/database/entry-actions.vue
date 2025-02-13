<template>
    <div class="text-center">
        <a v-if="sendAble" href="javascript: void(0);" v-b-tooltip.hover :title="`Tạo thông báo`" class="text-primary"
            @click.prevent="$emit('sendAction')">
            <i class='bx bxs-send send-rotate' ></i>
        </a>
        <a v-if="previewAble" href="javascript: void(0);" v-b-tooltip.hover :title="`Xem trước`" class="text-primary"
            @click.prevent="$emit('previewAction')">
            <i class='bx bx-notepad'></i>
        </a>
        <a v-if="viewAble" href="javascript: void(0);" v-b-tooltip.hover :title="`Chi tiết`" class="text-primary"
            @click.prevent="$emit('viewAction')">
            <i class="bx bx-right-arrow-circle"></i>
        </a>
        <a v-if="rateAble" href="javascript: void(0);" v-b-tooltip.hover :title="`Xem đánh giá`" class="text-secondary"
            @click.prevent="$emit('rateAction')">
            <i class="bx bx-poll"></i>
        </a>
        <a v-if="restoreAble" href="javascript: void(0);" v-b-tooltip.hover :title="`Khôi phục`" class="text-info"
            @click.prevent="$emit('restoreAction')"><i class="bx bx-analyse"></i></a>
        <a v-if="editAble" href="javascript: void(0);" v-b-tooltip.hover :title="`Sửa`" class="text-success"
            @click.prevent="$emit('editAction')">
            <i class="bx bx-edit"></i>
        </a>
        <a v-if="archivedAble" href="javascript: void(0);" v-b-tooltip.hover :title="`Lưu trữ`" class="text-danger"
            @click.prevent="$emit('archivedAction')"><i class="bx bx-box"></i></a>
        <a v-if="deleteAble" href="javascript: void(0);" v-b-tooltip.hover :title="`Xoá`" class="text-danger"
            @click.prevent="$emit('deleteAction')">
            <i class="bx bx-trash"></i>
        </a>
    </div>
</template>
 
<script>
export default {
    name: 'EntryActions',
    props: {
        previewAble: Boolean,//xem truoc
        editAble: Boolean, // chinh sua
        deleteAble: Boolean, // xoa
        archivedAble: Boolean, // luu tru
        viewAble: Boolean, // xem chi tiet
        restoreAble: Boolean, // khoi phuc
        rateAble: Boolean, // xem danh gia
        sendAble: Boolean 
    }
}
</script>

<style scoped>
i {
    font-size: 23px !important;
    padding: 3px;
}
.send-rotate {
    transform: translateY(-3px) rotate(-45deg);
}
</style>