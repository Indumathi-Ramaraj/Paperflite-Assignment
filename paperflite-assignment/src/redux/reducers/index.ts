import { combineReducers } from "redux";

import homeReducer from "./home";

export const rootReducer = combineReducers({
  home: homeReducer,
});

export type State = ReturnType<typeof rootReducer>;

export type ConnectProps = Partial<State> & {
  dispatch: Function;
};
