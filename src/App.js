import { useState } from "react";

import TodoList from "./components/Todo/TodoList/TodoList";
import TodoInput from "./components/Todo/TodoInput/TodoInput";
import "./App.css";

const App = () => {
  const [todoItems, setTodoItems] = useState([
    { text: "Wait for neovim 0.5 to be released", id: "g1" },
    { text: "Configure treesitter", id: "g2" },
  ]);

  const addListHandler = (enteredText) => {
    setTodoItems((prevItems) => {
      const updatedList = [...prevItems];
      updatedList.unshift({ text: enteredText, id: Math.random().toString() });
      return updatedList;
    });
  };

  const deleteItemHandler = (itemId) => {
    setTodoItems((prevItems) => {
      const updatedList = prevItems.filter((item) => item.id !== itemId);
      return updatedList;
    });
  };

  let content = (
    <p style={{ textAlign: "center" }}>No items found. Maybe add one?</p>
  );

  if (todoItems.length > 0) {
    content = <TodoList items={todoItems} onDeleteItem={deleteItemHandler} />;
  }

  return (
    <div>
      <section id="todo-form">
        <TodoInput onAddItem={addListHandler} />
      </section>
      <section id="todos">{content}</section>
    </div>
  );
};

export default App;
