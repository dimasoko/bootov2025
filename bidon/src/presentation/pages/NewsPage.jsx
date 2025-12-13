import Header from '../components/layout/Header';
import PageName from '../../presentation/components/ui/Text/PageName';
import Footer from '../components/layout/Footer';
import NewsSect from '../../presentation/components/ui/News/NewsSect';

const NewsPage = ({ isAdmin = false }) => {
  return (
    <>
      <Header />
      <PageName text="Новости"/>
      <NewsSect isAdmin={isAdmin} />
      <Footer />
    </>
  );
};

export default NewsPage;