import React from "react";
import { useState } from "react";

const Aboutus = () => {
  const [addTodo, setAddTodo] = useState("");
  const [todo, setTodo] = useState([]);

  const handleChange = (e) => {
    setAddTodo(e.target.value);
  };

  const handleClick = () => {
    setTodo((oldItems) => {
      return [...oldItems, addTodo];
    });
    setAddTodo("");
    
  };

  const deleteitem = (index) => {
    let rows = [...todo];
    rows.splice(index, 1);
    setTodo(rows);
  };

  return (
    <>
      <h1>
        <section>
          <div className="container">
            <div className="row card-body">
              <div className="col card mt-2">
                Todo App
                <div className="d-flex mt-3 ">
                  <input
                    onChange={handleChange}
                    value={addTodo}
                    type="text"
                    className="form-control w-25"
                  />
                  <button
                    className="btn btn-success ms-2"
                    onClick={handleClick}
                    disabled={!addTodo}
                  >
                    +
                  </button>
                </div>
                <ol className="mt-5 ps-0">
                  {todo.map((item, index) => {
                    return (
                      <li className="h4 w-50 card p-2"  key={index}>
                        <p className="ms-3">{item}</p>
                        <div>
                          <button
                            className="btn btn-danger ms-3"
                            onClick={() => deleteitem(index)}
                          >
                            Del
                          </button>
                          <button className="btn btn-secondary ms-2">
                            Edit
                          </button>
                        </div>
                      </li>
                    );
                  })}
                </ol>
              </div>
            </div>
          </div>
        </section>
      </h1>
    </>
  );
};
export default Aboutus;
