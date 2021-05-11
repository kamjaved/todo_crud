import React, { useState, useEffect } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const Home = () => {
  const [todos, setTodo] = useState([]);

  useEffect(() => {
    loadTodos();
  }, []);

  const loadTodos = async () => {
    const result = await axios.get("http://localhost:5000/todo/get");
    setTodo(result.data.reverse());
  };

  const deleteTodo = async (id) => {
    await axios.delete(`http://localhost:5000/todo/delete/${id}`);
    loadTodos();
  };

  return (
    <div className="container">
      <div className="py-4">
        <h1>Todo App</h1>
        <table className="table border shadow">
          <thead className="thead-dark">
            <tr>
              <th scope="col">Todo (Action)</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            {todos.map((item) => (
              <tr key={item._id}>
                <td>{item.todo}</td>
                <td>
                  <Link
                    className="btn btn-outline-primary mr-2"
                    to={`/todo/edit/${item._id}`}
                  >
                    Edit
                  </Link>
                  <Link
                    to="#"
                    className="btn btn-danger"
                    onClick={() => deleteTodo(item._id)}
                  >
                    Delete
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Home;
