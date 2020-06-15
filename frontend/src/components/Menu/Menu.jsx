import React, { Component } from "react";
import { connect } from "react-redux";
import { clickCategory, clickImportence } from "./../../store/menu/action";
import { openNewCard } from "../../store/openNewCard/action";
import { NavLink  } from "react-router-dom";
import { filterList, openParameters } from "../../store/list/action";
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
      filterList,
      openParameters,
    } = this.props;
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
              <Point onClick={() => openParameters()}>
                <NavLink  to="/settings">настройки</NavLink >
              </Point>
            </ListBox>
            <ListBox>
              <Point
                onClick={() => {
                  filterList("status", "Y");
                }}
              >
                <NavLink  to="/">Выполненно</NavLink >
              </Point>
              <Point
                onClick={() => {
                  filterList("status", "N");
                }}
              >
                Не выполненно
              </Point>
            </ListBox>
            <ListBox>
              <TitlePoint onClick={() => clickImportence()}>
                <h3>Важность</h3>
              </TitlePoint>
              {isOpenImportance ? (
                <>
                  <Point
                    onClick={() => {
                      filterList("importance", "L");
                    }}
                  >
                    Не важно
                  </Point>
                  <Point
                    onClick={() => {
                      filterList("importance", "M");
                    }}
                  >
                    Важно
                  </Point>
                  <Point
                    onClick={() => {
                      filterList("importance", "H");
                    }}
                  >
                    Очень выжно
                  </Point>
                </>
              ) : null}
            </ListBox>
            <ListBox>
              <TitlePoint onClick={() => clickCategory()}>
                <h3>Категории</h3>
              </TitlePoint>
              {isOpenCategory ? (
                <>
                  {categoryList.map((categoryItem) => {
                    return (
                      <Point
                        key={categoryItem.id}
                        onClick={() => {
                          filterList("category", categoryItem.id);
                        }}
                      >
                        {categoryItem.name}
                      </Point>
                    );
                  })}
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
    filterList: (name, value) => dispatch(filterList(name, value)),
    openParameters: () => dispatch(openParameters()),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Menu);
