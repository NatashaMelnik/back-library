export const CreateUser = (body: any) => {
	return fetch("http://localhost:3001/api/auth/create", {
		headers: { "Content-Type": "application/json" },
		body: JSON.stringify(body),
		mode: "cors",
		method: "POST",
	});
};
