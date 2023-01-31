import React from "react";
import {
  Banner,
  BannerBody,
  BannerContentSection,
  BannerImage,
  BannerImageSection,
  BannerTitle,
  ButtonIcon,
  InputContainer,
  InputEmail,
  RoadMapContainer,
  RoadMapContent,
  RoadMapImageContainer,
  RoadMapMainImage,
  RoadMapSubTitle,
  RoadMapTitle,
  RoadMapTitleContainer,
  Select,
  SelectOption,
  YearsRoadMapBody,
  YearsRoadMapBodyText,
  YearsRoadMapLeft,
  YearsRoadMapRight,
  YearsRoadMapContent,
  YearsRoadMapSubTitle,
  YearsRoadMapTitle,
  YearsImageContainer,
  YearsImage,
} from "../../styles";
import Navbar from "../Navbar/Navbar";

const Home = () => {
  return (
    <>
      <Navbar></Navbar>
      <Banner>
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
            <ButtonIcon></ButtonIcon>
          </InputContainer>
        </BannerContentSection>
        <BannerImageSection>
          <BannerImage></BannerImage>
        </BannerImageSection>
      </Banner>
      <RoadMapContainer>
        <RoadMapContent>
          <RoadMapTitleContainer>
            <RoadMapTitle>Road Map</RoadMapTitle>
            <RoadMapSubTitle>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </RoadMapSubTitle>
          </RoadMapTitleContainer>
          <YearsRoadMapLeft style={{ border: "none" }}>
            <YearsRoadMapContent left={true}>
              <YearsRoadMapTitle left={true}>2023</YearsRoadMapTitle>
              <YearsRoadMapSubTitle left>Q2</YearsRoadMapSubTitle>
              <YearsRoadMapBody left>
                <YearsRoadMapBodyText>
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  Suspendisse id purus augue. Lorem ipsum dolor
                </YearsRoadMapBodyText>
              </YearsRoadMapBody>
            </YearsRoadMapContent>
            <YearsImageContainer>
              <YearsImage></YearsImage>
            </YearsImageContainer>
          </YearsRoadMapLeft>
        </RoadMapContent>
        <RoadMapImageContainer>
          <RoadMapMainImage></RoadMapMainImage>
        </RoadMapImageContainer>
      </RoadMapContainer>
      <YearsRoadMapRight>
        <YearsRoadMapContent left={false}>
          <YearsRoadMapTitle left={false}>2022</YearsRoadMapTitle>
          <YearsRoadMapSubTitle left={false}>Q2</YearsRoadMapSubTitle>
          <YearsRoadMapBody left={false}>
            <YearsRoadMapBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id purus augue. Lorem ipsum dolor
            </YearsRoadMapBodyText>
          </YearsRoadMapBody>
        </YearsRoadMapContent>
      </YearsRoadMapRight>
      <YearsRoadMapLeft>
        <YearsRoadMapContent left={true}>
          <YearsRoadMapTitle left={true}>2023</YearsRoadMapTitle>
          <YearsRoadMapSubTitle left>Q2</YearsRoadMapSubTitle>
          <YearsRoadMapBody left>
            <YearsRoadMapBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id purus augue. Lorem ipsum dolor
            </YearsRoadMapBodyText>
          </YearsRoadMapBody>
        </YearsRoadMapContent>
      </YearsRoadMapLeft>
      <YearsRoadMapRight>
        <YearsRoadMapContent left={false}>
          <YearsRoadMapTitle left={false}>2022</YearsRoadMapTitle>
          <YearsRoadMapSubTitle left={false}>Q2</YearsRoadMapSubTitle>
          <YearsRoadMapBody left={false}>
            <YearsRoadMapBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id purus augue. Lorem ipsum dolor
            </YearsRoadMapBodyText>
          </YearsRoadMapBody>
        </YearsRoadMapContent>
      </YearsRoadMapRight>
      <YearsRoadMapLeft>
        <YearsRoadMapContent left={true}>
          <YearsRoadMapTitle left={true}>2023</YearsRoadMapTitle>
          <YearsRoadMapSubTitle left>Q2</YearsRoadMapSubTitle>
          <YearsRoadMapBody left>
            <YearsRoadMapBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id purus augue. Lorem ipsum dolor
            </YearsRoadMapBodyText>
          </YearsRoadMapBody>
        </YearsRoadMapContent>
      </YearsRoadMapLeft>
      <YearsRoadMapRight>
        <YearsRoadMapContent left={false}>
          <YearsRoadMapTitle left={false}>2022</YearsRoadMapTitle>
          <YearsRoadMapSubTitle left={false}>Q2</YearsRoadMapSubTitle>
          <YearsRoadMapBody left={false}>
            <YearsRoadMapBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id purus augue. Lorem ipsum dolor
            </YearsRoadMapBodyText>
          </YearsRoadMapBody>
        </YearsRoadMapContent>
      </YearsRoadMapRight>
      <YearsRoadMapLeft>
        <YearsRoadMapContent left={true}>
          <YearsRoadMapTitle left={true}>2023</YearsRoadMapTitle>
          <YearsRoadMapSubTitle left>Q2</YearsRoadMapSubTitle>
          <YearsRoadMapBody left>
            <YearsRoadMapBodyText>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              Suspendisse id purus augue. Lorem ipsum dolor
            </YearsRoadMapBodyText>
          </YearsRoadMapBody>
        </YearsRoadMapContent>
      </YearsRoadMapLeft>
    </>
  );
};

export default Home;
