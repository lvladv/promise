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
  constructor(props) {
    super(props);
    this.state = { idCategory: "", idImportance: "", idStatus: "N" };
    this.pointColor = "#cfd8dc"
  }


  getCategoryColor = (id) => {
    if (+ id !== + this.state.idCategory) {
      this.setState({ idCategory: id })
    } else {
      this.setState({ idCategory: "" })
    }
  }

  getImportanceColor = (id) => {
    if (id !== this.state.idImportance) {
      this.setState({ idImportance: id })
    } else {
      this.setState({ idImportance: "" })
    }
  }

  getStatusColor = (id) => {
    if (id === "N") {
      this.setState({ idStatus: "N" })
    } else {
      this.state.idStatus === "Y" ? this.setState({ idStatus: "N" }) : this.setState({ idStatus: "Y" })
    }
  }


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

    const { idCategory, idImportance, idStatus } = this.state;
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
                  this.getStatusColor("N")
                }}
                style={{
                  background: idStatus === "N" ? this.pointColor : "",
                }}
              >
                <NavLink to={`/`}> Не выполненно</NavLink>
              </Point>
              <Point
                onClick={() => {
                  filterList("status", "Y");
                  this.getStatusColor("Y")
                }}
                style={{
                  background: idStatus === "Y" ? this.pointColor : "",
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
                      this.getImportanceColor("L")
                    }}
                    style={{
                      background: idImportance === "L" ? this.pointColor : "",
                    }}
                  >
                    <NavLink to="/"> Не важно</NavLink>
                  </Point>
                  <Point
                    onClick={() => {
                      filterList("importance", "M");
                      this.getImportanceColor("M")
                    }}
                    style={{
                      background: idImportance === "M" ? this.pointColor : "",
                    }}
                  >
                    <NavLink to="/">Важно</NavLink>
                  </Point>
                  <Point
                    onClick={() => {
                      filterList("importance", "H");
                      this.getImportanceColor("H");
                    }}
                    style={{
                      background: idImportance === "H" ? this.pointColor : "",
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
                          this.getCategoryColor(categoryItem.id)
                        }}
                        style={{
                          background: categoryItem.id === idCategory ? this.pointColor : "",
                        }}
                      >
                        <NavLink to="/"> {categoryItem.name}</NavLink>
                      </Point>
                    );
                  })}

                  <Point
                    onClick={() => {
                      filterList("category", 1);
                      this.getCategoryColor(1)
                    }}
                    style={{
                      background: 1 === idCategory ? this.pointColor : "",
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
