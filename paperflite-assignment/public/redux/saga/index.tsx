import { all, fork } from "redux-saga/effects";
import { getConversationFlow } from "./conversations";

export default function* rootSaga(){
    yield all([fork(getConversationFlow)])
}