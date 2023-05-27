import { Form } from './Form/Form';
import { Section } from './Section/Section';

import { ContactList } from './ContactList/ContactList';

import { Filter } from './Filter/FilterContacts';
import { useFetchContactsQuery } from 'redux/ContactsSlice';

export function App() {
  const { data: contacts, error, isFetching } = useFetchContactsQuery();
  if (error) {
    alert(error);
  }

  return (
    <>
      <Section title="Phonebook">
        <Form />
      </Section>
      <Section title="Contacts">
        {isFetching && <p>Loading</p>}
        <Filter />

        {contacts && <ContactList />}
      </Section>
    </>
  );
}
