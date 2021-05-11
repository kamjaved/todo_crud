import React, { useState } from "react";
import axios from 'axios'
import { useHistory } from "react-router-dom";

const AddTodo = () => {
  let history = useHistory();
  const [todos, setTodo] = useState({
    todo: "",
  });

  const { todo } = todos;
  const onInputChange = e => {
    setTodo({ ...todos, [e.target.name]: e.target.value });
  };

  const onSubmit = async e => {
    e.preventDefault();
    await axios.post("http://localhost:5000/todo/add", todos);
    history.push("/");
  };
  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Add Your Action</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Enter Your Action"
              name="todo"
              value={todo}
              onChange={e => onInputChange(e)}
            />
          </div>
          <button className="btn btn-primary btn-block">Add</button>
        </form>
      </div>
    </div>
  );
};

export default AddTodo;
