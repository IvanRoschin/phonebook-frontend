import { Header } from 'components/appBar';
import { useLocation } from 'react-router-dom';
import Container from '@mui/material/Container';
import { AuthNav } from 'components/authNav';
import { Filter } from 'components/contacts/Filter';
import { ContactList } from 'components/contacts/contactList';
import { FavoritesList } from 'components/contacts/FavoritesContacts';

const DashboardPage = () => {
  const { pathname } = useLocation();

  return (
    <Container width={{ xs: '320px', sm: '768px', md: '1280px' }}>
      <Header />
      <AuthNav />
      {pathname === '/home' && (
        <>
          <Filter />
          <ContactList />
        </>
      )}
      {pathname === '/favorites' && (
        <>
          <Filter />
          <FavoritesList />
        </>
      )}
    </Container>
  );
};

export default DashboardPage;
