import React from "react";
import {
  RoadMapMain,
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
                <YearsImage src={primaryIcon} alt=""></YearsImage>
              </YearsImageContainer>
            </YearsRoadMapLeft>
          </RoadMapContent>
          <RoadMapImageContainer>
            <RoadMapMainImage src={roadMapMainImage} alt="" />
          </RoadMapImageContainer>
        </RoadMapMain>
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
            <YearsImage src={secondaryIcon} alt="" />
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
            <YearsImage src={secondaryIcon} alt="" />
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
            <YearsImage src={secondaryIcon} alt="" />
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
            <YearsImage src={secondaryIcon} alt="" />
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
              <YearsImage src={secondaryIcon} alt="" />
            </YearsImageContainer>
          </YearsRoadMapContent>
        </YearsRoadMapRight>
      </RoadMapMainContainer>
      <RoadMapRightSide></RoadMapRightSide>
    </RoadMapContainer>
  </>
);

export default RoadMap;
