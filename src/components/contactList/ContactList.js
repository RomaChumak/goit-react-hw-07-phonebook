import { useDispatch, useSelector } from "react-redux"
import { ContactItem, ContactName, ContactNumber, DeleteBtn } from "./ContactList.styled"
import { deleteContact } from "Redux/ContactsSlice"
export const ContactList = () => {
    const contacts = useSelector(state => state.contacts.contacts)
    const filter = useSelector(state => state.filter.filter)
    const dispatch = useDispatch()
     const filteredContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
    return <ul>
       {filteredContacts.map(item => (
        <ContactItem key={item.id}>
        <ContactName>{item.name}:</ContactName> 
        <ContactNumber>{item.number}</ContactNumber>
               <DeleteBtn onClick={() => dispatch(deleteContact(item.id))}>Delete</DeleteBtn>
        </ContactItem>
    ))}</ul>
}