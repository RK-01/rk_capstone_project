import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const BookingConfirmationPage = () => {
  const booking = JSON.parse(localStorage.getItem('booking'));
    
  return (<>
            <Header />
            <Main booking={booking} />
            <Footer />
  </>);
}
export default BookingConfirmationPage;