import {
  GETTING_CONVERSATION_LIST,
  SET_CONVERSATION_LIST,
  SET_CONVERSATION_ERROR,
} from "../actions/conversations";

export interface ConversationReducer {
  conversationList: {
    getting: boolean;
    error: string;
    data: Array<object>;
  };
}

const initialState: ConversationReducer = {
  conversationList: {
    getting: false,
    error: "",
    data: [],
  },
};

function reducer(state = initialState, action: any) {
  const { getting, data, error } = action;
  switch (action.type) {
    case SET_CONVERSATION_LIST:
      return {
        ...state,
        conversationList: {
          ...state.conversationList,
          data: data,
        },
      };

    case GETTING_CONVERSATION_LIST:
      return {
        ...state,
        conversationList: {
          ...state.conversationList,
          getting,
        },
      };

    case SET_CONVERSATION_ERROR:
      return {
        ...state,
        conversationList: {
          ...state.conversationList,
          error,
        },
      };
    default:
      return state;
  }
}

export default reducer;
