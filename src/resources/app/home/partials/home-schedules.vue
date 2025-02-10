<template>
    <div class="container my-5">
        <div class="row justify-content-center">
            <div class="col-md-6">
                <div class="card shadow-lg p-4">
                    <h3 class="text-center mb-4">Book Now</h3>
                    <form>
                        <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="Your Name">
                        </div>
                        <div class="mb-3">
                            <label for="phone" class="form-label">Phone Number</label>
                            <input type="text" class="form-control" id="phone" placeholder="Phone Number">
                        </div>
                        <div class="mb-3">
                            <label for="email" class="form-label">Email</label>
                            <input type="email" class="form-control" id="email" placeholder="Email">
                        </div>
                        <div class="mb-3">
                            <label for="room" class="form-label">Type Room</label>
                            <select class="form-select" id="room">
                                <option value="VIP">VIP</option>
                                <option value="Standard">Standard</option>
                                <option value="Deluxe">Deluxe</option>
                            </select>
                        </div>
                        <div class="row">
                            <div class="col-md-6">
                                <label for="checkin" class="form-label">Check-In Date</label>
                                <input type="date" class="form-control" id="checkin">
                            </div>
                            <div class="col-md-6">
                                <label for="checkout" class="form-label">Check-Out Date</label>
                                <input type="date" class="form-control" id="checkout">
                            </div>
                        </div>
                        <button type="submit" class="btn btn-warning text-white w-100 mt-4">Book Now</button>
                    </form>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style>

</style>