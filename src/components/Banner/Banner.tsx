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
} from "../../styles/bannerStyles";

import btnPng from "../../assets/btnPng.png";
import bannerImage from "../../assets/banner.png";

const Banner = () => {
  return (
    <BannerWrapper>
      <BannerContentSection>
        <BannerTitle>Guild Hub of the Metaverse</BannerTitle>
        <BannerBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          sagittis mattis hendrerit. Praesent vel risus in risus vestibulum
          aliquet.
        </BannerBody>
        <InputContainer>
          <InputEmail></InputEmail>
          <Select>
            <SelectOption>Owner</SelectOption>
            <SelectOption>Audi</SelectOption>
          </Select>
          <ButtonIcon src={btnPng}></ButtonIcon>
        </InputContainer>
      </BannerContentSection>
      <BannerImageSection>
        <BannerImage src={bannerImage}></BannerImage>
        <CardContainer top="110px" left="20px" right="auto" bottom="auto">
          <CardBody>Automate payments for quick transparent cashout?</CardBody>
        </CardContainer>
        <CardContainer top="auto" left="50px" right="auto" bottom="120px">
          <CardBody>Automate payments for quick transparent cashout?</CardBody>
        </CardContainer>
      </BannerImageSection>
    </BannerWrapper>
  );
};

export default Banner;
