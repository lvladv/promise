import React, { Component } from "react";
import { connect } from "react-redux";
import { clickCategory, clickImportence } from "./../../store/menu/action";
import { openNewCard } from "../../store/openNewCard/action";
import { NavLink } from "react-router-dom";
import { filterList } from "../../store/list/action";
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

              <Point>
                <NavLink to="/settings">Настройки</NavLink>
              </Point>
            </ListBox>
            <ListBox>
              <Point
                onClick={() => {
                  filterList("status", "N");
                }}
              >
                <NavLink to={`/`}> Не выполненно</NavLink>
              </Point>
              <Point
                onClick={() => {
                  filterList("status", "Y");
                }}
              >
                <NavLink to={`/`}>Выполненно</NavLink>
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
                    <NavLink to="/"> Не важно</NavLink>
                  </Point>
                  <Point
                    onClick={() => {
                      filterList("importance", "M");
                    }}
                  >
                    <NavLink to="/">Важно</NavLink>
                  </Point>
                  <Point
                    onClick={() => {
                      filterList("importance", "H");
                    }}
                  >
                    <NavLink to="/"> Очень выжно</NavLink>
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
                        <NavLink to="/"> {categoryItem.name}</NavLink>
                      </Point>
                    );
                  })}

                  <Point
                    onClick={() => {
                      filterList("category", 1);
                    }}
                  >
                    <NavLink to="/"> Без категории</NavLink>
                  </Point>
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
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Menu);
