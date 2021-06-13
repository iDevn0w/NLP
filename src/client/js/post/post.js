// function for get api data
export const postUrlToServer = async (url = "") => {
  const options = {
    method: "POST",
    credentials: "same-origin",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ data: url }),
  };
  const response = await fetch("http://localhost:5001/api/json", options);
  try {
    const data = await response.json();
    return data;
  } catch (error) {
    console.log(new Error(error));
  } finally {
    console.log("done");
  }
};
