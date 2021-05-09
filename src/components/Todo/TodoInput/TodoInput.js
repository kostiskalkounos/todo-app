import { useState } from "react";

import Button from "../../UI/Button/Button";
import "./TodoInput.css";

const TodoInput = (props) => {
  const [enteredValue, setEnteredValue] = useState("");

  const todoInputChangeHandler = (event) => {
    setEnteredValue(event.target.value);
  };

  const formSubmitHandler = (event) => {
    event.preventDefault();
    props.onAddItem(enteredValue);
  };

  return (
    <form onSubmit={formSubmitHandler}>
      <div className="form-control">
        <label>What are your plans for today?</label>
        <input type="text" onChange={todoInputChangeHandler} />
      </div>
      <Button type="submit">Add Item</Button>
    </form>
  );
};

export default TodoInput;
