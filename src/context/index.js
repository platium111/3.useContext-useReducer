import React, { useReducer } from "react";
import { appDataReducer, initialAppData } from "./reducer";

const MyContext = React.createContext();

const MyContextProvider = ({ children }) => {
  const [exampleData, setExampleData] = React.useState("No comment");

  const [appData, dispatch] = useReducer(appDataReducer, initialAppData);

  return (
    // in useContext(), we can use `const {appData}`
    <MyContext.Provider
      value={{ exampleData, appData, setExampleData, dispatch }}
    >
      {children}
    </MyContext.Provider>
  );
};

export { MyContext, MyContextProvider };
