import Header from '../components/Header';
import Footer from '../components/Footer';
import PageName from '../components/Text/PageName';
import ServiceSect from '../components/Services/ServiceSect';

const ServicesPage = ({ isAdmin = false }) => {
  return (
    <>
        <Header />
        <PageName text="Услуги"/>
        <ServiceSect isAdmin={isAdmin} />
        <Footer />
    </>
  );
};

export default ServicesPage; 