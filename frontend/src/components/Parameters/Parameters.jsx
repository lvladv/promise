import React, { Component, Fragment } from "react";
import { connect } from "react-redux";
import {
  putNewCategory,
  putItemChangesCategory,
  putNewItemCategory,
  closeChangeCategory,
  changeItemCategory,
  deleteItemCategory,
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
import { Point } from "../../componentsStyled/Registration.style";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import { ChangeCategory } from "./ChangeCategory";
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
    } = this.props;

    console.log(categoryList);
    const openCategory = openChangeCategory ? (
      <ChangeCategory
        itemChangeCategory={itemChangeCategory}
        putNewItemCategory={putNewItemCategory}
        closeChangeCategory={closeChangeCategory}
        changeItemCategory={changeItemCategory}
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
          <InputCategory inputRef={this.inputCategory} />
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
          onClick={() => putNewCategory(this.inputCategory.current.value)}
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
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    putNewCategory: (name) => dispatch(putNewCategory(name)),
    closeChangeCategory: () => dispatch(closeChangeCategory()),
    putNewItemCategory: (value) => dispatch(putNewItemCategory(value)),
    changeItemCategory: (itemChangeCategory) =>
      dispatch(changeItemCategory(itemChangeCategory)),
    putItemChangesCategory: (itemChangeCategory) =>
      dispatch(putItemChangesCategory(itemChangeCategory)),
    deleteItemCategory: (itemChangeCategory) =>
      dispatch(deleteItemCategory(itemChangeCategory)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Parameters);
