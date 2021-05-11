import React, { useState, useEffect } from "react";
import axios from "axios";
import { useHistory, useParams } from "react-router-dom";

const EditTodo = () => {
  let history = useHistory();
  const { id } = useParams();
  const [todos, setTodo] = useState({
    todo: "",
  });


  const { todo } = todos;
  const onInputChange = e => {
    setTodo({ ...todos, [e.target.name]: e.target.value });
  };

  useEffect(() => {
    loadTodos();

    //eslint-disable-next-line
  }, []);

  const onSubmit = async e => {
    e.preventDefault();
    await axios.put(`http://localhost:5000/todo/edit/${id}`, todos);
    history.push("/");
  };


  const loadTodos = async () => {
    const result = await axios.get(`http://localhost:5000/todo/get/${id}`);
    setTodo({ todo: result.data.todo });
  };


  return (
    <div className="container">
      <div className="w-75 mx-auto shadow p-5">
        <h2 className="text-center mb-4">Edit Action</h2>
        <form onSubmit={e => onSubmit(e)}>
          <div className="form-group">
            <input
              type="text"
              className="form-control form-control-lg"
              placeholder="Edit your Action"
              name="todo"
              value={todo}
              onChange={e => onInputChange(e)}
            />
          </div>


          <button className="btn btn-warning btn-block">Update</button>
        </form>
      </div>
    </div>
  );
};

export default EditTodo;
