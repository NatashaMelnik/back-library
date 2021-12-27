const url = "http://localhost:3000/tests";

export const loadTests = async () => {
  try {
    const response = await fetch(url, {
      method: "GET",
      headers: {
        "Content-Type": "application/json",
      },
    });
    return await response.json();
  } catch (e) {
    console.log(e);
  }
};
