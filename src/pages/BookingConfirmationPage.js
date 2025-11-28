import Footer from "../components/Footer";
import Header from "../components/Header";
import Main from "../components/Main";

const BookingConfirmationPage = () => {
  const currentBooking = JSON.parse(localStorage.getItem('booking'));
  return (<>
            <Header />
    <Main currentBooking={currentBooking} />
            <Footer />
  </>);
}
export default BookingConfirmationPage;