import Header from '../components/Header';
import Footer from '../components/Footer';
import PageName from '../components/Text/PageName';
import ServiceSect from '../components/Service/ServiceSect';

const Services = ({ isAdmin = false }) => {
  return (
    <>
        <Header />
        <PageName text="Услуги"/>
        <ServiceSect isAdmin={isAdmin} />
        <Footer />
    </>
  );
};

export default Services; 