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


