import React, { memo } from "react";
import { useMyContext } from "./context";

const CheckImmutable = () => {
  const { appData, dispatch } = useMyContext();

  // test 1
  const originObj = {
    employments: [
      {
        name: "fgu",
        salary: 120000,
        secondTest: { random: 111 },
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
  // Đây là lý do tại sao khi update whole state, whole state sẽ thay đổi
  // nếu update property inside state, nó sẽ kiểm tra whole object trước
  // sau đó kiểm tra property, nếu thay đổi nó sẽ thông báo để render
  console.log(
    "CheckImmutable - test2: spread operator people -> check whole element ",
    anotherPeople === people
  );
  console.log(
    "CheckImmutable - test2: spread operator people -> check first element ",
    anotherPeople[0] === people[0]
  );
  console.log(
    "CheckImmutable - test2: spread operator first object -> check nested object ",
    anotherPeople[0].secondTest === people[0].secondTest
  );
  return <p>Check Immutable</p>;
};

export default memo(CheckImmutable);
