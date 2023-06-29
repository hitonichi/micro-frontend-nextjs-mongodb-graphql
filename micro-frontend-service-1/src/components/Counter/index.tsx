import * as React from "react";
import {
  increaseCounter,
  decreaseCounter,
} from "../../redux/actions/counterActions";
import { connect } from "react-redux";
import { bindActionCreators } from "redux";

interface Props {
  count: number;
  increment: Function;
  decrement: Function;
}

const Counter = ({ count, increment, decrement }: Props) => {
  return (
    <div>
      <h2>Counter</h2>
      <span>{count}</span>
      <button
        onClick={() => increment()}
        className="w-full h-10 bg-green-400/50"
      >
        +
      </button>
      <button onClick={() => decrement()} className="w-full h-10 bg-red-400/50">
        -
      </button>
    </div>
  );
};

const mapStateToProps = (state: any) => {
  return {
    count: state.counter,
  };
};

const mapDispatchToProps = (dispatch: any) => {
  return {
    increment: bindActionCreators(increaseCounter, dispatch),
    decrement: bindActionCreators(decreaseCounter, dispatch),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
