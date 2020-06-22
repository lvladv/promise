import React, { Component } from "react";
import { connect } from "react-redux";
import { setPage } from "./../../store/list/action";
import List from "./../List/List";
import ChangesCard from "./../List/ChangesCard";
import Pagination from "@material-ui/lab/Pagination";
import {
  ListContainer,
  HeadBlock,
  InputContainer,
} from "../../componentsStyled/Input.style";

class Input extends Component {
  handlePagination = (value) => {
    this.props.setPage(value);
  };
  render() {
    const { page, pageNumber } = this.props;
    const pageCount = Math.ceil(page.count / 15);
    return (
      <InputContainer>
        <ChangesCard />
        <HeadBlock>
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
      </InputContainer>
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
    setPage: (value) => dispatch(setPage(value)),
  };
};

export default connect(mapStateToprops, mapDispatchToProps)(Input);
