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
  ImageWrapper,
  SubmitButtonImage,
  WebsiteLink,
  ImageContainer,
} from "../styles/contactStyles";

import submitImage from "../assets/submit-button.png";

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
          <ContactInputContainer>
            <ContactInput
              type={"text"}
              placeholder={"Your name"}
            ></ContactInput>
            <ContactInput
              type={"email"}
              placeholder={"Your Email Address"}
            ></ContactInput>
            <ContactInput
              type={"text"}
              placeholder={"Describe Your Need"}
            ></ContactInput>
          </ContactInputContainer>
        </ContactFormContainer>
      </ContactBody>
      <ImageContainer>
        <ImageWrapper>
          <SubmitButtonImage src={submitImage}></SubmitButtonImage>
        </ImageWrapper>
      </ImageContainer>
    </ContactContainer>
  );
};

export default Contact;
