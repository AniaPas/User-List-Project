import React from "react";
import AddUser from "./components/Users/AddUser";
import UserList from "./components/Users/UserList";
import { useState } from "react";
import uniqid from "uniqid";
function App() {
  const [userList, setUserList] = useState([]);
  const addUserHaldler = (userName, userAge) => {
    //As parameterrs we add what we would like to receive from the child
    setUserList((prevUserList) => {
      return [...prevUserList, { id: uniqid(), name: userName, age: userAge }];
    });
  };
  return (
    <div>
      <AddUser onAddUser={addUserHaldler} />
      <UserList users={userList} />
    </div>
  );
}

export default App;
