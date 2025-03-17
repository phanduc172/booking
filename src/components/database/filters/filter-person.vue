<template>
    <div class="position-relative">
        <div @click="toggleDropdown" class="cursor-pointer">
            <div>
                <label class="form-label fw-bold">Person</label>
                <i class='bx bx-chevron-down fs-5 ms-2'></i>
                <div class="card rounded-3 p-2">
                    {{ entry.adults }} Adult, {{ entry.children }} Children
                </div>
            </div>
        </div>

        <!-- Dropdown -->
        <div v-show="isDropdownOpen"
            class="position-absolute top-100 start-0 w-100 p-3 bg-white border border-secondary rounded shadow-lg mt-2 z-3">
            <div class="d-flex justify-content-between align-items-center mb-3">
                <div class="fw-bold text-dark">Select Guests</div>
                <i class="bx bx-x-circle text-muted cursor-pointer" @click="toggleDropdown"></i>
            </div>

            <!-- Adults -->
            <div class="mb-3">
                <div class="d-flex justify-content-between align-items-center mb-2">
                    <div class="text-dark">Adults</div>
                    <div class="d-flex align-items-center">
                        <button @click="changeGuests('adults', -1)" class="btn">
                            <i class="bx bx-minus"></i>
                        </button>
                        <span class="mx-2">{{ entry.adults }}</span>
                        <button @click="changeGuests('adults', 1)" class="btn">
                            <i class="bx bx-plus"></i>
                        </button>
                    </div>
                </div>

                <!-- Children -->
                <div class="d-flex justify-content-between align-items-center">
                    <div class="text-dark">Children</div>
                    <div class="d-flex align-items-center">
                        <button @click="changeGuests('children', -1)" class="btn">
                            <i class="bx bx-minus"></i>
                        </button>
                        <span class="mx-2">{{ entry.children }}</span>
                        <button @click="changeGuests('children', 1)" class="btn">
                            <i class="bx bx-plus"></i>
                        </button>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "FilterPerson",
    data() {
        return {
            entry: {
                adults: 1,
                children: 0,
            },
            isDropdownOpen: false,

        };
    },
    watch: {
        'entry': {
            handler(newValue) {
                this.$emit("update", newValue);
            },
            deep: true,
            immediate: true
        }
    },
    methods: {
        toggleDropdown() {
            this.isDropdownOpen = !this.isDropdownOpen;
            if (this.isDropdownOpen) {
                document.addEventListener("click", this.handleClickOutside);
            } else {
                document.removeEventListener("click", this.handleClickOutside);
            }
        },
        changeGuests(type, value) {
            if (type === "adults") {
                this.entry.adults = Math.max(1, this.entry.adults + value);
            } else if (type === "children") {
                this.entry.children = Math.max(0, this.entry.children + value);
            }
        },
        handleClickOutside(event) {
            if (!this.$el.contains(event.target)) {
                this.isDropdownOpen = false;
                document.removeEventListener("click", this.handleClickOutside);
            }
        }
    },
    beforeUnmount() {
        document.removeEventListener("click", this.handleClickOutside);
    }
};
</script>


<style scoped>
.card {
    height: 45px;
}

.cursor-pointer {
    cursor: pointer;
}
</style>
