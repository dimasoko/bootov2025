import Header from '../components/Header';
import Footer from '../components/Footer';
import PageName from '../components/Text/PageName';
import BookingForm from '../components/BookingForm/BookingForm';

const Booking = () => {
    return (
      <div>
          <Header />
          <PageName text="Запись"/>
          <BookingForm />
          <Footer />
      </div>
    );
  };
  
  export default Booking;