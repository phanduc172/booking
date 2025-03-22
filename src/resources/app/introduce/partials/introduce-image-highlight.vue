<template>
    <div class="container-fluid home-image-highlight mb-4">
        <h3 class="text-center p-5 text-success fw-bold">Highlights</h3>
        <div class="row g-4">
            <div class="col-12 col-sm-6 col-lg-4">
                <div class="position-relative">
                    <img src="https://storage.googleapis.com/a1aa/image/5WB8L-CyB4bhUeHSq0SfKLUTCZ4WG3T71w2Ba9pibPg.jpg"
                        alt="A couple enjoying a luxurious experience on a balcony overlooking the sea"
                        class="img-fluid" />
                    <div class="overlay-text">Luxury Experience</div>
                </div>
            </div>

            <div class="col-12 col-sm-6 col-lg-4">
                <div class="position-relative">
                    <img src="https://storage.googleapis.com/a1aa/image/JoViAVsAawOWdzliY7F_G1ihPSMYHWjgnkb5rHeqNGY.jpg"
                        alt="A family enjoying a bike ride in a park" class="img-fluid" />
                    <div class="overlay-text">Family Vacation</div>
                </div>
            </div>

            <div class="col-12 col-lg-4">
                <div class="position-relative">
                    <img src="https://storage.googleapis.com/a1aa/image/NoqizRccTz544k5_La60B4xYdD7AaEUa01lQon8AWEU.jpg"
                        alt="A beautiful wedding setup on a golf course" class="img-fluid" />
                    <div class="overlay-text">Golf Course Wedding</div>
                </div>
            </div>

            <div class="col-12">
                <div class="position-relative">
                    <img src="https://storage.googleapis.com/a1aa/image/cNN5p9JBdmffC4CKXyWiqj3zwlyECWHYmn4GRemBZzs.jpg"
                        alt="A stunning view of a golf course surrounded by lush greenery"
                        class="img-fluid big-image" />
                    <div class="overlay-text">Golf Masterpiece</div>
                </div>
            </div>
        </div>
    </div>
</template>


<script>
import { mapActions } from 'vuex';

export default {
    name: "HomeImageHighlight",
    data() {
        return {
            entries: [],
        };
    },
    methods: {
        ...mapActions('room', ['GetListRoom']),
        async getData() {
            const response = await this.GetListRoom();
            if (response.code === 200) {
                this.entries = response.data;
            }
        }
    },
    created() {
        this.getData();
    }
};
</script>

<style scoped>
.container-fluid {
    padding: 0 20px;
}

.position-relative {
    position: relative;
}

.img-fluid {
    width: 100%;
    height: auto;
    object-fit: cover;
    border-radius: 8px;
}

.big-image {
    height: 400px;
}

.position-relative:hover .overlay-text {
    background: rgba(0, 128, 0, 0.9);
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
    transition: background 0.3s ease-in-out;
}

@media (max-width: 992px) {
    .big-image {
        height: 300px;
    }
}

@media (max-width: 768px) {
    .big-image {
        height: 250px;
    }

    .overlay-text {
        font-size: 0.9rem;
        padding: 8px;
    }
}

@media (max-width: 576px) {
    .big-image {
        height: 200px;
    }

    .overlay-text {
        font-size: 0.8rem;
        padding: 6px;
    }
}
</style>
