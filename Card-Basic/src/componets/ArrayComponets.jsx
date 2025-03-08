import { useState } from "react";
// const users = [
//   { name: "Jitixa", age: 30 },
//   { name: "ravi", age: 30 },
//   { name: "punita", age: 28 },
//   { name: "aayushi", age: 26 },
//   { name: "rutul", age: 27 },
// ];
//Derived State
export const ArrayComponets = () => {
  const [users, setUsers] = useState([
    { name: "Jitixa", age: 30 },
    { name: "ravi", age: 30 },
    { name: "punita", age: 28 },
    { name: "aayushi", age: 26 },
    { name: "rutul", age: 27 },
  ]);
  const userCount = users.length;
  const averageAge = Math.round(
    users.reduce((accum, currElement) => accum + currElement.age, 0) / userCount
  );
  return (
    <div className="main-div">
      <h1>Users List</h1>
      <ul>
        {users.map((currElement, index) => {
          return (
            <li key={index}>
              Name : {currElement.name} - Age : {currElement.age} year Old
            </li>
          );
        })}
        <li
          style={{ textAlign: "center", fontWeight: "bolder", padding: "2rem" }}
        >
          Total Users: {userCount}
        </li>
        <li
          style={{ textAlign: "center", fontWeight: "bolder", padding: "2rem" }}
        >
          Avarage Age : {averageAge}
        </li>
      </ul>
    </div>
  );
};
