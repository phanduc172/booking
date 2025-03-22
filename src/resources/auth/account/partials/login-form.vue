<template>
	<div class="d-flex justify-content-center align-items-center">
		<div class="row w-100 shadow-lg rounded overflow-hidden vh-100">
			<div class="col-md-6 p-0 p-md-4 d-flex flex-column justify-content-center align-items-center">
				<div class="text-center">
					<h3 class="fw-bold text-warning">LOGIN</h3>
					<p class="text-muted">Login to the administration system...</p>
				</div>

				<b-form @submit.prevent="validateForm" class="w-75">
					<b-form-group class="mt-3">
						<label for="email" class="form-label ms-4">Account</label>
						<b-form-input id="email" type="email" v-model="email" placeholder="Enter email..."
							class="form-control rounded-pill ps-4">
						</b-form-input>
					</b-form-group>

					<div class="mt-3">
						<label for="password" class="form-label ms-4">Password</label>
						<div class="d-flex align-items-center border rounded-pill px-3 bg-white">
							<b-form-input id="password" :type="passwordFieldType" v-model="password"
								placeholder="Enter password..." class="form-control border-0 shadow-none" />
							<button type="button" @click="togglePasswordVisibility"
								class="border-0 ms-2 bg-transparent">
								<i :class="passwordFieldType === 'password' ? 'bx bx-show' : 'bx bx-hide'"
									class="fs-4 text-muted">
								</i>
							</button>
						</div>
					</div>

					<span v-if="errorMessage" class="text-danger d-block mt-2 text-center">
						{{ errorMessage }}
					</span>

					<b-button type="submit" variant="warning" class="w-100 rounded-pill shadow-sm text-white mt-4 p-2">
						Login
					</b-button>
				</b-form>

			</div>

			<div class="col-md-6 p-0 d-none d-md-block">
				<img src="https://storage.googleapis.com/a1aa/image/XJSq8g-AgOH8pR6mMvS7ljc7-4Gv5gTkz-KBqHwGTYA.jpg"
					class="img-fluid h-100 object-fit-cover" alt="People in a meeting">
			</div>
		</div>
	</div>
</template>

<script>
import { mapActions } from 'vuex';

export default {
	data() {
		return {
			email: '',
			password: '',
			passwordFieldType: 'password',
			errorMessage: ''
		};
	},
	methods: {
		...mapActions('auth', ['Login']),
		togglePasswordVisibility() {
			this.passwordFieldType = this.passwordFieldType === 'password' ? 'text' : 'password';
		},
		validateForm() {
			if (!this.validateEmail(this.email)) {
				this.errorMessage = 'Email không hợp lệ!';
			} else if (!this.validatePassword(this.password)) {
				this.errorMessage = 'Mật khẩu phải có ít nhất 6 ký tự!';
			} else {
				this.errorMessage = '';
				this.onSubmit();
			}
		},
		validateEmail(email) {
			const re = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
			return re.test(email);
		},
		validatePassword(password) {
			return password.length >= 6;
		},
		async onSubmit() {
			try {
				let body = {
					email: this.email,
					password: this.password
				};
				const response = await this.Login(body);
				if (response.code == 200) {
					localStorage.setItem('user', JSON.stringify(response.data));
					this.$swal.fire({
						icon: 'success',
						title: 'Đăng nhập thành công!',
						text: 'Chào mừng bạn quay trở lại.',
						timer: 1500,
						showConfirmButton: false
					});

					setTimeout(() => {
						this.$router.push('/dashboard');
					}, 1500);
				} else if (response.code == 401) {

					this.$swal.fire({
						icon: 'error',
						title: 'Đăng nhập thất bại!',
						text: response.message || 'Vui lòng kiểm tra lại thông tin đăng nhập.',
					});
				}
			} catch (error) {
				if (error.response.data.code == 401) {
					this.$swal.fire({
						icon: 'error',
						title: 'Đăng nhập thất bại!',
						text: error.response.data.message,
					})
				} else if (error.response.data.code == 403) {
					this.$swal.fire({
						icon: 'error',
						title: 'Đăng nhập thất bại!',
						text: error.response.data.message,
					})
				}
			}
		}

	}
};

</script>

<style scoped>
body {
	font-family: 'Roboto', sans-serif;
}

.form-control {
	height: 50px;
}

.form-control:focus {
	outline: none;
	box-shadow: none;
	border: 1px solid transparent;
}

.object-fit-cover {
	object-fit: cover;
}

.row {
	background: linear-gradient(135deg, rgba(242, 241, 255, 1) 3%, rgba(250, 255, 128, 1) 100%);
}

img {
	height: 100vh;
	width: 100%;
	object-fit: contain;
}

@media (max-width: 768px) {
	.vh-100 {
		height: auto !important;
	}

	.row {
		height: 100vh !important;
	}
}
</style>
