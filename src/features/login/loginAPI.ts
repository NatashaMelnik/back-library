export const signIn = (body: any) => {
  return fetch(`http://localhost:3001/api/auth/login`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(body),
  }).then((res) => {
    if (res.status === 200) {
      const payload = res.json();
      return payload.then((p) => {
        localStorage.setItem("token", p.token);
        return p.user;
      });
    }
  });
};
