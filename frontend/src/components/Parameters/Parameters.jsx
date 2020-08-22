import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import { ChangeCategory } from "./ChangeCategory";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { colors } from "./colors";
import { Point } from "../../componentsStyled/Registration.style";
import {
  putNewCategory,
  putItemChangesCategory,
  putNewItemCategory,
  closeChangeCategory,
  changeItemCategory,
  deleteItemCategory,
  putSelectCategoryColor,
  putNewColorCategory,
} from "./../../store/category/action";
import {
  ParamContainer,
  InputCategory,
  SmallButton,
  ColorBox,
  RowBox,
  IconBlock,
  PointCategory,
  TitlePoint,
} from "../../componentsStyled/Parameters.style";

class Parameters extends Component {
  inputCategory = React.createRef();
  render() {
    const {
      putNewCategory,
      categoryList,
      putItemChangesCategory,
      itemChangeCategory,
      openChangeCategory,
      closeChangeCategory,
      putNewItemCategory,
      changeItemCategory,
      deleteItemCategory,
      putSelectCategoryColor,
      selectCategoryColor,
      putNewColorCategory,
    } = this.props;

    const openCategory = openChangeCategory ? (
      <ChangeCategory
        itemChangeCategory={itemChangeCategory}
        putNewItemCategory={putNewItemCategory}
        closeChangeCategory={closeChangeCategory}
        changeItemCategory={changeItemCategory}
        putNewColorCategory={putNewColorCategory}
      />
    ) : null;

    return (
      <ParamContainer>
        <Point>Настройки</Point>
        <TitlePoint>
          <h3>Категории</h3>
        </TitlePoint>
        <div>
          {categoryList.map((item) => (
            <Fragment key={item.id}>
              <RowBox>
                <PointCategory>{item.name} </PointCategory>
                <IconBlock onClick={() => deleteItemCategory(item)}>
                  <DeleteIcon />
                </IconBlock>
                <IconBlock onClick={() => putItemChangesCategory(item)}>
                  <EditIcon />
                </IconBlock>
              </RowBox>
              {itemChangeCategory.id === item.id ? openCategory : null}
            </Fragment>
          ))}
        </div>
        <div>
          <InputCategory
            inputRef={this.inputCategory}
            style={{ border: `1.5px solid ${selectCategoryColor}` }}
          />
        </div>
        <RowBox>
          {colors.map((color) => (
            <ColorBox
              key={color}
              style={{
                background: color,
                borderRadius: selectCategoryColor === color ? "50%" : "5px",
                boxShadow:
                  selectCategoryColor === color
                    ? "0px 0px 12px 1px #78909C"
                    : "none",
              }}
              onClick={() => putSelectCategoryColor(color)}
            />
          ))}
        </RowBox>
        <SmallButton
          onClick={() =>
            putNewCategory(
              this.inputCategory.current.value,
              selectCategoryColor
            )
          }
        >
          Добавить
        </SmallButton>
      </ParamContainer>
    );
  }
}

const mapStateToprops = (store) => {
  return {
    newCategory: store.newCardReducer.newCategory,
    categoryList: store.categoryListReducer.categoryList,
    itemChangeCategory: store.categoryListReducer.itemChangeCategory,
    openChangeCategory: store.categoryListReducer.openChangeCategory,
    selectCategoryColor: store.categoryListReducer.selectCategoryColor,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    putNewCategory: (name, color) => dispatch(putNewCategory(name, color)),
    putSelectCategoryColor: (color) => dispatch(putSelectCategoryColor(color)),
    closeChangeCategory: () => dispatch(closeChangeCategory()),
    putNewItemCategory: (value) => dispatch(putNewItemCategory(value)),
    putNewColorCategory: (color) => dispatch(putNewColorCategory(color)),
    changeItemCategory: (itemChangeCategory) =>
      dispatch(changeItemCategory(itemChangeCategory)),
    putItemChangesCategory: (itemChangeCategory) =>
      dispatch(putItemChangesCategory(itemChangeCategory)),
    deleteItemCategory: (itemChangeCategory) =>
      dispatch(deleteItemCategory(itemChangeCategory)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Parameters);
