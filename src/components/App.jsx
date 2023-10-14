import { ContactForm } from "./form/Form";
import { Filter } from "./filter/Filter";
import { ContactList } from "./contactList/ContactList";
import { Layout } from "./Layout.styled";
export const App = () => {

    return (
    <Layout>
    <ContactForm />
    <Filter/>
    <ContactList />
    </Layout>

    )}


