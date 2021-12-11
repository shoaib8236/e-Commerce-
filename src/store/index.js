import { combineReducers, configureStore } from "@reduxjs/toolkit";

import counterSlice from "../pages/conter/slice";
// const reducer = combineReducers({
//   counter: counterSlice,
// });
export default configureStore({
  reducer: {
    counter: counterSlice,
  },
});
