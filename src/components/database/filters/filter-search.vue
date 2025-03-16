<template>
    <div class="search-box w-100">
        <label class="mb-1 font-weight-normal"> Search </label>
        <div class="d-flex justify-content-between">
            <div class="position-relative">
                <input type="text" class="form-control form-search" v-model="keyword" :placeholder="placeholder" />
                <span class="position-absolute" style="top: 55%; transform: translateY(-50%); right: 10px">
                    <i class="bx bx-search"></i>
                </span>
            </div>
            <button class="btn btn-outline-secondary" @click="refreshPage" title="Xóa tìm kiếm">
                <i class="bx bx-refresh fw-bold fs-5 mt-1"></i>
            </button>
        </div>
    </div>
</template>


<script>
import debounce from "debounce";

export default {
    name: "FilterSearch",
    data: function () {
        return {
            keyword: "",
            page: 1,
            debouncedSearch: debounce(this.runSearch, 500),
            loaded: false,
        };
    },
    props: {
        placeholder: {
            default: "Enter character",
        },
    },
    watch: {
        keyword: {
            handler: function () {
                if (this.loaded) this.debouncedSearch();
            },
        },
        $route(to) {
            this.keyword = to.query.search;
        },
    },
    methods: {
        runSearch() {
            let query = { ...this.$route.query };
            if (this.keyword) {
                query.search = this.keyword;
                query.page = this.page;
            } else {
                delete query.search;
            }

            if (this.$route.query["search"] != this.keyword) {
                this.$router.push({ name: this.$route.name, query: query });
            }
        },
        refreshPage() {
            this.$router.push({
                name: this.$route.name,
                query: { page: 1 }
            });
        }

    },
    created() {
        if (this.$route.query.search) this.keyword = this.$route.query.search;
        else this.keyword = this.pagination ? this.pagination.search : "";

        let self = this;
        setTimeout(function () {
            self.loaded = true;
        }, 1000);
    },
    mounted() { },
};
</script>

<style scoped>
.form-search {
    padding-right: 30px;
    font-weight: 400;
    background: #f0f0f0;
    height: 45px;
}
</style>
