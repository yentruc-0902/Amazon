import { configureStore } from "@reduxjs/toolkit";
import rootreducers from "./components/redux/reducers/main";

const store = configureStore({
    reducer: rootreducers,
  });

export default store;