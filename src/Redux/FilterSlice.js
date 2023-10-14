import { createAction, createReducer } from "@reduxjs/toolkit"

const initialFilter = {
    filter: '',
}

export const actionFilter = createAction("filter/actionFilter", newContact => {
return {
    payload: newContact,
    }
})

export const filterReducer = createReducer(initialFilter, builder =>
    builder.addCase(actionFilter, (state, action) => {
        return {
            ...state,
            filter: action.payload,
    }
}))
