import Header from '../components/Header';
import PageName from '../components/Text/PageName';
import Footer from '../components/Footer';
import NewsSect from '../components/News/NewsSect';

const News = ({ isAdmin = false }) => {
  return (
    <>
      <Header />
      <PageName text="Новости"/>
      <NewsSect isAdmin={isAdmin} />
      <Footer />
    </>
  );
};

export default News;