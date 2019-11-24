import React, { Component } from "react";
import PropTypes from "prop-types";

class Counter extends Component {
  render() {
    const { count, onIncrease, onDecrease, onIncreaseBy } = this.props;
    return (
      <div>
        <h1>{count}</h1>
        <button onClick={onIncrease}>+1</button>
        <button onClick={onDecrease}>-1</button>
        <button onClick={() => onIncreaseBy(5)}>+5</button>
      </div>
    );
  }
}

Counter.propTypes = {
  count: PropTypes.number,
  onIncrease: PropTypes.func,
  onDecrease: PropTypes.func,
  onIncreaseBy: PropTypes.func
};

Counter.defaultProps = {
  count: 0,
  onIncrease: () => console.warn("onIncrease not defined"),
  onDecrease: () => console.warn("onDecrease not defined"),
  onIncreaseBy: () => console.warn("onIncreaseBy not defined")
};

export default Counter;
