import React from "react";
import {
  render,
  fireEvent,
  getByText,
  getByTestId,
} from "@testing-library/react";
import ContactForm from "./ContactForm";

test("Testing to see if inputs are visible", () => {
  const { getByTestId } = render(<ContactForm />);
  getByTestId("firstName");
  getByTestId("lastName");
  getByTestId("email");
  getByTestId("message");
});

test("Confirming max length of first name test fails",async () => {
  const { getByLabelText, findByText } = render(<ContactForm />);
  const firstNameInput = getByLabelText(/First Name/i);
  fireEvent.change(firstNameInput, { target: { value: "ma" } });
  fireEvent.blur(firstNameInput);
  expect(await findByText(/maxLength/i)).toBeNull();
});

// test("Testing to see if a valid email is used", () => {
//     const {getByLabelText, getByText} = render(<ContactForm/>);
//     const emailInput = getByLabelText(/email/i);
//     fireEvent.change(emailInput, {target:{value:"@"}});
//     fireEvent.blur(emailInput);
//     expect(getByText(/ref/i)).toBeInDocument();
// })
