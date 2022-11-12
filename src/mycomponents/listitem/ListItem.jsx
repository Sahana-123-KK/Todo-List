import React from "react";
import "./listitem.css";
const ListItem = ({ item, all, change }) => {
  const deleteItem = () => {
    change(() => {
      return all.filter((no, ind) => {
        return no !== item;
      });
    });
  };
  return (
    <div className="todoflexxrow">
      <span>{item} </span>
      <i onClick={deleteItem} class="fa-solid fa-trash-can delbtn"></i>
    </div>
  );
};

export default ListItem;
