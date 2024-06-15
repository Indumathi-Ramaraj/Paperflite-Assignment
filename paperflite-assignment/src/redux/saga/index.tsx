import { all, fork } from "redux-saga/effects";
import { getCardFlow, getConversationFlow, getRecipentFlow } from "./home";

export default function* rootSaga() {
  yield all([
    fork(getConversationFlow),
    fork(getCardFlow),
    fork(getRecipentFlow),
  ]);
}
