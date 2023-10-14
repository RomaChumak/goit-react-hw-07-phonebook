import { createSlice, nanoid} from "@reduxjs/toolkit";


export const initialContacts = {
    contacts: [
        { id: 'id-1', name: 'Rosie Simpson', number: '459-12-56' },
        { id: 'id-2', name: 'Hermione Kline', number: '443-89-12' },
        { id: 'id-3', name: 'Eden Clements', number: '645-17-79' },
        { id: 'id-4', name: 'Annie Copeland', number: '227-91-26' },
    ]
};
    
 const sliceContacts  = createSlice({
    name: 'contact',
    initialState: initialContacts,
    reducers: {
        addContact: {
            reducer(state, action) {
                state.contacts.push(action.payload)
            },
            prepare({number, name}){
                return {
                    payload: {
                        id: nanoid(),
                        name, 
                        number,
                    }}}
        },
        deleteContact: {
            reducer(state, action) {
                return { contacts: state.contacts.filter(contact => contact.id !== action.payload) }
            },
            prepare(contactId) {
                return{ payload: contactId,}
            }
        }
    }
})

export const contactReduser = sliceContacts.reducer;
export const {addContact, deleteContact} = sliceContacts.actions