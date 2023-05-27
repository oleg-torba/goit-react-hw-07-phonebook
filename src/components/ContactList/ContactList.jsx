import Css from './ContactList.module.css';
import { useSelector } from 'react-redux';
import { DeleteContacts } from './DeleteButton';

import { useFetchContactsQuery } from 'redux/ContactsSlice';

export function ContactList() {
  const { data: contacts } = useFetchContactsQuery();
  const filter = useSelector(state => state.filter);
  const visibleContacts = contacts.filter(contact =>
    contact.name.toLowerCase().includes(filter.toLowerCase())
  );
  console.log(visibleContacts);

  return (
    <>
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
                  {<DeleteContacts id={item.id} />}
                </li>
              </>
            );
          })}
        </ul>
      </div>
    </>
  );
}
