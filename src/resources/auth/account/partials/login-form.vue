<template>
	<div class="d-flex justify-content-center align-items-center">
		<div class="row w-100 shadow-lg rounded overflow-hidden vh-100">
			<div class="col-md-6 p-0 p-md-4 d-flex flex-column justify-content-center align-items-center">
				<div class="text-center">
					<h1 class="h4 fw-bold text-success">ĐĂNG NHẬP</h1>
					<p class="text-muted">Đăng nhập hệ thống quản trị...</p>
				</div>

				<b-form @submit.prevent="validateForm" class="w-75">
					<b-form-group class="mt-3">
						<label for="email" class="form-label ms-4">Tài khoản</label>
						<b-form-input id="email" type="email" v-model="email" placeholder="Nhập email"
							class="form-control rounded-pill ps-4">
						</b-form-input>
					</b-form-group>

					<div class="mt-3 position-relative">
						<label for="password" class="form-label ms-4">Mật khẩu</label>
						<b-form-input id="password" :type="passwordFieldType" v-model="password"
							placeholder="Nhập mật khẩu" class="form-control rounded-pill mt-1 ps-4">
						</b-form-input>
						<button type="button" @click="togglePasswordVisibility"
							class="border-0 bg-transparent position-absolute end-0 top-50 translate-middle-y me-3">
							<i :class="passwordFieldType === 'password' ? 'bx bx-show' : 'bx bx-hide'"
								class="fs-4 text-muted">
							</i>
						</button>
					</div>

					<span v-if="errorMessage" class="text-danger d-block mt-2 text-center">
						{{ errorMessage }}
					</span>

					<b-button type="submit" variant="warning" class="w-100 rounded-pill shadow-sm text-white mt-4 p-2">
						Đăng nhập
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
		onSubmit() {
			// Xử lý đăng nhập
			alert('Đăng nhập thành công!');
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
