import React from "react";
import { useState } from "react";

const Aboutus = () => {

  const [addTodo, setAddTodo] = useState(false);
  const [todo, setTodo] = useState(false)

  const handleChange=(e)=>{
    setAddTodo(e.target.value)
  }
  const handleClick = ()=>{
    setTodo(addTodo)
  }

  return(
    <>
    <h1>
        <section>
          <div className="container">
            <div className="row card-body">
              <div className="col card mt-2">
              Todo App
                <div className="d-flex mt-3 ">    
                  <input onChange={handleChange} type="text" className="form-control w-25"/>
                  <button className="btn btn-success ms-2" onClick={handleClick}>+</button>
                </div>
                <ol className="mt-5">
                  <li className="h4">{todo}
                  <button className="btn btn-danger ms-3">Del</button>
                  <button className="btn btn-secondary ms-2">Edit</button>
                  </li>
                </ol>
              </div>
            </div>
          </div>
        </section>
    </h1>
    </>
  ) 
};
export default Aboutus;