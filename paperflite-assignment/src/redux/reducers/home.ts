import {
  GETTING_CONVERSATION_LIST,
  SET_CONVERSATION_LIST,
  SET_CONVERSATION_ERROR,
  GETTING_CARD_LIST,
  SET_CARD_LIST,
  SET_CARD_ERROR,
  GETTING_RECIPENT_LIST,
  SET_RECIPENT_LIST,
  SET_RECIPENT_ERROR,
} from "../actions/home";

export interface HomeReducer {
  conversationList: {
    getting: boolean;
    error: string;
    data: Array<object>;
  };
  cardList: {
    getting: boolean;
    error: string;
    data: Array<object>;
  };
  recipentDetails: {
    getting: boolean;
    error: string;
    data: Array<object>;
  };
}

const initialState: HomeReducer = {
  conversationList: {
    getting: false,
    error: "",
    data: [],
  },
  cardList: {
    getting: false,
    error: "",
    data: [],
  },
  recipentDetails: {
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
    case SET_CARD_LIST:
      return {
        ...state,
        cardList: {
          ...state.cardList,
          data: data,
        },
      };

    case GETTING_CARD_LIST:
      return {
        ...state,
        cardList: {
          ...state.cardList,
          getting,
        },
      };

    case SET_CARD_ERROR:
      return {
        ...state,
        cardList: {
          ...state.cardList,
          error,
        },
      };
    case SET_RECIPENT_LIST:
      return {
        ...state,
        recipentDetails: {
          ...state.recipentDetails,
          data: data,
        },
      };

    case GETTING_RECIPENT_LIST:
      return {
        ...state,
        recipentDetails: {
          ...state.recipentDetails,
          getting,
        },
      };

    case SET_RECIPENT_ERROR:
      return {
        ...state,
        recipentDetails: {
          ...state.recipentDetails,
          error,
        },
      };
    default:
      return state;
  }
}

export default reducer;
