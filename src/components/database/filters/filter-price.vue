<template>
    <div class="form-group">
        <label for="price" class="form-label">Price</label>
        <select id="price" v-model="selectedPrice" class="form-select">
            <option value="" disabled>Select Price</option>
            <option v-for="price in prices" :key="price" :value="price">
                ${{ price }}
            </option>
        </select>
    </div>
</template>

<script>
export default {
    name: "FilterPrice",
    data() {
        return {
            selectedPrice: "",
            prices: [10, 15, 20],
        };
    },
};
</script>

<style scoped>
.form-group {
    max-width: 210px;
}

.form-control {
    width: 100%;
    padding: 5px;
    border: 1px solid #ccc;
    border-radius: 4px;
}
</style>
