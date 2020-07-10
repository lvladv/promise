import React, { Component } from "react";
import { connect } from "react-redux";
import { setPage } from "../../store/list/action";
import List from "../List/List";
import { Main } from "./../../componentsStyled/App.style";
import ChangesCard from "../List/ChangesCard";
import Pagination from "@material-ui/lab/Pagination";
import { Redirect, Route, Switch } from "react-router-dom";
import OpenNewCard from "./OpenNewCard";
import Menu from "./../Menu/Menu";
import Parameters from "./../Parameters/Parameters";
import {
  ListContainer,
  HeadBlock,
  InputContainer,
} from "../../componentsStyled/Input.style";

class ContentPage extends Component {
  handlePagination = (value) => {
    this.props.setPage(value);
  };

  render() {
    
    const { page, pageNumber, isAutorisation } = this.props;
    const pageCount = Math.ceil(page.count / 15);
   
    
    if (!isAutorisation) {
      return <Redirect to="/authorisation" />;
    }
    return (
      <Main>
        <Menu />
        <OpenNewCard />
        <Switch>
          <Route component={Parameters} path="/settings" />
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
        </Switch>
      </Main>
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

export default connect(mapStateToprops, mapDispatchToProps)(ContentPage);
