import { createWrapper } from "next-redux-wrapper";
import masterReducer from "./reducers/masterReducer";
import { configureStore } from "@reduxjs/toolkit";

const store = configureStore({ reducer: masterReducer });

const makeStore = () => store;

export const wrapper = createWrapper(makeStore);