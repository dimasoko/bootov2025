import Header from '../components/layout/Header';
import Footer from '../components/layout/Footer';
import PageName from '../../presentation/components/ui/Text/PageName';
import BookingForm from '../../presentation/components/forms/BookingForm/BookingForm';

const BookingPage = () => {
    return (
      <div>
          <Header />
          <PageName text="Запись"/>
          <BookingForm />
          <Footer />
      </div>
    );
  };
  
  export default BookingPage;