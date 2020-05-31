import React, { Component } from "react";
import { connect } from "react-redux";
import { clickCategory, clickImportence } from "./../../store/menu/action";
import { openNewCard } from "../../store/openNewCard/action";
import { filterStatusList, newList } from "../../store/list/action";
import {
  MenuContainer,
  ListBox,
  Point,
  TitlePoint,
} from "./../../componentsStyled/Menu.style";

class Menu extends Component {
  render() {
    const {
      clickCategory,
      clickImportence,
      isOpenCategory,
      isOpenImportance,
      categoryList,
      openNewCard,
      filterStatusList,
    } = this.props;
    console.log(isOpenImportance);
    return (
      <>
        <MenuContainer>
          <section>
            <ListBox>
              <Point
                onClick={() => {
                  openNewCard();
                }}
              >
                Добавить новую запись
              </Point>
              <Point>Настройки</Point>
            </ListBox>
            <ListBox>
              <Point onClick={() => newList()}>Полный список</Point>
              <Point
                onClick={() => {
                  filterStatusList("N");
                }}
              >
                Не выполненно
              </Point>
              <Point
                onClick={() => {
                  filterStatusList("Y");
                }}
              >
                Выполненно
              </Point>
            </ListBox>
            <ListBox>
              <TitlePoint onClick={() => clickImportence()}>
                <h3>Важность</h3>
              </TitlePoint>
              {isOpenImportance ? (
                <>
                  <Point>Не важно</Point>
                  <Point>Важно</Point>
                  <Point>Очень выжно</Point>
                </>
              ) : null}
            </ListBox>
            <ListBox>
              <TitlePoint onClick={() => clickCategory()}>
                <h3>Категории</h3>
              </TitlePoint>
              {isOpenCategory ? (
                <>
                  {categoryList.map((categoryItem) => (
                    <Point>{categoryItem.name}</Point>
                  ))}
                </>
              ) : null}
            </ListBox>
          </section>
        </MenuContainer>
      </>
    );
  }
}

const mapStateToprops = (store) => {
  return {
    isOpenCategory: store.menuReducer.isOpenCategory,
    isOpenImportance: store.menuReducer.isOpenImportance,
    categoryList: store.categoryListReducer.categoryList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    clickCategory: () => dispatch(clickCategory()),
    clickImportence: () => dispatch(clickImportence()),
    openNewCard: () => dispatch(openNewCard()),
    newList: () => dispatch(newList()),
    filterStatusList: (value) => dispatch(filterStatusList(value)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Menu);
