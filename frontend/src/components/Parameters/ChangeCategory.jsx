import React from "react";
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
}) => {
  const Change = (e) => {
    const { value } = e.target;
    putNewItemCategory(value);
  };
  return (
    <div>
      <div>
        <InputCategory value={itemChangeCategory.name} onChange={Change} />
      </div>
      <RowBox>
        <ColorBox style={{ background: "red" }} />
        <ColorBox style={{ background: "pink" }} />
        <ColorBox style={{ background: "purple" }} />
        <ColorBox style={{ background: "blue" }} />
        <ColorBox style={{ background: "lightGreen" }} />
        <ColorBox style={{ background: "yellow" }} />
        <ColorBox style={{ background: "brown" }} />
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
