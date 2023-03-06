import { useState } from "react";
import React from "react";

function TodoList() {
  const [toDo, setTodo] = useState("");
  const [toDos, setTodos] = useState([]);
  const onChange = (event) => setTodo(event.target.value);
  const onSubmit = (event) => {
    event.preventDefault();
    if (toDo === "") return;
    setTodos((currentArray) => [toDo, ...currentArray]);
    setTodo("");
  };
  // setTodo((["bye bye", "hello"]) => ["hello2", ...[]]);
  // setTodos(currentArray => [toDo, ...);

  //   setTodos((currentArray) => [toDo, ...currentArray]);
  //   setTodo("");

  const deleteClick = (event) => {
    const targetItem = event.target.id;
    setTodos((currentArray) =>
      currentArray.filter((item) => {
        return item !== targetItem;
      })
    );
  };
  console.log(toDos);
  return (
    <div>
      <h1>My To Do List ({toDos.length})</h1>
      <form onSubmit={onSubmit}>
        <input
          onChange={onChange}
          value={toDo}
          type="text"
          placeholder="White your to do.."
        />
        <button>Add To Do</button>
      </form>
      <hr />
      {/* <ul>
        {toDos.map((item, index) => (
          <li key={index}>{item}</li>
        ))}
      </ul> */}
      {toDos.map((item, index) => (
        <div key={index}>
          <li>{item}</li>
          <button id={item} onClick={deleteClick}>
            x
          </button>
        </div>
      ))}
    </div>
  );
}

export default TodoList;
