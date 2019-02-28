import { INCREMENT, DECREMENT } from '../actionTypes'

type ActionType = {
  type: 'INCREMENT' | 'DECREMENT'
}

 interface stateType {
   count: number
 }

export const reducer = (state: stateType, action: ActionType) => {
  switch (action.type) {
    case INCREMENT:
      return { count: state.count + 1 };
    case DECREMENT:
      return { count: state.count - 1 };
    default:
      throw new Error("Unexpected action");
  }
};
