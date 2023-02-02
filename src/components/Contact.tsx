import React from "react";
import {
  ContactAddressContainer,
  ContactBody,
  ContactContainer,
  ContactFormContainer,
  ContactHeadingContainer,
  ContactInput,
  ContactInputContainer,
  ContactSubTitle,
  ContactTitle,
  Country,
  PhoneNumber,
  SubmitButton,
  WebsiteLink,
  SubmitButtonContainer,
} from "../styles/contactStyles";

const Contact = () => (
  <ContactContainer>
    <ContactBody>
      <ContactHeadingContainer>
        <ContactTitle>Contact Us</ContactTitle>
        <ContactSubTitle>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit.{" "}
        </ContactSubTitle>
      </ContactHeadingContainer>
      <ContactFormContainer>
        <ContactAddressContainer>
          <WebsiteLink>Earnmanagement.com</WebsiteLink>
          <PhoneNumber>
            <Country>US</Country> +1 (872) 288 9283
          </PhoneNumber>
          <PhoneNumber>
            <Country>UA</Country> +1 (872) 288 9283
          </PhoneNumber>
        </ContactAddressContainer>
        <ContactInputContainer>
          <ContactInput type="text" placeholder="Your name" />
          <ContactInput type="email" placeholder="Your Email Address" />
          <ContactInput type="text" placeholder="Describe Your Need" />
        </ContactInputContainer>
      </ContactFormContainer>
    </ContactBody>
    <SubmitButtonContainer>
      <SubmitButton>Submit</SubmitButton>
    </SubmitButtonContainer>
  </ContactContainer>
);

export default Contact;
