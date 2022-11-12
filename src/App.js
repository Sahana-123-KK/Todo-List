import { useState } from "react";
import "./App.css";
import List from "./mycomponents/List/List";
import ListItem from "./mycomponents/listitem/ListItem";

function App() {
  const [list, setList] = useState([]);

  const getList = (list) => {
    setList(list);
  };
  return (
    <div className={list.length >= 8 ? "listcontainerbig" : "listcontainer"}>
      {/* <ListItem/> */}
      <List get={getList} />
    </div>
  );
}

export default App;
