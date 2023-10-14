import { Formik} from "formik";
import { StyledForm, StyledInput, ContactLabel, ErrorForm, ContactBtn } from "./Form.styled";
import * as Yup from "yup";
import { useDispatch, useSelector } from "react-redux";
import { addContact } from "Redux/ContactsSlice";
const FormSchema = Yup.object().shape({
   name: Yup.string()
    .min(2, 'Too Short!')
    .max(50, 'Too Long!')
    .matches(
      "^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$",
      "Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
    )
     .required('Required'),
   number: Yup.string()
     .min(9, '9 digits required!')
     .max(19, 'Less than 16 symbols!')
      .matches(
      /\+?\d{1,4}?[ .\-\s]?\(?\d{1,3}?\)?[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,4}[ .\-\s]?\d{1,9}/,
      'Phone number must be digits and can contain spaces, dashes, parentheses and can start with +'
    )
     .required('Required'),

 });


export const ContactForm = () => {
  const dispatch = useDispatch()
  const contacts = useSelector(state => state.contacts.contacts);

  const handleSubmit = (values, action) => {
    const isInContacts = contacts.some(
      ({ name, number }) =>
        name.toLowerCase() === values.name.toLowerCase() ||
        number === values.number
    );
    if (isInContacts) {
      return alert(`${values.name} or ${values.number} is already in contacts.`);
    }

    dispatch(addContact(values)); 
    action.resetForm();
  }
  return ( <Formik
     initialValues={{ name: '', number: '' }}
      validationSchema={FormSchema}
      onSubmit={handleSubmit}
      >
      <StyledForm>
          <h1>Phonebook</h1>
          <ContactLabel>
              Name
        <StyledInput name="name" type="text" />
        <ErrorForm name="name" component='span'></ErrorForm>
          </ContactLabel>
          <ContactLabel>
              Number
        <StyledInput name="number" type="tel" />
        <ErrorForm name="number" component='span'></ErrorForm>
          </ContactLabel>
          <ContactBtn type="submit">Add Contact</ContactBtn>
        </StyledForm>
      </Formik>)
}