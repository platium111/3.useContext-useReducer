import React, { memo } from "react";
import { MyContext } from "./context";
import { TYPES } from "./context/reducer";

const LoadAsynData = () => {
  const { appData, dispatch } = React.useContext(MyContext);
  console.log("LoadAsynData - Load Async data rendering");
  console.log("LoadAsynData - appdata inside load asyn data", appData);

  const handleLoadData = () => {
    fetch("https://jsonplaceholder.typicode.com/todos/1")
      .then(async (response) => {
        // [leanr] response is type of Response which has body, status, headers and json method
        // .json() return Promise
        console.log("real response", response);
        return response.json();
      })
      .then((json) => {
        console.log(json);
        dispatch({ type: TYPES.ADD_TODO, data: json });
      });
  };

  // [learn] with await, using 2 times as well, can't merge in one because at that time
  const handleLoadDataAsync = async () => {
    const response = await fetch(
      "https://jsonplaceholder.typicode.com/todos/1"
    );

    const jsonReponse = await response.json();
    console.log("handleClickUsingAwait response", jsonReponse);

    dispatch({ type: TYPES.ADD_TODO, data: jsonReponse });
  };

  // [learn] even change nested property inside object and object inside array, context data always change and render every components using it
  const handleChangeFirstTodo = () => {
    dispatch({ type: TYPES.TOGGLE_FIRST_TODO });
  };
  return (
    <div>
      <p>Load Async data</p>
      <button onClick={handleLoadDataAsync}>Load Data</button>
      <button onClick={handleChangeFirstTodo}>Change the first todo</button>
    </div>
  );
};

export default memo(LoadAsynData);
