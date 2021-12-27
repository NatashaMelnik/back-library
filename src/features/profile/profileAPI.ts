export const getProfile = (email: string) =>
  fetch(`http://localhost:3001/api/users/profile/${email}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
