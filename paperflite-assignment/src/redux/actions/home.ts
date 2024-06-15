export const GETTING_CONVERSATION_LIST = "GETTING_CONVERSATION_LIST";
export const GET_CONVERSATION_LIST = "GET_CONVERSATION_LIST";
export const SET_CONVERSATION_LIST = "SET_CONVERSATION_LIST";
export const SET_CONVERSATION_ERROR = "SET_CONVERSATION_ERROR";

export const GETTING_CARD_LIST = "GETTING_CARD_LIST";
export const GET_CARD_LIST = "GET_CARD_LIST";
export const SET_CARD_LIST = "SET_CARD_LIST";
export const SET_CARD_ERROR = "SET_CARD_ERROR";

export const GETTING_RECIPENT_LIST = "GETTING_RECIPENT_LIST";
export const GET_RECIPENT_LIST = "GET_RECIPENT_LIST";
export const SET_RECIPENT_LIST = "SET_RECIPENT_LIST";
export const SET_RECIPENT_ERROR = "SET_RECIPENT_ERROR";

export const getConversationList = () => {
  return { type: GET_CONVERSATION_LIST };
};

export const getCardList = () => {
  return { type: GET_CARD_LIST };
};

export const getRecipentList = () => {
  return { type: GET_RECIPENT_LIST };
};
