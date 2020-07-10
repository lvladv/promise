import React from "react";
import { ExpendedBox } from "./../../componentsStyled/ExpendedCategory.style";

export const ExpendedCategory = ({ category, categoryList }) => {
  const backCategory = () => {
    let color = "";
    categoryList.map((categoryItem) => {
      if (+categoryItem.id === +category) {
        color = categoryItem.color;
      }
    });
    return color;
  };

  const getNameCategory = () => {
    let name = "";
    categoryList.map((categoryItem) => {
      if (+category === 1) {
        name = "Без категории";
      } else if (+categoryItem.id === +category) {
        name = categoryItem.name;
      }
    });
    return name;
  };

  return (
    <ExpendedBox style={{ background: backCategory() }}>
      {getNameCategory()}
    </ExpendedBox>
  );
};
