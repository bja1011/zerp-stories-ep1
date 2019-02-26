import { Action } from '@ngrx/store';

export enum ActionTypes {
  CLEAR_STATE = '[game] clear state',
}

export class ClearState implements Action {
  readonly type = ActionTypes.CLEAR_STATE;

  constructor() {
  }
}

export type Actions =
  ClearState
  ;
