import React from "react";
import {
  BannerBody,
  BannerContentSection,
  BannerImage,
  BannerImageSection,
  BannerTitle,
  BannerWrapper,
  ButtonIcon,
  CardBody,
  CardContainer,
  InputContainer,
  InputEmail,
  Select,
  SelectOption,
} from "../styles/bannerStyles";

import btnPng from "../assets/images/btnPng.png";
import bannerImage from "../assets/images/banner.png";

const Banner = () => (
  <BannerWrapper>
    <BannerContentSection>
      <BannerTitle>Guild Hub of the Metaverse</BannerTitle>
      <BannerBody>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean sagittis
        mattis hendrerit. Praesent vel risus in risus vestibulum aliquet.
      </BannerBody>
      <InputContainer>
        <InputEmail
          type="email"
          placeholder="Enter you Email Address"
        ></InputEmail>
        <Select>
          <SelectOption value="owner">Owner</SelectOption>
          <SelectOption value="audit">Audi</SelectOption>
        </Select>
        <ButtonIcon src={btnPng} alt=""></ButtonIcon>
      </InputContainer>
    </BannerContentSection>
    <BannerImageSection>
      <BannerImage src={bannerImage} alt=""></BannerImage>
      <CardContainer top="120px" right="auto" bottom="auto" left="20px">
        <CardBody>Automate payments for quick transparent cashout?</CardBody>
      </CardContainer>
      <CardContainer top="auto" right="auto" bottom="120px" left="50px">
        <CardBody>
          All on one platform that doesn’t lag? You’re Kidding?
        </CardBody>
      </CardContainer>
      <CardContainer top="80px" right="-20px" bottom="auto" left="auto">
        <CardBody>You mean, i can track my scholars’ performance</CardBody>
      </CardContainer>
      <CardContainer top="auto" right="-20px" bottom="120px" left="auto">
        <CardBody>Search and Breed Axies and NFTs</CardBody>
      </CardContainer>
    </BannerImageSection>
  </BannerWrapper>
);

export default Banner;
