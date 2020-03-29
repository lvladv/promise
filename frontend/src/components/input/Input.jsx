import React, { Component, createRef } from "react";
import List from "../List/List";
import "./input.scss";

class Input extends Component {
  constructor(props) {
    super(props);
    this.inputClick = this.inputClick.bind(this);
  }
  inputValue = createRef();

  inputClick() {
    this.props.newPointList(this.inputValue.current.value);

    this.inputValue.current.value = " ";
  }

  render() {
    const { list, newList } = this.props;
    return (
      <section className="input">
        <h3>Надо выполнить</h3>
        <input
          ref={this.inputValue}
          type="text"
          value={this.value}
          placeholder="введите задачу"
        />
        <button onClick={this.inputClick}>Добавить </button>
        <ul>
          <List
            list={list}
            // onCheck={this.props.onCheck}
            // toCompleted={this.props.toCompleted}
          />
        </ul>
      </section>
    );
  }
}

export default Input;
