import React, { Component } from "react";
import { connect } from "react-redux";
import { newStatus } from "../../store/list/action";
import { ExpendedCategory } from "./ExpendedCategory";
import {
  openChangesCard,
  putItemChanges,
} from "../../store/ChangesCard/action";
import {
  ButtonBlock,
  SmallButton,
  DescriptionItem,
  Description,
  Title,
  Item,
  TitleCard,
  Card,
  SmallBox,
  Box,
  DetailsCard,
} from "../../componentsStyled/List.style";

class List extends Component {
  importanceColor = (importance) => {
    if (importance === "L") {
      return "51,153,0";
    } else if (importance === "M") {
      return "255,204,51";
    } else if (importance === "H") {
      return "204,0,0";
    }
  };

  render() {
    const {
      list,
      newStatus,
      openChangesCard,
      putItemChanges,
      categoryList,
    } = this.props;
    
    return (
      <Box>
        {list.map((item) => (
          <Card key={item.id}>
            <TitleCard
              style={{
                border: `1.5px solid rgba(${this.importanceColor(
                  item.importance
                )})`,
                background: `rgba(${this.importanceColor(
                  item.importance
                )},0.3)`,
              }}
            >
              <Title>{item.name}</Title>
              <ExpendedCategory
                category={item.category}
                categoryList={categoryList}
              />
            </TitleCard>
            <DetailsCard>
              <SmallBox>
                <DescriptionItem>Подробности:</DescriptionItem>
                <Description>{`${item.description}`}</Description>
                <ButtonBlock>
                  <SmallButton onClick={() => newStatus(item)}>
                    {item.status === "Y" ? "Не выполненно" : "Выполненно"}
                  </SmallButton>
                </ButtonBlock>
              </SmallBox>

              <SmallBox>
                <Item>
                  Статус:
                  <span>
                    {item.status === "Y" ? "Выполненно" : " Не выполненно"}
                  </span>
                </Item>
                <Item>
                  Важность:
                  <span>
                    {item.importance === "L"
                      ? " Не важно"
                      : item.importance === "M"
                      ? " Важно"
                      : " Очень важно"}
                  </span>
                </Item>

                <Item>
                  Дедлайн:
                  <span>{item.deadline}</span>
                </Item>

                <ButtonBlock>
                  <SmallButton
                    onClick={() => {
                      openChangesCard();
                      putItemChanges(item);
                    }}
                  >
                    Редактировать
                  </SmallButton>
                </ButtonBlock>
              </SmallBox>
            </DetailsCard>
          </Card>
        ))}
      </Box>
    );
  }
}

const mapStateToprops = (store) => {
  return {
    list: store.listReducer.list,
    categoryList: store.categoryListReducer.categoryList,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    putItemChanges: (itemChange) => dispatch(putItemChanges(itemChange)),
    openChangesCard: () => dispatch(openChangesCard()),
    newStatus: (newItem) => dispatch(newStatus(newItem)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(List);
