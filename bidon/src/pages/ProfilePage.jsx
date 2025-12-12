import Header from '../components/Header';
import Footer from '../components/Footer';
import PageName from '../components/Text/PageName';
import Profile from '../components/Profile/Profile';

const ProfilePage = () => {
  return (
    <div>
      <Header />
      <PageName text="Личный кабинет"/>
      <ProfilePage />
      <Footer />
    </div>
  );
};

export default ProfilePage; 