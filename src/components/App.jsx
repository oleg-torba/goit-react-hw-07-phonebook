import { Form } from './Form/Form';
import { Section } from './Section/Section';

import { ContactList } from './ContactList/ContactList';

import { Filter } from './Filter/FilterContacts';
import { ContactsApi } from 'redux/ContactsSlice';

export function App() {
  const contacts = ContactsApi.useFetchContactsQuery().data;
 

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        <Filter />

       {contacts &&  <ContactList />}
      </Section>
    </>
  );
}
