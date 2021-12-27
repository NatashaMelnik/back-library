export const postTest = (test: any) => {
	return fetch(`http://localhost:3001/api/tests/create`, {
		method: "POST",
		headers: {
			"Content-Type": "application/json",
		},
		body: JSON.stringify(test),
	}).then((res) => {
		if (res.status === 200) {
			const payload = res.json();
			return payload.then((res_test) => {
                return res_test
			});
		}
	});
};
