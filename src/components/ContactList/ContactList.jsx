import React, { useEffect } from 'react';

import Css from './ContactList.module.css';
import { useSelector } from 'react-redux';

import { ContactsApi } from 'redux/ContactsSlice';

export function ContactList() {
  const contacts = ContactsApi.useFetchContactsQuery().data;
  useEffect(() => {}, []);

  const [deleteContact] = ContactsApi.useDeleteContactMutation();

  const filter = useSelector(state => state.filter);
  console.log(filter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(visibleContacts);

  return (
    <div>
      <ul className={Css.contactBlock}>
        {visibleContacts.map(item => {
          return (
            <>
              <li className={Css.contactList} key={item.id}>
                <div className={Css.contactValue}>
                  <span className={Css.contactItem}>{item.name}</span>
                  <span className={Css.contactItem}>{item.number}</span>
                </div>
                {
                  <button
                    type="button"
                    onClick={() => {
                      deleteContact(item.id);
                    }}
                  >
                    Delete
                  </button>
                }
              </li>
            </>
          );
        })}
      </ul>
    </div>
  );
}
