import React from "react";
import {
  ContactAddressContainer,
  ContactBody,
  ContactContainer,
  ContactFormContainer,
  ContactHeadingContainer,
  ContactInputContainer,
  ContactSubTitle,
  ContactTitle,
  Country,
  PhoneNumber,
  WebsiteLink,
} from "../styles/contactStyles";

const Contact = () => {
  return (
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
          <ContactInputContainer></ContactInputContainer>
        </ContactFormContainer>
      </ContactBody>
    </ContactContainer>
  );
};

export default Contact;
