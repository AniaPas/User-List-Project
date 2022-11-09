import React, { useState, useRef } from "react";
import Card from "../UI/Card";
import classes from "./AddUser.module.css";
import Button from "../UI/Button";
import ErrorModal from "../UI/ErrorModal";
import Wrapper from "../Helpers/Wrapper";

const AddUser = (props) => {
  const nameInputRef = useRef();
  const ageInputRef = useRef();
  const [error, setError] = useState();

  const addUserHandler = (event) => {
    event.preventDefault(addUserHandler);
    const enteredName = nameInputRef.current.value;
    const enteredAge = ageInputRef.current.value;

    if (enteredName.trim().length === 0 || enteredAge.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name or age (no empty values)",
      });
      return;
    }
    if (+enteredAge < 1) {
      setError({
        title: "Invalid age",
        message: "Please enter a age(0.)",
      });
      return;
    }
    props.onAddUser(enteredName, enteredAge); //We pass it to the App parent component
    nameInputRef.current.value = ""; //Please, use refs to manipulate DOM with caution, do not add any elements, do not change the classes. here it is acceptable, the state sollution is also fine.
    ageInputRef.current.value = "";
  };

  const errorHandler = () => {
    setError(null);
  };
  return (
    <Wrapper>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor='username'>Username</label>
          <input id='username' type='text' ref={nameInputRef} />
          <label htmlFor='age'>Age</label>
          <input id='age' type='text' ref={ageInputRef} />
          <Button type='submit'>Add user</Button>
        </form>
      </Card>
    </Wrapper>
  );
};

export default AddUser;
