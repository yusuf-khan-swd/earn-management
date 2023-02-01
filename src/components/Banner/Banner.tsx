import React from "react";
import {
  BannerBody,
  BannerContentSection,
  BannerImage,
  BannerImageSection,
  BannerTitle,
  BannerWrapper,
  ButtonIcon,
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
      </BannerImageSection>
    </BannerWrapper>
  );
};

export default Banner;
