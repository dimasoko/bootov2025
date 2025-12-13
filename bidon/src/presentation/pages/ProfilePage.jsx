import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageName from '../../presentation/components/ui/Text/PageName';

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