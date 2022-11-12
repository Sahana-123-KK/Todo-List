import React, { useEffect, useState } from "react";
import ListItem from "../listitem/ListItem";
import "./list.css";
const List = ({ get }) => {
  const [todos, setTodos] = useState([]);
  const [addNew, setAddNew] = useState("");
  const handleChange = (e) => {
    setAddNew(e.target.value);
  };

  const addToList = () => {
    if (addNew.length !== 0) {
      setTodos([...todos, addNew]);
      setAddNew("");
    }
  };

  useEffect(() => {
    get(todos);
  }, [todos]);
  return (
    <div className="listflexxcol">
      <h1 className="heading">ToDo List✅</h1>
      <div className="listflexxrow">
        <input
          value={addNew}
          onChange={handleChange}
          type="text"
          placeholder="Enter your List"
          className="listinput"
        />
        <i onClick={addToList} className="fa-solid fa-circle-plus addbtn"></i>
      </div>
      {todos.length === 0 ? (
        <div className="message">Add Some To Display</div>
      ) : (
        todos?.map((item, ind) => {
          return <ListItem item={item} all={todos} change={setTodos} />;
        })
      )}
      {/* <ListItem /> */}
    </div>
  );
};

export default List;
