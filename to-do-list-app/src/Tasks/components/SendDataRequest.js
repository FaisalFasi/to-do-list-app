const SendDataRequest = (props) => {
  const postRequest = async (task, id) => {
    const postData = await fetch("http://localhost:3500/tasks", {
      method: "POST",
      headers: { "Content-type": "application/json" },
      body: JSON.stringify({ task: task, id: id }),
    });

    if (!postData.ok) {
      throw new Error("sending data failed ");
    }
    return <> [task, id]</>;
  };

  const fetchRequest = async () => {
    const fetchData = await fetch("http://localhost:3500/tasks");

    if (!fetchData.ok) {
      throw new Error("sending data failed ");
    }
    const data = fetchData.json();
    return data;
  };

  const deleteDataByID = async (id) => {
    try {
      const response = await fetch("http://localhost:3500/tasks/" + id, {
        method: "DELETE",
      });
      if (!response.ok) {
        throw new Error("sending data failed ");
      }
      // const data = await response.json();

      // dispatch(inputActions.addTask(data));
    } catch (error) {
      console.log(error);
    }
  };

  const updateTaskByID = async (id, input) => {
    const response = await fetch("http://localhost:3500/tasks/" + id, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify(input),
    });
    const data = await response.json();
    console.log("DATA CAME:", data);
    return data;
  };
};

export default SendDataRequest;
