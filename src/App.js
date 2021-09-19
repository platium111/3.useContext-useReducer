import React from "react";
import "./App.css";
import { MyContext } from "./context";
import Parent from "./Parent";
import CheckImmutable from "./CheckImmutable";
import { TYPES } from "./context/reducer";
import CheckSecondUseContext from "./CheckSecondUseContext";

function App() {
  const { appData, dispatch } = React.useContext(MyContext);

  // [learn] remember it is array when useReducer
  // + Reducer renders one time with initial app state
  // + should not use useReducer here, because should have it in Context
  // const [appData, dispatch] = useReducer(appDataReducer, initialAppData);

  console.log("----------");
  // console.log("App loading with data from context", data.exampleData);
  console.log("data from reducer", appData);

  const changeAge = () => {
    dispatch({
      type: TYPES.CHANGE_AGE,
      data: appData.age + 1,
    });
  };

  const changeFollower = () => {
    dispatch({
      type: TYPES.CHANGE_FOLLOWER,
      data: appData.follower + 1,
    });
  };

  return (
    <div className="App">
      <p> App loading</p>
      <button onClick={changeAge}>Change age</button>
      <button onClick={changeFollower}>Change follower</button>
      {/* [learn]
          + if dont use memo() in Parent, when context changes, it renders children. Assumtion props in Parent not change
            If I use `age={appData.age}` obviously, it will render again
          + we don't pass `follower` inside Parent, so it'll not render when follower changes because of using memo() */}
      <Parent age={appData.age} />
      <CheckImmutable />
      {/* [learn] This component also uses useContext -> when data change, it will render again although I use memo() for props*/}
      <CheckSecondUseContext />
    </div>
  );
}

export default App;
