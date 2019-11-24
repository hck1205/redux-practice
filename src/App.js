import React from "react";
import CounterContainer from "./containers/CounterContainer";
import TodoList from "./components/TodoList";
import TodoInsert from "./components/TodoInsert";

function App() {
  return (
    <div>
      <CounterContainer />
      <TodoInsert />
      <TodoList />
    </div>
  );
}

export default App;
