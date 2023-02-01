import React from "react";
import {
  RoadMapContainer,
  RoadMapContent,
  RoadMapImageContainer,
  RoadMapMainImage,
  RoadMapSubTitle,
  RoadMapTitle,
  RoadMapTitleContainer,
  YearsRoadMapBodyText,
  YearsRoadMapLeft,
  YearsRoadMapRight,
  YearsRoadMapContent,
  YearsRoadMapSubTitle,
  YearsRoadMapTitle,
  YearsImageContainer,
  YearsImage,
  YearsRoadMapBody,
  RoadMapWrapper,
  RoadMapTopBorder,
} from "../../styles/RoadMapStyles";
import roadMapMainImage from "../../assets/roadMapMainImage.png";
import primaryIcon from "../../assets/primaryIcon.png";
import secondaryIcon from "../../assets/secondaryIcon.png";

const RoadMap = () => {
  return (
    <>
      {/* <RoadMapTopBorder></RoadMapTopBorder> */}
      <RoadMapWrapper>
        <RoadMapContainer>
          <RoadMapContent>
            <RoadMapTitleContainer>
              <RoadMapTitle>Road Map</RoadMapTitle>
              <RoadMapSubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </RoadMapSubTitle>
            </RoadMapTitleContainer>
            <YearsRoadMapLeft border={false}>
              <YearsRoadMapContent left={true}>
                <YearsRoadMapTitle left={true}>2023</YearsRoadMapTitle>
                <YearsRoadMapSubTitle left={true}>Q2</YearsRoadMapSubTitle>
                <YearsRoadMapBody left={true}>
                  <YearsRoadMapBodyText left={true}>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                    Suspendisse id purus augue. Lorem ipsum dolor
                  </YearsRoadMapBodyText>
                </YearsRoadMapBody>
              </YearsRoadMapContent>
              <YearsImageContainer left={true}>
                <YearsImage src={primaryIcon}></YearsImage>
              </YearsImageContainer>
            </YearsRoadMapLeft>
          </RoadMapContent>
          <RoadMapImageContainer>
            <RoadMapMainImage src={roadMapMainImage}></RoadMapMainImage>
          </RoadMapImageContainer>
        </RoadMapContainer>
        <YearsRoadMapRight>
          <YearsRoadMapContent left={false}>
            <YearsRoadMapTitle left={false}>2022</YearsRoadMapTitle>
            <YearsRoadMapSubTitle left={false}>Q2</YearsRoadMapSubTitle>
            <YearsRoadMapBody left={false}>
              <YearsRoadMapBodyText left={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id purus augue. Lorem ipsum dolor
              </YearsRoadMapBodyText>
            </YearsRoadMapBody>
          </YearsRoadMapContent>
          <YearsImageContainer left={false}>
            <YearsImage src={secondaryIcon}></YearsImage>
          </YearsImageContainer>
        </YearsRoadMapRight>
        <YearsRoadMapLeft border={true}>
          <YearsRoadMapContent left={true}>
            <YearsRoadMapTitle left={true}>2023</YearsRoadMapTitle>
            <YearsRoadMapSubTitle left={true}>Q2</YearsRoadMapSubTitle>
            <YearsRoadMapBody left={true}>
              <YearsRoadMapBodyText left={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id purus augue. Lorem ipsum dolor
              </YearsRoadMapBodyText>
            </YearsRoadMapBody>
          </YearsRoadMapContent>
          <YearsImageContainer left={true}>
            <YearsImage src={secondaryIcon}></YearsImage>
          </YearsImageContainer>
        </YearsRoadMapLeft>
        <YearsRoadMapRight>
          <YearsRoadMapContent left={false}>
            <YearsRoadMapTitle left={false}>2022</YearsRoadMapTitle>
            <YearsRoadMapSubTitle left={false}>Q2</YearsRoadMapSubTitle>
            <YearsRoadMapBody left={false}>
              <YearsRoadMapBodyText left={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id purus augue. Lorem ipsum dolor
              </YearsRoadMapBodyText>
            </YearsRoadMapBody>
          </YearsRoadMapContent>
          <YearsImageContainer left={false}>
            <YearsImage src={secondaryIcon}></YearsImage>
          </YearsImageContainer>
        </YearsRoadMapRight>
        <YearsRoadMapLeft border={true}>
          <YearsRoadMapContent left={true}>
            <YearsRoadMapTitle left={true}>2023</YearsRoadMapTitle>
            <YearsRoadMapSubTitle left={true}>Q2</YearsRoadMapSubTitle>
            <YearsRoadMapBody left={true}>
              <YearsRoadMapBodyText left={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id purus augue. Lorem ipsum dolor
              </YearsRoadMapBodyText>
            </YearsRoadMapBody>
          </YearsRoadMapContent>
          <YearsImageContainer left={true}>
            <YearsImage src={secondaryIcon}></YearsImage>
          </YearsImageContainer>
        </YearsRoadMapLeft>
        <YearsRoadMapRight>
          <YearsRoadMapContent left={false}>
            <YearsRoadMapTitle left={false}>2022</YearsRoadMapTitle>
            <YearsRoadMapSubTitle left={false}>Q2</YearsRoadMapSubTitle>
            <YearsRoadMapBody left={false}>
              <YearsRoadMapBodyText left={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id purus augue. Lorem ipsum dolor
              </YearsRoadMapBodyText>
            </YearsRoadMapBody>
            <YearsImageContainer left={false}>
              <YearsImage src={secondaryIcon}></YearsImage>
            </YearsImageContainer>
          </YearsRoadMapContent>
        </YearsRoadMapRight>
        <YearsRoadMapLeft border={true}>
          <YearsRoadMapContent left={true}>
            <YearsRoadMapTitle left={true}>2023</YearsRoadMapTitle>
            <YearsRoadMapSubTitle left={true}>Q2</YearsRoadMapSubTitle>
            <YearsRoadMapBody left={true}>
              <YearsRoadMapBodyText left={true}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id purus augue. Lorem ipsum dolor
              </YearsRoadMapBodyText>
            </YearsRoadMapBody>
          </YearsRoadMapContent>
          <YearsImageContainer left={true}>
            <YearsImage src={secondaryIcon}></YearsImage>
          </YearsImageContainer>
        </YearsRoadMapLeft>
      </RoadMapWrapper>
    </>
  );
};

export default RoadMap;
