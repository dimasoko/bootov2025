import Header from '../components/Header';
import Footer from '../components/Footer';
import PageName from '../components/Text/PageName';
import ProfilePage from '../components/ProfilePage/ProfilePage';

const Profile = () => {
  return (
    <div>
      <Header />
      <PageName text="Личный кабинет"/>
      <ProfilePage />
      <Footer />
    </div>
  );
};

export default Profile; 