import React from "react";
import "./list.scss";

const List = props =>
  props.list.map(list => (
    <li className="listRow" key={list.id}>
      {/* <input type="checkbox" onClick={() => props.onCheck(list.id)} /> */}

      <span className={list.status === "yes" ? "yes" : "no"}>
        {list.description}
      </span>

      <a href="###" onClick={() => props.toCompleted(list.id)}>
        выполненно
      </a>
    </li>
  ));

export default List;
