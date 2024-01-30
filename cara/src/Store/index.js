import {configureStore} from "@reduxjs/toolkit"
import itemsSlice from "./ItemSlice";
import fetchStatusSlice from "./FetchStatusSlice";
import bagSlice from "./bagSlice";

const caraStore=configureStore({
  reducer:{
    items: itemsSlice.reducer,
    fetchStatus:fetchStatusSlice.reducer,
    bag:bagSlice.reducer,
  }
});

export default caraStore;