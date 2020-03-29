import React from "react";
import "./perfom.scss";
const Perfom = ({ completedList }) => {
  return (
    <section className="perf">
      <h3> Выполненно </h3>
      <ul>
      {completedList.map(item => (
        <li key={item.id}>
          {item.description}
        </li>
      ))}
      </ul>
    </section>
  );
};

export default Perfom;
