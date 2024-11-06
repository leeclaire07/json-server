import { useState } from "react";
import "./App.css";
import Card from "./Card";


const initTodos = [
  {
    todo: "리액트 배우기",
    time: 7,
    id: crypto.randomUUID(),
  },
  {
    todo: "프롭스 배우기",
    time: 8,
    id: crypto.randomUUID(),
  },
];
// 1, json-server를 실행시킨다.
// 2. json-server에 초기값으로 inittodo를 집어넣는다.
function App() {
  const [text, setText] = useState("");
  const [time, setTime] = useState();
  const [todos, setTodos] = useState(initTodos);
  const handleDelete = () => {
    setTodos([]);
  };
  const textChange = (e) => {
    setText(e.target.value);
    // console.log(text);
  };
  const timeChange = (e) => {
    setTime(e.target.value);
    // console.log(time);
  };
  const submit = () => {
    const newTodos = [
      { todo: text, time: time, id: crypto.randomUUID() },
      ...todos,
    ];
    setTodos(newTodos);
  };
  const onDelete = (id) => {
    setTodos(todos.filter((todos) => todos.id !== id));
  };

  return (
    <>
      <div>
        <h1>TO DO LIST</h1>
        <div>
          <input type="text" name="todo" onChange={textChange}></input>
          <input type="number" name="time" onChange={timeChange}></input>
          <button onClick={submit}>완성</button>
          <button onClick={handleDelete}>삭제</button>
        </div>
        {todos.map((todo) => {
          return <Card key={todo.id} todo={todo} onDelete={onDelete} />;
        })}
      </div>
    </>
  );
}

export default App;
