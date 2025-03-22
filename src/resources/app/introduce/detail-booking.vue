<template>
    <div class="container-fluid p-3">
        <Loading v-if="isLoading" />
        <div v-else class="row">
            <div class="col-12 col-lg-9">
                <div class="p-3 card bg-white">
                    <div class="my-2">
                        <h5 class="fw-bold mb-3 d-flex align-items-center text-primary">
                            <i class="bx bx-file fs-4 text-primary me-2"></i> Describe
                        </h5>
                        <p class="text-justify">{{ entry.roomType.description }}</p>
                    </div>

                    <div class="my-2">
                        <h5 class="fw-bold my-3 d-flex align-items-center text-primary">
                            <i class="bx bx-list-check fs-4 text-primary me-2"></i> Utilities
                        </h5>
                        <div class="row g-3">
                            <div v-for="service in entry.facilities" :key="service.id" class="col-12 col-md-6">
                                <div class="service-card d-flex align-items-center gap-2 p-3 rounded-4 shadow-sm">
                                    <i :class="service.icon" class="service-icon fs-4 text-primary"></i>
                                    <span class="text-dark">{{ service.name }}</span>
                                </div>

                            </div>
                        </div>
                    </div>

                    <div class="my-2">
                        <h5 class="fw-bold my-3 d-flex align-items-center text-primary">
                            <i class="bx bx-list-check fs-4 text-primary me-2"></i> Image
                        </h5>
                        <div class="d-flex justify-content-center align-items-center">
                            <img :src="entry.image" alt="Main Image" class="rounded-5"
                                @click="openLightbox(0)" style="cursor: pointer;" width="500" height="300"/>
                        </div>
                        <vue-easy-lightbox :visible="showLightbox" :imgs="images" :index="selectedImageIndex"
                            @hide="showLightbox = false" />
                    </div>
                </div>
            </div>
            <div class="col-12 col-lg-3 shadow-sm card order-first order-md-last p-3">
                <div class="d-flex align-items-center justify-content-between flex-wrap">
                    <h4 class="text-primary fw-bold fs-4 m-0">
                        ${{ entry.price_per_night }}<span class="text-secondary fs-6">/night</span>
                    </h4>
                    <div class="px-3 py-2 bg-danger rounded text-center text-white fw-bold discount-badge">
                        {{ entry.discount }}% OFF
                    </div>
                </div>
                <hr>
                <h5 class="text-center fw-bold text-primary">Room Information</h5>
                <div class="mb-3 d-flex justify-content-between">
                    <label class="form-label fw-bold text-secondary">Room:</label>
                    <span class="text-primary fw-bold text-end">
                        {{ entry.name }}
                    </span>
                </div>
                <div class="mb-3 d-flex justify-content-between">
                    <label class="form-label fw-bold text-secondary">Guests:</label>
                    <span class="text-primary fw-bold text-end">
                        {{ entry.amount_adult }} Adult, {{ entry.amount_child }} Children
                    </span>
                </div>
                <div class="mb-3 d-flex justify-content-between">
                    <label class="form-label fw-bold text-secondary">Room Type:</label>
                    <span class="text-primary fw-bold text-end">
                        {{ entry.roomType.name }}
                    </span>
                </div>
                <div class="mb-3 d-flex justify-content-between">
                    <label class="form-label fw-bold text-secondary">Status:</label>
                    <span class="text-primary fw-bold text-end">
                        {{ entry.roomStatus.status_name }}
                    </span>
                </div>
                <hr />
                <customer-name v-model="customer" />
                <customer-phone v-model="customer" />
                <customer-email v-model="customer" />
                <customer-country v-model="customer" />
                <customer-passport v-model="customer" />
                <hr />
                <button class="book-now-btn w-100 mt-3" @click="bookingRoom">Book Now</button>
            </div>
        </div>
    </div>
</template>

<script>
import { mapActions, mapGetters } from 'vuex';
import VueEasyLightbox from 'vue-easy-lightbox';
import moment from 'moment';
import CustomerName from '../customer/partials/customer-name.vue';
import CustomerPhone from '../customer/partials/customer-phone.vue';
import CustomerEmail from '../customer/partials/customer-email.vue';
import CustomerCountry from '../customer/partials/customer-country.vue';
import CustomerPassport from '../customer/partials/customer-passport.vue';
import Loading from '@/components/loading.vue';


