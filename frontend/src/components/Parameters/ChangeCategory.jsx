import React from "react";
import { colors } from "./colors";
import {
  InputCategory,
  SmallButton,
  ColorBox,
  RowBox,
} from "../../componentsStyled/Parameters.style";

export const ChangeCategory = ({
  itemChangeCategory,
  putNewItemCategory,
  closeChangeCategory,
  changeItemCategory,
  putNewColorCategory,
}) => {
  const Change = (e) => {
    const { value } = e.target;
    putNewItemCategory(value);
  };
  return (
    <div>
      <div>
        <InputCategory
          value={itemChangeCategory.name}
          onChange={Change}
          style={{ color: itemChangeCategory.color }}
        />
      </div>
      <RowBox>
        {colors.map((color) => (
          <ColorBox
            key={color}
            style={{
              background: color,
              border:
                itemChangeCategory.color === color ? `1px solid black` : "none",
            }}
            onClick={() => putNewColorCategory(color)}
          />
        ))}
      </RowBox>
      <SmallButton
        onClick={() => {
          changeItemCategory(itemChangeCategory);
        
          closeChangeCategory();
        }}
      >
        Изменить
      </SmallButton>
      <SmallButton onClick={() => closeChangeCategory()}>Отмена</SmallButton>
    </div>
  );
};
