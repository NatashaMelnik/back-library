export const getTest = (uuid: string) => {
	return fetch(`http://localhost:3001/api/test/${uuid}`, {
		method: "GET",
		mode: "cors",
		headers: {
			"Content-Type": "application/x-www-form-urlencoded",
			Authorization: "Bearer " + localStorage.getItem("token"),
		},
	});
};
