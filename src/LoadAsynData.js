import React, { memo } from "react";
import { MyContext } from "./context";
import { TYPES } from "./context/reducer";

const LoadAsynData = () => {
  const { appData, dispatch } = React.useContext(MyContext);
  console.log("LoadAsynData - Load Async data rendering");
  console.log("LoadAsynData - appdata inside load asyn data", appData);

  const handleClick = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then((response) => response.json())
      .then((json) => {
        console.log(json);
        dispatch({ type: TYPES.ADD_TODO, data: json });
      });
  };

  // [learn] even change nested property inside object and object inside array, context data always change and render every components using it
  const handleChangeFirstTodo = () => {
    dispatch({ type: TYPES.TOGGLE_FIRST_TODO });
  };
  return (
    <div>
      <p>Load Async data</p>
      <button onClick={handleClick}>Load Data</button>
      <button onClick={handleChangeFirstTodo}>Change the first todo</button>
    </div>
  );
};

export default memo(LoadAsynData);
