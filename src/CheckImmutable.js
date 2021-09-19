import React, { memo } from "react";
import { MyContext } from "./context";

const CheckImmutable = () => {
  const { appData, dispatch } = React.useContext(MyContext);

  const originObj = {
    employments: [
      {
        name: "fgu",
        salary: 120000,
      },
    ],
    name: "Gill",
  };

  const changedObj = (originObj.name = "Ganny");
  console.log("CheckImmutable - is changed ", originObj === changedObj);
  return <p>Check Immutable</p>;
};

export default memo(CheckImmutable);
