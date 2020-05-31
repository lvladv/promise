import React, { Component } from "react";
import { connect } from "react-redux";
import { openNewCard } from "../../store/openNewCard/action";
import { setPage } from "./../../store/list/action";
import OpenNewCard from "./OpenNewCard";
import List from "./../List/List";
import ChangesCard from "./../List/ChangesCard";
import Pagination from "@material-ui/lab/Pagination";
import {
  SmallButton,
  ListContainer,
  HeadBlock,
  ButtonBlock,
} from "../../componentsStyled/Input.style";

class Input extends Component {
  handlePagination = (event, value) => {
    this.props.setPage(value);
  };
  render() {
    const { openNewCard, page, pageNumber } = this.props;
    const pageCount = Math.ceil(page.count / 15);
    console.log(page);
    return (
      <main style={{ flexGrow: 1 }}>
        <OpenNewCard />
        <ChangesCard />
        <HeadBlock>
          <ButtonBlock>
            <SmallButton
              onClick={() => {
                openNewCard();
              }}
            >
              Добавить новую запись
            </SmallButton>
          </ButtonBlock>
          {pageCount < 1 ? null : (
            <Pagination
              count={pageCount}
              variant="outlined"
              shape="rounded"
              page={pageNumber}
              onChange={this.handlePagination}
            />
          )}
        </HeadBlock>
        <ListContainer>
          <List />
        </ListContainer>
      </main>
    );
  }
}

const mapStateToprops = (store) => {
  return {
    page: store.listReducer.page,
    pageNumber: store.listReducer.pageNumber,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    openNewCard: () => dispatch(openNewCard()),
    setPage: (value) => dispatch(setPage(value)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Input);
