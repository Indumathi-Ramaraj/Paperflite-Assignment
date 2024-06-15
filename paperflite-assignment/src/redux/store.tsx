// store/store.ts
import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import { createWrapper } from "next-redux-wrapper";
import rootSaga from "./saga";
import { rootReducer } from "./reducers";

// Create the saga middleware
const sagaMiddleware = createSagaMiddleware();

// Create the store with saga middleware
const makeStore = () => {
  const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) =>
      getDefaultMiddleware().concat(sagaMiddleware),
  });

  sagaMiddleware.run(rootSaga);

  return store;
};

// Create a Next.js wrapper
export const wrapper = createWrapper(makeStore);
