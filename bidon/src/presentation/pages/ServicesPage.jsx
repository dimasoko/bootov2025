import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageName from '../../presentation/components/ui/Text/PageName';
import ServiceSect from '../../presentation/components/ui/Service/ServiceSect';

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