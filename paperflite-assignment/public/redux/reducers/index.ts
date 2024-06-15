import { combineReducers } from "redux";

import conversationReducer, { ConversationReducer } from "./conversation";

export const rootReducer = combineReducers({
  conversation: conversationReducer,
});

export type State = ReturnType<typeof rootReducer>;

export type ConnectProps = Partial<State> & {
  dispatch: Function;
};
