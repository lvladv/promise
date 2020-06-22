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
          style={{ border: `1.5px solid ${itemChangeCategory.color}` }}
        />
      </div>
      <RowBox>
        {colors.map((color) => (
          <ColorBox
            key={color}
            style={{
              background: color,
              borderRadius: itemChangeCategory.color === color ? "50%" : "5px",
              boxShadow:
                itemChangeCategory.color === color
                  ? "0px 0px 12px 1px #78909C"
                  : "none",
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
