import { GameState } from './state';
import { Actions, ActionTypes } from './actions';

const initialState: GameState = {
  isLoading: false,
  player: false
};

export function gameReducer(state = initialState, action: Actions): GameState {
  switch (action.type) {

    case ActionTypes.CLEAR_STATE:
      return initialState;
    default:
      return state;
  }
}
