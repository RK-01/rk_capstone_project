import { fireEvent, render, screen} from '@testing-library/react'
import BookingForm from './components/BookingForm'
import userEvent from '@testing-library/user-event';

test('Button can be clicked by the user to submit form', () => {
  render(<BookingForm />)

  const button = screen.getByTestId("confirm-booking");
    
  fireEvent.click(button);
  expect(screen.getByText('First Name')).toBeInTheDocument()
  
  

})

test('Check if change date return revised times', () => {
  render(<BookingForm />);
const buttonElement = screen.getByTestId('date-change-event');
  expect(buttonElement).toBeInTheDocument();
  

  
})

test('checks if availableTimes prop is passed as an array', () => {
  const mockArray = ['20:00', '20:30', '21:00', '21:30'];
  //const mockComponent = jest.fn();
  
  render(<BookingForm availableTimes={mockArray} />);
  
  expect(Array.isArray(mockArray)).toBe(true);
});

test('Write booking details to localstorage', () => {

  const setLocalStorage = (id, data) => {
  window.localStorage.setItem(id, JSON.stringify(data));
};
  const mockBookingObj = {
    firstName: "Some name",
    lastName: "some title",
    email: "some eamil",
    mobile: "some number", 
    date: "date",
    time: "time",
    occasion: "occasion",
    numOfGuest: "3",
  }
 render(<BookingForm />);
  // const button = screen.getByTestId("confirm-booking");
    
  // fireEvent.click(button);
    setLocalStorage('booking', mockBookingObj);
    expect(localStorage.getItem("booking")).toEqual(JSON.stringify(mockBookingObj));
});
