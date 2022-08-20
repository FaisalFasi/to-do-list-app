const GetData = (props) => {
  const postData = async () => {
    const response = await fetch("http://localhost:3500/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify(),
    });

    if (!response.ok) {
      throw new Error("sending data failed ");
    }
    const data = response.json;
    console.log(data);
  };
  return <></>;
};
export default GetData;
