export const getBook = (id: number) => {
  return fetch(`http://localhost:3001/api/book/${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const getAllBooks = () => {
  return fetch(`http://localhost:3001/api/book/`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};
