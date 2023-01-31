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
} from "../../styles/RoadMap";

const RoadMap = () => {
  return (
    <RoadMapWrapper>
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
    </RoadMapWrapper>
  );
};

export default RoadMap;
