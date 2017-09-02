import { CountAction } from './Actions';
import { StoreState } from '../../StoreState';
import { INCREMENT_COUNT, DECREMENT_COUNT } from './Constants';

export function counter(state: StoreState, action: CountAction): StoreState {
  switch (action.type) {
    case INCREMENT_COUNT:
      return { ...state, count: state.count + 1 };
    case DECREMENT_COUNT:
      return { ...state, count: state.count - 1 };
    default:
      break;
  }
  return state;
}