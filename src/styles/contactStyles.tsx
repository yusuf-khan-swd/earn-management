import styled from "styled-components";

export const ContactContainer = styled.div`
  color: white;
  margin: 0 140px;
  font-weight: normal;
  border-top: 3px solid rgba(255, 255, 255, 0.12);
  border-left: 3px solid rgba(255, 255, 255, 0.12);
  border-top-left-radius: 30px;
`;

export const ContactBody = styled.div`
  margin-left: 35px;
  margin-top: 50px;
`;

export const ContactHeadingContainer = styled.div`
  margin-bottom: 120px;
`;

export const ContactTitle = styled.h4`
  font-size: 40px;
`;

export const ContactSubTitle = styled.p``;

export const ContactFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
`;

export const ContactAddressContainer = styled.div``;

export const WebsiteLink = styled.p`
  font-size: 20px;
  margin-bottom: 55px;
`;

export const PhoneNumber = styled.p`
  font-size: 20px;
  margin-bottom: 55px;
`;

export const Country = styled.span`
  color: #6c6c6c;
`;

export const ContactInputContainer = styled.div``;

export const ContactInput = styled.input.attrs(({ type, placeholder }) => ({
  type: type,
  placeholder: placeholder,
}))`
  border: none;
  padding: 12px 0px;
  width: 100%;
  background: transparent;
  margin-left: 4px;
  border-bottom: 1px solid rgba(255, 255, 255, 0.21);
  margin-bottom: 25px;
`;

export const ImageContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
`;

export const ImageWrapper = styled.div`
  max-width: 126px;
  cursor: pointer;
`;

export const SubmitButtonImage = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  width: 100%;
`;
