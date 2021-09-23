import React, { memo } from "react";
import { MyContext } from "./context";

const CheckImmutable = () => {
  const { appData, dispatch } = React.useContext(MyContext);

  // test 1
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
  console.log(
    "CheckImmutable - is changed when using object dot ",
    originObj === changedObj
  );

  // test 2 : using ...
  const people = [{ age: 11 }, { age: 15 }];
  const anotherPeople = [...people];
  console.log(
    "test2: speread operator people ",
    anotherPeople[0] === people[0]
  );
  console.log(
    "test2: speread operator first object inside people ",
    anotherPeople[0] === people[0]
  );
  return <p>Check Immutable</p>;
};

export default memo(CheckImmutable);
