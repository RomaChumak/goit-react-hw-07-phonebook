import { ContactForm } from "./form/Form";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactList/ContactList";
import { Layout } from "./Layout.styled";
import { useEffect } from "react";
import { useDispatch } from "react-redux";
import { fetchContacts } from "Redux/api";
export const App = () => {
const dispatch = useDispatch()
    useEffect(() => {
        dispatch(fetchContacts())
    })
    return (
        <Layout>
            <ContactForm />
      <Filter />     
    <ContactList />
    </Layout>

    )}


