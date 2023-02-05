import React from "react";
import {
  RoadMapMain,
  RoadMapContent,
  RoadMapMainImageContainer,
  RoadMapMainImage,
  RoadMapSubTitle,
  RoadMapTitle,
  RoadMapTitleContainer,
  YearsRoadMapBodyText,
  RoadMapLeft,
  RoadMapRight,
  YearsRoadMapContent,
  YearsRoadMapSubTitle,
  YearsRoadMapTitle,
  RoadMapImageContainer,
  RoadMapImage,
  YearsRoadMapBody,
  RoadMapMainContainer,
  RoadMapContainer,
  RoadMapLeftSide,
  RoadMapRightSide,
} from "../styles/RoadMapStyles";

import roadMapMainImage from "../assets/images/roadMapMainImage.png";
import primaryIcon from "../assets/images/primaryIcon.png";
import secondaryIcon from "../assets/images/secondaryIcon.png";

const RoadMap = () => (
  <>
    <RoadMapContainer>
      <RoadMapLeftSide></RoadMapLeftSide>
      <RoadMapMainContainer>
        <RoadMapMain>
          <RoadMapContent>
            <RoadMapTitleContainer>
              <RoadMapTitle>Road Map</RoadMapTitle>
              <RoadMapSubTitle>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
              </RoadMapSubTitle>
            </RoadMapTitleContainer>
            <RoadMapLeft border={false}>
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
              <RoadMapImageContainer left={true}>
                <RoadMapImage src={primaryIcon} alt="icon"></RoadMapImage>
              </RoadMapImageContainer>
            </RoadMapLeft>
          </RoadMapContent>
          <RoadMapMainImageContainer>
            <RoadMapMainImage src={roadMapMainImage} alt="icon" />
          </RoadMapMainImageContainer>
        </RoadMapMain>
        <RoadMapRight>
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
          <RoadMapImageContainer left={false}>
            <RoadMapImage src={secondaryIcon} alt="icon" />
          </RoadMapImageContainer>
        </RoadMapRight>
        <RoadMapLeft border={true}>
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
          <RoadMapImageContainer left={true}>
            <RoadMapImage src={secondaryIcon} alt="icon" />
          </RoadMapImageContainer>
        </RoadMapLeft>
        <RoadMapRight>
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
          <RoadMapImageContainer left={false}>
            <RoadMapImage src={secondaryIcon} alt="icon" />
          </RoadMapImageContainer>
        </RoadMapRight>
        <RoadMapLeft border={true}>
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
          <RoadMapImageContainer left={true}>
            <RoadMapImage src={secondaryIcon} alt="icon" />
          </RoadMapImageContainer>
        </RoadMapLeft>
        <RoadMapRight>
          <YearsRoadMapContent left={false}>
            <YearsRoadMapTitle left={false}>2022</YearsRoadMapTitle>
            <YearsRoadMapSubTitle left={false}>Q2</YearsRoadMapSubTitle>
            <YearsRoadMapBody left={false}>
              <YearsRoadMapBodyText left={false}>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                Suspendisse id purus augue. Lorem ipsum dolor
              </YearsRoadMapBodyText>
            </YearsRoadMapBody>
            <RoadMapImageContainer left={false}>
              <RoadMapImage src={secondaryIcon} alt="icon" />
            </RoadMapImageContainer>
          </YearsRoadMapContent>
        </RoadMapRight>
      </RoadMapMainContainer>
      <RoadMapRightSide></RoadMapRightSide>
    </RoadMapContainer>
  </>
);

export default RoadMap;
