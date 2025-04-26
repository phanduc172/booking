const EMAIL_REGEX = /^\w+(\.?\w+)*@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
const PHONE_REGEX = /^0[1-9]{1}[0-9]{1}[- .]?[0-9]{3}[- .]?[0-9]{4}$/;

export function formatDate(dateString) {
    const date = new Date(dateString);
    const formattedDate = date.toLocaleDateString("vi-VN", {
        day: "2-digit",
        month: "2-digit",
        year: "numeric"
    });
    const formattedTime = date.toLocaleTimeString("vi-VN", {
        hour: "2-digit",
        minute: "2-digit"
    });
    return `${formattedDate} ${formattedTime}`;
}

export function response(response, redirect) {
	const type = response.code === 200 ? 'success' : 'error'
	this.$swal({
		icon: type,
		type: type,
		title: response.message,
	})

	if (type === 'success') redirect()
}

export function formatEmail(email) {
    if (!email || typeof email !== "string") return null;

    const formattedEmail = email.trim().toLowerCase();
    return EMAIL_REGEX.test(formattedEmail) ? formattedEmail : null;
}

export function formatPhone(phone) {
    if (!phone || typeof phone !== "string") return null;

    const cleanedPhone = phone.replace(/[- .]/g, "");
    return PHONE_REGEX.test(cleanedPhone) ? cleanedPhone : null;
}