export default {
    name: "IntroduceBookingRoom",
    components: {
        VueEasyLightbox,
        CustomerName,
        CustomerPhone,
        CustomerEmail,
        CustomerCountry,
        CustomerPassport,
        Loading,
    },
    data() {
        return {
            isLoading: false,
            entry: {},
            customer: {
                name: '',
                phone: '',
                email: '',
                country: '',
                passport: ''
            },
            images: [
                "https://www.lagunalangco.com/wp-content/uploads/2024/09/Laguna-Golf-Lang-Co-Faldo-Signature-Design-2.jpg",
                "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg",
                "https://cdn-imgix.headout.com/media/images/c9db3cea62133b6a6bb70597326b4a34-388-dubai-img-worlds-of-adventure-tickets-01.jpg",
                "https://www.lagunalangco.com/wp-content/uploads/2023/09/khu-biet-thu-nghi-duong-banyan-tree-residences.jpg"
            ],
            mainImage: '',
            showLightbox: false,
            selectedImageIndex: 0,
        }
    },
    computed: {
        ...mapGetters("introduce", ["getDateRange"]),
    },
    methods: {
        ...mapActions('introduce', ['GetRoomBooking']),
        ...mapActions('customer', ['CreateCustomer']),
        ...mapActions('booking', ['CreateBooking']),
        async getEntry() {
            const response = await this.GetRoomBooking(this.$route.params.id)
            if (response.code === 200) {
                this.entry = response.data
            }
        },
        calculateNights(checkIn, checkOut) {
            if (!checkIn || !checkOut) return 0;

            const formatDate = (dateStr) => {
                const [day, month, year] = dateStr.split("-").map(Number);
                return new Date(year, month - 1, day);
            };

            const checkInDate = formatDate(checkIn);
            const checkOutDate = formatDate(checkOut);

            return Math.max(
                (checkOutDate - checkInDate) / (1000 * 60 * 60 * 24),
                0
            );
        },
        validateEntry() {
            const requiredFields = [
                { field: "name", message: "Name is required" },
                { field: "phone", message: "Phone number is required" },
                { field: "email", message: "Email is required" },
                { field: "country", message: "Country is required" },
                { field: "passport", message: "Passport number is required" },
            ];

            for (const { field, message } of requiredFields) {
                if (!this.customer[field]) {
                    this.$swal.fire({
                        icon: "error",
                        title: message,
                    });
                    return false;
                }
            }
            return true;
        },
        async bookingRoom() {
            if (!this.validateEntry()) return;
            this.isLoading = true;
            let customerData = {
                ...this.customer,
                room_id: this.entry.id,
            };
            const createCustomer = await this.CreateCustomer(customerData);
            let checkIn = this.getDateRange[0];
            let checkOut = this.getDateRange[1];
            let amountNight = this.calculateNights(checkIn, checkOut);
            let bookingData = {
                room_id: this.entry.id,
                customer_id: createCustomer.data.id,
                check_in: moment(checkIn, "DD-MM-YYYY").set({ hour: 14, minute: 0, second: 0 }).toISOString(),
                check_out: moment(checkOut, "DD-MM-YYYY").set({ hour: 12, minute: 0, second: 0 }).toISOString(),
                amount_night: amountNight,
                discount: null,
                customer_email: createCustomer.data.email
            };
            const createBooking = await this.CreateBooking(bookingData);
            if (createBooking.code === 201) {
                this.$swal.fire({
                    icon: "success",
                    title: "Booking successful!",
                    text: "You have successfully booked. Please check your email.",
                    confirmButtonText: "OK"
                }).then(() => {
                    this.$router.push({ name: "introduce.room" });
                    this.isLoading = false;
                });
            }
        },
    },
    created() {
        this.mainImage = this.images[0];
        this.getEntry();

    }
}
</script>

<style scoped>
.card {
    border-radius: 12px;
}

.service-icon {
    width: 24px;
    height: 24px;
}

.image-cover {
    width: 100%;
    height: 150px;
    object-fit: cover;
}

.image-cover-more {
    width: 100%;
    object-fit: cover;
    filter: brightness(50%);
    position: absolute;
    height: 150px;
}

.text-primary {
    color: var(--primary-color) !important;
}

.service-icon {
    font-size: 1.5rem;
    margin-right: 8px;
}

.service-card {
    border: 1px solid #ddd;
    transition: all 0.3s ease-in-out;
    cursor: pointer;
    padding: 8px 16px;
}

.service-card:hover {
    background: linear-gradient(285deg, #e3f2fd, #ffffff);
    transform: translateY(-3px);
    box-shadow: 0 5px 15px rgba(0, 0, 0, 0.1);
}

.b-tabs {
    background: #ffffff;
    border-radius: 10px;
    overflow: hidden;
}

.text-justify {
    text-align: justify;
}

.book-now-btn {
    background: linear-gradient(135deg, #1a9c99, #24d4cf);
    color: white;
    font-size: 16px;
    font-weight: bold;
    padding: 12px 24px;
    border: none;
    border-radius: 8px;
    cursor: pointer;
    transition: all 0.3s ease-in-out;
    box-shadow: 0px 4px 10px rgba(0, 0, 0, 0.2);
}

.book-now-btn:hover {
    background: linear-gradient(135deg, #188c89, #1ec9c4);
    transform: scale(1.05);
    box-shadow: 0px 6px 15px rgba(0, 0, 0, 0.3);
}

.book-now-btn:active {
    transform: scale(0.98);
}
</style>