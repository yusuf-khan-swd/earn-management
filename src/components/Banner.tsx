import React from "react";
import {
  BannerBody,
  BannerContentSection,
  BannerContentWrapper,
  BannerImage,
  BannerImageSection,
  BannerTitle,
  BannerWrapper,
  BreakLine,
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
    <BannerContentWrapper>
      <BannerContentSection>
        <BannerTitle>Guild Hub of the Metaverse</BannerTitle>
        <BannerBody>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean
          sagittis mattis hendrerit. Praesent vel risus in risus vestibulum
          aliquet.
        </BannerBody>
        <InputContainer>
          <InputEmail type="email" placeholder="Enter you Email Address" />
          <Select>
            <SelectOption value="owner">Owner</SelectOption>
            <SelectOption value="audit">Audi</SelectOption>
          </Select>
          <ButtonIcon src={btnPng} alt="banner" />
        </InputContainer>
      </BannerContentSection>
    </BannerContentWrapper>
    <BannerImageSection>
      <BannerImage src={bannerImage} alt="banner" />
      <CardContainer top="25%" right="auto" bottom="auto" left="5%">
        <CardBody>Automate payments for quick transparent cashout?</CardBody>
      </CardContainer>
      <CardContainer top="auto" right="auto" bottom="25%" left="10%">
        <CardBody>
          All on one platform that doesn’t lag? You’re Kidding?
        </CardBody>
      </CardContainer>
      <CardContainer top="10%" right="5%" bottom="auto" left="auto">
        <CardBody>You mean, i can track my scholars’ performance</CardBody>
      </CardContainer>
      <CardContainer top="auto" right="13%" bottom="30%" left="auto">
        <CardBody>
          Search and Breed <BreakLine /> Axies and NFTs
        </CardBody>
      </CardContainer>
    </BannerImageSection>
  </BannerWrapper>
);

export default Banner;
