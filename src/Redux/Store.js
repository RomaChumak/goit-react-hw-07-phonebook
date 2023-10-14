import { configureStore } from "@reduxjs/toolkit";
import { contactReduser } from "./ContactsSlice";
import { filterReducer } from "./FilterSlice";



export const store = configureStore({
    reducer: {
  contacts: contactReduser,
  filter: filterReducer,
},
});
