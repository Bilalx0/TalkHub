import {useState} from 'react';
import ContactListitems from './ContactListitems';
import SearchBar from './SearchBar';
import './ContactList.css';

const ContactList = () => {
    const [searchQuery, setSearchQuery] = useState('');

    return (
      <div className="left-sidebar">
        <SearchBar searchQuery={searchQuery} setSearchQuery={setSearchQuery} />
        <ContactListitems searchQuery={searchQuery} />
      </div>
    );
};

export default ContactList;