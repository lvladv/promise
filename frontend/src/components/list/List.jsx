import React, { Component } from "react";
import { connect } from "react-redux";
import { newStatus } from "../../store/list/action";
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
            <TitleCard>
              <div>
                <Title>{item.name}</Title>
              </div>
            </TitleCard>
            <DetailsCard>
              <SmallBox>
                <DescriptionItem>Подробности:</DescriptionItem>
                <Description>{`${item.description}`}</Description>
                <ButtonBlock>
                  {item.status === "Y" ? null : (
                    <SmallButton onClick={() => newStatus(item)}>
                      Выполненно
                    </SmallButton>
                  )}
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
                  Категория:
                  <span>
                    {" "}
                    {categoryList.map((categoryItem) => {
                      return (
                        String(item.category) === String(categoryItem.id)
                        ? categoryItem.name
                        : null
                      )
                      
                    })}
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
