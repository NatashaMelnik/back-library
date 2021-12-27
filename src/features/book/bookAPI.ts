export const getBook = (id: number) => {
  console.log("in fetch");
  return fetch(`http://localhost:3001/api/book/${id}`, {
    method: "GET",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const setReaded = (id: number, bookid: number) => {
  console.log("in fetch");
  return fetch(`http://localhost:3001/api/users/${id}/read/${bookid}`, {
    method: "get",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
};

export const setLiked = (id: number, bookid: number) =>
  fetch(`http://localhost:3001/api/users/${id}/like/${bookid}`, {
    method: "get",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });

export const setRecomended = (id: number, bookid: number) =>
  fetch(`http://localhost:3001/api/users/${id}/recomend/${bookid}`, {
    method: "get",
    mode: "cors",
    headers: {
      "Content-Type": "application/x-www-form-urlencoded",
      Authorization: "Bearer " + localStorage.getItem("token"),
    },
  });
