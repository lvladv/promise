import React from "react";
import { RadioGroup, FormControlLabel } from "@material-ui/core";
import { RadioBtn } from "../../componentsStyled/OpenNewCard.style";

export const Category = ({ categoryList, category, categoryChange }) => {
  const handleChangeCategory = (e) => {
    const { value } = e.target;
    categoryChange(value);
  };

  return (
    <div>
      <RadioGroup
        name="category"
        value={category}
        onChange={handleChangeCategory}
      >
        {categoryList.map((item) => (
          <FormControlLabel
            key={item.name}
            value={String(item.id)}
            control={<RadioBtn />}
            label={item.name}
          />
        ))}
      </RadioGroup>
    </div>
  );
};
