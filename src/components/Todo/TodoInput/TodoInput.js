import { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TodoInput.css";

const TodoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");
  const [isValid, setIsValid] = useState(true);

  const todoInputChangeHandler = (event) => {
    if (event.target.value.trim().length > 0) {
      setIsValid(true);
    }
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    if (enteredValue.trim().length === 0) {
      setIsValid(false);
      return;
    }
    props.onAddItem(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label style={{ color: !isValid ? "red" : "black" }}>
          What are your plans for today?
        </label>
        <input
          style={{
            borderColor: !isValid ? "red" : "black",
            background: !isValid ? "pink" : "transparent",
          }}
          type="text"
          onChange={todoInputChangeHandler}
        />
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
};

export default TodoInput;
