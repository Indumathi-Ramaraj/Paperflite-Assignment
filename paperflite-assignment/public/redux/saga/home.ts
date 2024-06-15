import { conversations } from "@/pages/api/mockData/conversation";
import { take, put } from "redux-saga/effects";
import { cardData } from "@/pages/api/mockData/cardData";
import { recipentDetails } from "@/pages/api/mockData/recipinetsDetails";
import {
  GETTING_CONVERSATION_LIST,
  GET_CONVERSATION_LIST,
  SET_CONVERSATION_LIST,
  SET_CONVERSATION_ERROR,
  GETTING_CARD_LIST,
  GET_CARD_LIST,
  SET_CARD_LIST,
  SET_CARD_ERROR,
  GETTING_RECIPENT_LIST,
  GET_RECIPENT_LIST,
  SET_RECIPENT_LIST,
  SET_RECIPENT_ERROR,
} from "../actions/home";

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

export function* getCardFlow() {
  while (true) {
    yield take(GET_CARD_LIST);
    yield put({
      type: GETTING_CARD_LIST,
      getting: true,
    });

    try {
      if (cardData) {
        yield put({
          type: SET_CARD_LIST,
          data: cardData,
        });
      }
    } catch (error) {
      yield put({
        type: SET_CARD_ERROR,
        error,
      });
    } finally {
      yield put({
        type: GETTING_CARD_LIST,
        getting: false,
      });
    }
  }
}

export function* getRecipentFlow() {
  while (true) {
    yield take(GET_RECIPENT_LIST);
    yield put({
      type: GETTING_RECIPENT_LIST,
      getting: true,
    });

    try {
      if (recipentDetails) {
        yield put({
          type: SET_RECIPENT_LIST,
          data: recipentDetails,
        });
      }
    } catch (error) {
      yield put({
        type: SET_RECIPENT_ERROR,
        error,
      });
    } finally {
      yield put({
        type: GETTING_RECIPENT_LIST,
        getting: false,
      });
    }
  }
}
