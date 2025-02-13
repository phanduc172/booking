<template>
    <div class="home-image-highlight">
        <h3 class="text-center p-5 text-success fw-bold">Highlights</h3>
        <div class="row g-4">
            <div class="col-md-6 col-lg-4">
                <div class="position-relative">
                    <img src="https://storage.googleapis.com/a1aa/image/5WB8L-CyB4bhUeHSq0SfKLUTCZ4WG3T71w2Ba9pibPg.jpg"
                        alt="A couple enjoying a luxurious experience on a balcony overlooking the sea"
                        class="img-fluid" style="width: 400px; height: 300px;" />
                    <div class="overlay-text">Luxury Experience</div>
                </div>
            </div>

            <div class="col-md-6 col-lg-4">
                <div class="position-relative">
                    <img src="https://storage.googleapis.com/a1aa/image/JoViAVsAawOWdzliY7F_G1ihPSMYHWjgnkb5rHeqNGY.jpg"
                        alt="A family enjoying a bike ride in a park" class="img-fluid"
                        style="width: 400px; height: 300px;" />
                    <div class="overlay-text">Family Vacation</div>
                </div>
            </div>

            <div class="col-md-4 row-span-2 d-flex flex-column">
                <div class="position-relative">
                    <img src="https://storage.googleapis.com/a1aa/image/NoqizRccTz544k5_La60B4xYdD7AaEUa01lQon8AWEU.jpg"
                        alt="A beautiful wedding setup on a golf course" class="img-fluid"
                        style="width: 400px; height: 300px;" />
                    <div class="overlay-text">Golf Course Wedding</div>
                </div>
            </div>

            <div class="col-12">
                <div class="position-relative">
                    <img src="https://storage.googleapis.com/a1aa/image/cNN5p9JBdmffC4CKXyWiqj3zwlyECWHYmn4GRemBZzs.jpg"
                        alt="A stunning view of a golf course surrounded by lush greenery" class="img-fluid"
                        style="width: 1200px; height: 400px;" />
                    <div class="overlay-text">Golf Masterpiece</div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "HomeImageHighlight",
};
</script>

<style scoped>
.home-image-highlight {
    margin: 0 240px;
}

.position-relative {
    position: relative;
}

.overlay-text {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    background: rgba(0, 128, 0, 0.75);
    color: white;
    text-align: center;
    padding: 10px;
    font-size: 1rem;
}

img {
    object-fit: cover;
}
</style>
