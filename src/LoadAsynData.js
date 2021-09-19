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
  return (
    <div>
      <p>Load Async data</p>
      <button onClick={handleClick}>Load Data</button>
    </div>
  );
};

export default memo(LoadAsynData);
