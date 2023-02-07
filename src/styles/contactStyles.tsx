import styled from "styled-components";

export const ContactWrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);
`;

export const ContactContainer = styled.div`
  color: white;
  grid-column-start: 2;
  grid-column-end: 8;
  font-weight: normal;
  border-top: 3px solid rgba(255, 255, 255, 0.12);
  border-left: 3px solid rgba(255, 255, 255, 0.12);
  border-top-left-radius: 30px;

  @media (max-width: 640px) {
    margin: 0 30px 0 10px;
    grid-column-start: 1;
    grid-column-end: 9;
  }
`;

export const ContactBody = styled.div`
  margin: 50px 0 0 35px;
`;

export const ContactHeadingContainer = styled.div`
  margin-bottom: 120px;

  @media (max-width: 640px) {
    margin-bottom: 80px;
  }
`;

export const ContactTitle = styled.h4`
  font-size: 40px;
  margin-bottom: 10px;

  @media (max-width: 640px) {
    font-size: 30px;
  }
`;

export const ContactSubTitle = styled.p``;

export const ContactFormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
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
  margin-right: 5px;
`;

export const ContactInputContainer = styled.div`
  margin-right: 5px;
`;

export const ContactInput = styled.input`
  border: none;
  padding: 12px 0px;
  width: 100%;
  background: transparent;
  border-bottom: 1px solid rgba(255, 255, 255, 0.21);
  margin: 0 0 25px 4px;
  outline: none;
  color: white;
`;

export const SubmitButtonContainer = styled.div`
  display: flex;
  justify-content: end;
  align-items: flex-end;
  margin-top: -30px;
  padding-bottom: 50px;

  @media (max-width: 640px) {
    margin: 0;
    justify-content: center;
  }
`;

export const SubmitButton = styled.button`
  background: linear-gradient(180deg, #107bee 0%, #359dfd 100%);
  border: none;
  color: white;
  font-size: 18px;
  min-height: 156px;
  min-width: 156px;
  padding: 8px;
  border-radius: 50%;
  cursor: pointer;
  font-weight: 500;

  @media (max-width: 640px) {
    border-radius: 30px;
    min-height: 70px;
  }
`;
