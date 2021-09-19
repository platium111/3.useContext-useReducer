import React, { memo } from "react";
import { MyContext } from "./context";

const CheckSecondUseContext = () => {
  const { appData, dispatch } = React.useContext(MyContext);

  console.log("CheckSecondUseContext - rendering", appData);

  return <p>Check Second Context Using</p>;
};

export default memo(CheckSecondUseContext);
