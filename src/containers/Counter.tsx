import Counter from '../modules/counter/Counter';
import * as actions from '../modules/counter/Actions';
import { StoreState } from '../StoreState';
import { connect, Dispatch } from 'react-redux';

export function mapStateToProps({ count }: StoreState) {
  return { count };
}

export function mapDispatchToProps(dispatch: Dispatch<actions.CountAction>) {
  return {
    onIncrement: () => dispatch(actions.incrementCount()),
    onDecrement: () => dispatch(actions.decrementCount()),
  };
}

export default connect(mapStateToProps, mapDispatchToProps)(Counter);
