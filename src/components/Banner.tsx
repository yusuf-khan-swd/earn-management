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
  CardContent,
  InputContainer,
  InputEmail,
  LeftTopCardContainer,
  Select,
  SelectOption,
  LeftBottomCardContainer,
  RightTopCardContainer,
  RightBottomCardContainer,
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
      <LeftTopCardContainer>
        <CardContent>Automate payments for quick transparent?</CardContent>
      </LeftTopCardContainer>
      <LeftBottomCardContainer>
        <CardContent>All on one platform that doesn’t lag?</CardContent>
      </LeftBottomCardContainer>
      <RightTopCardContainer>
        <CardContent>You mean, i can track my scholars?</CardContent>
      </RightTopCardContainer>
      <RightBottomCardContainer>
        <CardContent>
          Search and Breed <BreakLine /> Axies and NFTs
        </CardContent>
      </RightBottomCardContainer>
    </BannerImageSection>
  </BannerWrapper>
);

export default Banner;
