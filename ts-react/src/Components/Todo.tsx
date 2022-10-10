import { count } from "console";
import React, { useState } from "react";
import FilterButton from "./FilterButton";

type IData = {
  desc: string;
  isDone: boolean;
};

const todoList = [
  {
    desc: "meeting with john",
    isDone: false,
  },
  {
    desc: "chores",
    isDone: false,
  },
  {
    desc: "cooking",
    isDone: false,
  },
  {
    desc: "read a book",
    isDone: false,
  },
];

function Todo() {
  const [data, setData] = useState<IData[]>(todoList);
  const [task, setTask] = useState<string>("");
  const [isChecked, setIsChecked] = useState(false);

  const handleFilterChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setIsChecked(e.target.checked);
  };

  const handleChange = (i: number) => {
    let todoData = [...data];
    todoData[i].isDone = !todoData[i].isDone;
    setData(todoData);
  };

  const handleEditChange = (e: React.MouseEvent<HTMLButtonElement, MouseEvent>) => {
console.log(e.target)
  }

  const handleDltChange = () => {

  }

  const displayTodo = (status: boolean) => {
    return data.map((res, i) =>
      res.isDone === status ? (
        <tr key={i}>
          <td>{res.desc}</td>
          <td>
            <input
              type="checkbox"
              checked={isChecked}
              onChange={() => handleChange(i)}
            />
          </td>
          <td>
            <button onClick={(e)=>handleEditChange(e)}>Edit</button>
            <button onClick={handleDltChange}>Delete</button>
          </td>
        </tr>
      ) : (
        ""
      )
    );
  };

  const addTodo = () => {
    let foundTask = data.find((todo) => todo.desc === task);
    if (!foundTask) {
      setData([...data, { desc: task, isDone: false }]);
      console.log(data);
    } else {
      alert("Desc already existed");
    }
  };

  return (
    <div>
      <h2>Rama's Todo List</h2>
      <h3>{isChecked ? "Completed" : "Remaining"}</h3>
      <p>
        <input type="text" onChange={(e) => setTask(e.target.value)} />
        <button onClick={addTodo}>Add Todo</button>
      </p>

      <table border={1}>
        <thead>
          <tr>
            <th>Description</th>
            <th>isDone</th>
            <th>Actions</th>
          </tr>
        </thead>
        <tbody>{isChecked ? displayTodo(true) : displayTodo(false)}</tbody>
      </table>
      <br />
      <FilterButton
        handleFilterChange={handleFilterChange}
        isChecked={isChecked}
      />
    </div>
  );
}

export default Todo;
