import { fireEvent, render, screen, waitFor, within, beforeEach} from '@testing-library/react'
import BookingForm from './components/BookingForm'
import user from '@testing-library/user-event'

// test('Check if change date return revised times', () => {
//   render(<BookingForm />);
// const buttonElement = screen.getByTestId('date-change-event');
//   expect(buttonElement).toBeInTheDocument();
// })

// test('checks if availableTimes prop is passed as an array', () => {
//   const mockArray = ['20:00', '20:30', '21:00', '21:30'];
//   //const mockComponent = jest.fn();
  
//   render(<BookingForm availableTimes={mockArray} />);
  
//   expect(Array.isArray(mockArray)).toBe(true);
// });

// test('Write booking details to localstorage', () => {

//   const setLocalStorage = (id, data) => {
//   window.localStorage.setItem(id, JSON.stringify(data));
// };
//   const mockBookingObj = {
//     firstName: "Some name",
//     lastName: "some title",
//     email: "some eamil",
//     mobile: "some number",
//     date: "date",
//     time: "time",
//     occasion: "occasion",
//     numOfGuest: "3",
//   }
//  render(<BookingForm />);
//     setLocalStorage('booking', mockBookingObj);
//     expect(localStorage.getItem("booking")).toEqual(JSON.stringify(mockBookingObj));
// });

describe("Form First Name Validation", () => {
  it("First name Check", async () => {
     render(<BookingForm />)
  
      const firstName = screen.getByRole('textbox', {
      name: /first name/i
    });
    user.type(firstName, '{tab}')
    const button = screen.getByRole('button', {
      name: /confirm reservation/i
    });
    user.click(button);
    const firstNameError = await screen.findByText(/First name is required/i);
    expect(firstNameError).toBeInTheDocument();
  })
});
describe("Form Last Name Validation", () => {
  it("Last name input check", async () => {
   render(<BookingForm />)
  
    const lastName = screen.getByRole('textbox', {
      name: /last name/i
    });
    user.type(lastName, '{tab}')
    const button = screen.getByRole('button', {
      name: /confirm reservation/i
    });
    user.click(button);
    const lastNameError = await screen.findByText(/Last name is required/i);
    expect(lastNameError).toBeInTheDocument();
  })
});

describe("Email Required Validation", () => {
  it("Check if email is not empty", async () => {
   render(<BookingForm />)
  
     const email = screen.getByRole('textbox', {
      name: /email/i
    });
    user.type(email, '{tab}')
    const button = screen.getByRole('button', {
      name: /confirm reservation/i
    });
    user.click(button);
    const emailError = await screen.findByText(/Email is required/i);
    expect(emailError).toBeInTheDocument();
  })
});

describe("Email Valid Validation", () => {
  it("Check if email is Valid", async () => {
   render(<BookingForm />)
  
     const email = screen.getByRole('textbox', {
      name: /email/i
    });
    user.type(email, "invalid.email")
    const button = screen.getByRole('button', {
      name: /confirm reservation/i
    });
    user.click(button);
    const emailError = await screen.findByText(/Invalid email address format/i);
    expect(emailError).toBeInTheDocument();
  })
});

describe("Mobile number Validation", () => {
  it("Mobile number input Check", async () => {
   render(<BookingForm />)
  
    const mobile = screen.getByRole('textbox', {
      name: /mobile/i
    });
    user.type(mobile, '{tab}')
    const button = screen.getByRole('button', {
      name: /confirm reservation/i
    });
    user.click(button);
    const mobileError = await screen.findByText(/Mobile number is required/i);
    expect(mobileError).toBeInTheDocument();
  })
});

describe("Number of guests Validation", () => {
  it("Guests input Check", async () => {
   render(<BookingForm />)

    const guests = screen.getByRole('combobox', {
  name: /number of guests/i
})
    user.type(guests, '{tab}')
    const button = screen.getByRole('button', {
      name: /confirm reservation/i
    });
    user.click(button);
    const numberOfGuestsError = await screen.findByText(/Number of guest is required/i);
    expect(numberOfGuestsError).toBeInTheDocument();
  })
});

describe("Date Input Validation", () => {
  it("Date input Check", async () => {
    render(<BookingForm />)
 
    const date = screen.getByLabelText(/date/i);
    user.type(date, '{tab}')
    const button = screen.getByRole('button', {
      name: /confirm reservation/i
    });
    user.click(button);
    const dateError = await screen.findByText(/Date is required/i);
    expect(dateError).toBeInTheDocument();
  })
});

describe("Time Input Validation", () => {
  it("Time input check", async () => {
    render(<BookingForm />)
 
    const time = screen.getByRole('combobox', {
      name: /choose time/i
    });
    user.type(time, '{tab}')
    const button = screen.getByRole('button', {
      name: /confirm reservation/i
    });
    user.click(button);
    const timeError = await screen.findByText(/Time is required/i);
    expect(timeError).toBeInTheDocument();
  })
});

describe("Occasion Input Validation", () => {
 
  it("Occasion input check", async () => {
    render(<BookingForm />)
    const occasion = screen.getByRole('combobox', {
      name: /occasion/i
    });
    user.type(occasion, '{tab}')
    const button = screen.getByRole('button', {
      name: /confirm reservation/i
    });
    user.click(button);
    const occasionError = await screen.findByText(/Occasion is required/i);
    expect(occasionError).toBeInTheDocument();
  })
});


describe("Form is submitted when all fields pass validation", () => {

  

  test("Form submission check", async () => {
    const handleSubmit = jest.fn();

    render(<BookingForm  onSubmit={handleSubmit}/>)
    const firstName = screen.getByRole('textbox', {
      name: /first name/i
    });
    user.type(firstName, "Rashid")

    const lastName = screen.getByRole('textbox', {
      name: /last name/i
    });
    user.type(lastName, "Khan")

    const email = screen.getByRole('textbox', {
      name: /email/i
    });
    user.type(email, "khan@mail.com")

    const mobile = screen.getByRole('textbox', {
  name: /mobile/i
})
    user.type(mobile, "3440394039")

     const guests = screen.getByRole('combobox', {
  name: /number of guests/i
})
    user.selectOptions(guests, within(guests).getByRole("option", { name: "2" }));

    const date = screen.getByLabelText(/date/i);
    user.type(date, "2026-01-07")
    
     const time = screen.getByRole('combobox', {
      name: /choose time/i
    });
     user.selectOptions(time, within(time).getByRole('option', { name: "Select Time" }));

     const occasion = screen.getByRole('combobox', {
      name: /occasion/i
     });
    user.selectOptions(occasion, within(occasion).getByRole("option", { name: "Birthday" }));

  const submitButton = screen.getByRole('button', {
  name: /confirm reservation/i
  })
    user.click(submitButton);
    expect(handleSubmit).not.toHaveBeenCalled();
    expect(submitButton).toHaveAttribute("Disabled");
  })
});