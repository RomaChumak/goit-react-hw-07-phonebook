import { createSlice } from "@reduxjs/toolkit"  
import { addNumber, deleteContact, fetchContacts } from "./api";

 const sliceContacts = createSlice({
  name: 'contacts',
  initialState: {
    contacts: [],
    loading: false,
    error: false,
   },
  
 
  extraReducers: {
    // fetch-----------------------------

    [fetchContacts.pending](state) {
      state.loading = true;
    },
    [fetchContacts.fulfilled](state, action) {
      state.contacts = action.payload;
      state.loading = false;
    },
    [fetchContacts.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
    // add--------------------------------
    [addNumber.pending](state) {
      state.loading = true;
    },
    [addNumber.fulfilled](state, action) {
      state.contacts.push(action.payload);
      state.loading = false;
    },
    [addNumber.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },

    // delete----------------------------------

    [deleteContact.pending](state) {
      state.loading = true;
    },
    [deleteContact.fulfilled](state, action) {
      state.contacts = state.contacts.filter(
        contact => contact.id !== action.payload
      );
      state.loading = false;
    },
    [deleteContact.rejected](state, action) {
      state.loading = false;
      state.error = action.payload;
    },
  },
 });

export const contactReduser = sliceContacts.reducer 