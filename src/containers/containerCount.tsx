import { connect } from 'react-redux';
import  ButtonIncrement  from '../components/buttonIncrement';
import { incrementNumber, decrementNumber } from '../actions';

const mapStateToProps = (state) => {
  return {
    textNumber: state.reducerCount.textNumber
  }
}

const mapDispatchToProps = (dispatch) => {
  return {
    increment: () => {dispatch(incrementNumber())},
    decrement: () => {dispatch(decrementNumber())}
  }
}

const WrapperCount = connect(
  mapStateToProps,
  mapDispatchToProps
)(ButtonIncrement);

export default WrapperCount;