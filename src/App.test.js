import { render, screen, waitFor, within} from '@testing-library/react'
import BookingForm from './components/BookingForm'
import user from '@testing-library/user-event'
import Main from './components/Main';
import { wait } from '@testing-library/user-event/dist/utils';

import {initializeTimesFunction} from './components/Main';
import {updateTimesFunction} from './components/Main';

 test('Checks if initializeTimes function return an of time as string', () => {
   render(<Main />);
  expect(Array.isArray(initializeTimesFunction())).toBe(true);
 });

 test('Checks if updateTimes function return an of time as string', () => {
   render(<Main />);
  expect(Array.isArray(updateTimesFunction())).toBe(true);
});

describe("Form First Name Validation", () => {
  it("First name Check", async () => {
     const dispatch = jest.fn();

     render(<BookingForm dispatch={dispatch}/>)
  
      const firstName = screen.getByRole('textbox', {
      name: /first name/i
      });
    await wait(() => {
      user.type(firstName, '{tab}')
    });
    const button = screen.getByRole('button', {
  name: /on click/i
})
    user.click(button);
    const firstNameError = await screen.findByText(/First name is required/i);
    expect(firstNameError).toBeInTheDocument();
  })
});
describe("Form Last Name Validation", () => {
  it("Last name input check", async () => {
     const dispatch = jest.fn();

   render(<BookingForm dispatch={dispatch}/>)
  
    const lastName = screen.getByRole('textbox', {
      name: /last name/i
    });
    await wait(() => {
      user.type(lastName, '{tab}')
    });
    const button = screen.getByRole('button', {
  name: /on click/i
})
    user.click(button);
    const lastNameError = await screen.findByText(/Last name is required/i);
    expect(lastNameError).toBeInTheDocument();
  })
});

describe("Email Required Validation", () => {
  it("Check if email is not empty", async () => {
     const dispatch = jest.fn();

   render(<BookingForm dispatch={dispatch}/>)
  
     const email = screen.getByRole('textbox', {
      name: /email/i
     });
    await wait(() => {
      user.type(email, '{tab}')
    });
    const button = screen.getByRole('button', {
  name: /on click/i
})
    user.click(button);
    const emailError = await screen.findByText(/Email is required/i);
    expect(emailError).toBeInTheDocument();
  })
});

describe("Email Valid Validation", () => {
  it("Check if email is Valid", async () => {
     const dispatch = jest.fn();

   render(<BookingForm dispatch={dispatch}/>)
  
     const email = screen.getByRole('textbox', {
      name: /email/i
     });
     user.type(email, "invalid.email")
    
    const button = screen.getByRole('button', {
  name: /on click/i
})
    user.click(button);
    const emailError = await screen.findByText(/Invalid email address format/i);
    expect(emailError).toBeInTheDocument();
  })
});

describe("Mobile number Validation", () => {
  it("Mobile number input Check", async () => {
     const dispatch = jest.fn();

   render(<BookingForm dispatch={dispatch}/>)
  
    const mobile = screen.getByRole('textbox', {
      name: /mobile/i
    });
    await wait(() => {
      user.type(mobile, '{tab}')
    });
    const button = screen.getByRole('button', {
  name: /on click/i
})
    user.click(button);
    const mobileError = await screen.findByText(/Mobile number is required/i);
    expect(mobileError).toBeInTheDocument();
  })
});

describe("Number of guests Validation", () => {
  it("Guests input Check", async () => {
     const dispatch = jest.fn();

   render(<BookingForm dispatch={dispatch}/>)

    const guests = screen.getByRole('combobox', {
  name: /number of guests/i
    })
    await wait(() => {
      user.type(guests, '{tab}')
    });
    const button = screen.getByRole('button', {
  name: /on click/i
})
    user.click(button);
    const numberOfGuestsError = await screen.findByText(/Number of guest is required/i);
    expect(numberOfGuestsError).toBeInTheDocument();
  })
});

describe("Date Input Validation", () => {
  it("Date input Check", async () => {
     const dispatch = jest.fn();

    render(<BookingForm dispatch={dispatch}/>)
 
    const date = screen.getByLabelText(/date/i);
    await wait(() => {
      user.type(date, '{tab}')
    });
    const button = screen.getByRole('button', {
  name: /on click/i
})
    user.click(button);
    const dateError = await screen.findByText(/Date is required/i);
    expect(dateError).toBeInTheDocument();
  })
});

describe("Time Input Validation", () => {
  it("Time input check", async () => {
     const dispatch = jest.fn();

    render(<BookingForm dispatch={dispatch}/>)
 
    const time = screen.getByRole('combobox', {
      name: /choose time/i
    });
    await wait(() => {
      user.type(time, '{tab}')
    });
    const button = screen.getByRole('button', {
  name: /on click/i
})
    user.click(button);
    const timeError = await screen.findByText(/Time is required/i);
    expect(timeError).toBeInTheDocument();
  })
});

describe("Occasion Input Validation", () => {
 
  it("Occasion input check", async () => {
     const dispatch = jest.fn();

    render(<BookingForm dispatch={dispatch}/>)
    const occasion = screen.getByRole('combobox', {
      name: /occasion/i
    });
    await wait(() => {
      user.type(occasion, '{tab}')
    });
    const button = screen.getByRole('button', {
  name: /on click/i
})
    user.click(button);
    const occasionError = await screen.findByText(/Occasion is required/i);
    expect(occasionError).toBeInTheDocument();
  })
});


describe("Form is submitted when all fields pass validation", () => {

  

  test("Form submission check", async () => {
    const handleSubmit = jest.fn();
    const dispatch = jest.fn();

    render(<BookingForm  onSubmit={handleSubmit} dispatch={dispatch} />)
    const firstName = screen.getByRole('textbox', {
      name: /first name/i
    });
    await wait(() => {
      user.type(firstName, "Rashid")
    })
    const lastName = screen.getByRole('textbox', {
      name: /last name/i
    });
    await wait(() => {
      user.type(lastName, "Khan")
    });
    
    const email = screen.getByRole('textbox', {
      name: /email/i
    });
    await wait(() => {
      user.type(email, "khan@mail.com")
    })
    const mobile = screen.getByRole('textbox', {
  name: /mobile/i
    })
    await wait(() => {
      user.type(mobile, "3440394039")
    });
     const guests = screen.getByRole('combobox', {
  name: /number of guests/i
     })
    await wait(() => {
      user.selectOptions(guests, within(guests).getByRole("option", { name: "2" }));
    });
    const date = screen.getByLabelText(/date/i);
    await wait(() => {
      user.type(date, "2026-01-07")
    });
     const time = screen.getByRole('combobox', {
      name: /choose time/i
     });
    await wait(() => {
      user.selectOptions(time, within(time).getByRole('option', { name: "Select Time" }));
    })
     const occasion = screen.getByRole('combobox', {
      name: /occasion/i
     });
    await wait(() => {
      user.selectOptions(occasion, within(occasion).getByRole("option", { name: "Birthday" }));
    });
  const submitButton = screen.getByRole('button', {
  name: /on click/i
})
    user.click(submitButton);
    await wait(() => {
      expect(handleSubmit).not.toHaveBeenCalled();
      expect(submitButton).toHaveAttribute("Disabled");
    });
  })
});