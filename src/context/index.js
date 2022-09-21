import React, { useReducer } from "react";
import { appDataReducer, initialAppData } from "./reducer";

export const MyContext = React.createContext();

export const MyContextProvider = ({ children }) => {
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

export const useMyContext = () => {
  const { appData, dispatch } = React.useContext(MyContext);
  return { appData, dispatch };
};
