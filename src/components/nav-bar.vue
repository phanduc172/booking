<template>
    <nav class="navbar navbar-expand-lg navbar-light bg-white shadow-sm fixed-top">
        <button class="btn ms-3" @click="$emit('toggle-sidebar')">
            <font-awesome-icon :icon="['fas', 'bars']" size="lg" />
        </button>
        <div class="container">
            <a class="navbar-brand d-flex align-items-center" href="#">
                <img src="https://storage.googleapis.com/a1aa/image/acjGlEnUhQ3QtT_F6ZXqxjMQGxIieGEoitiNXTKEFnA.jpg"
                    height="50" width="50" alt="Homie Hotel Logo" />
                <span class="ms-2 fw-bold text-orange">HOMIE HOTEL</span>
            </a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navMenu">
                <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navMenu">
                <ul class="navbar-nav ms-auto">
                    <li class="nav-item"><a class="nav-link" href="#">Home</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">About</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Services</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Rooms</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Blog</a></li>
                    <li class="nav-item"><a class="nav-link" href="#">Contact</a></li>
                </ul>
                <a href="#" class="btn btn-warning text-white ms-3">Book Now</a>
            </div>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'NavBar',
    methods: {
        toggleRightBar() {
            this.$emit('toggle-sidebar');
        }
    }
};
</script>

<style scoped>
.navbar {
    height: 75px;
}
</style>
