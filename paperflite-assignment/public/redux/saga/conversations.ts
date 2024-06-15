import { conversations } from "@/pages/api/mockData/conversation";
import { take, put } from "redux-saga/effects";

import {
  GETTING_CONVERSATION_LIST,
  GET_CONVERSATION_LIST,
  SET_CONVERSATION_LIST,
  SET_CONVERSATION_ERROR,
} from "../actions/conversations";

export function* getConversationFlow() {
  while (true) {
    yield take(GET_CONVERSATION_LIST);
    yield put({
      type: GETTING_CONVERSATION_LIST,
      getting: true,
    });

    try {
      //dynamic api call
      // const data = yield call(conversation);
      if (conversations) {
        yield put({
          type: SET_CONVERSATION_LIST,
          data: conversations,
        });
      }
    } catch (error) {
      yield put({
        type: SET_CONVERSATION_ERROR,
        error,
      });
    } finally {
      yield put({
        type: GETTING_CONVERSATION_LIST,
        getting: false,
      });
    }
  }
}
