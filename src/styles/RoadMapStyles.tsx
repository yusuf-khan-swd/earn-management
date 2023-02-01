import styled from "styled-components";
import { Props } from "../types/interfaces";
import roadMapMainImage from "../assets/roadMapMainImage.png";
import left1 from "../assets/left1.png";

export const RoadMapWrapper = styled.div`
  margin: 0 140px;
`;

export const RoadMapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 3px solid rgba(255, 255, 255, 0.12);
  border-left: 3px solid rgba(255, 255, 255, 0.12);
  /* border-radius: 30px; */
`;

export const RoadMapContent = styled.div`
  display: flex;
  flex-direction: column;
  /* justify-content: space-between; */
`;

export const RoadMapTitleContainer = styled.div``;

export const RoadMapTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 40px;
  color: #ffffff;
  margin: 0px;
`;

export const RoadMapSubTitle = styled.p`
  font-weight: 400;
  font-size: 15px;
  color: #ffffff;
  margin: 0px;
`;

export const RoadMapImageContainer = styled.div`
  background: radial-gradient(
    41.76% 41.76% at 50% 50%,
    rgba(0, 56, 255, 0.24) 0%,
    rgba(0, 133, 255, 0) 100%
  );
`;

export const RoadMapMainImage = styled.img.attrs(() => ({
  src: roadMapMainImage,
}))`
  width: 100%;
`;

export const YearsRoadMapRight = styled.div`
  border-right: 3px solid rgba(255, 255, 255, 0.12);
  border-bottom: 3px solid rgba(255, 255, 255, 0.12);
  /* border-radius: 30px; */
`;

export const YearsRoadMapLeft = styled.div`
  border-left: 3px solid rgba(255, 255, 255, 0.12);
  border-bottom: 3px solid rgba(255, 255, 255, 0.12);
  /* border-radius: 30px; */
  border-radius: 0 0 0 30px;
  position: relative;
`;

export const YearsImageContainer = styled.div`
  position: absolute;
  top: 0;
  left: -120px;
`;

export const YearsImage = styled.img.attrs(() => ({
  src: left1,
}))`
  max-width: 200px;
`;

export const YearsRoadMapContent = styled.div<Props>`
  margin: ${(props) => (props.left ? "0 90px" : "0 90px")};
`;

export const YearsRoadMapTitle = styled.h3<Props>`
  font-size: 71px;
  line-height: 89px;
  text-align: ${(props) => (props.left ? "left" : "right")};
  color: #ffffff;
  margin: 0;
`;

export const YearsRoadMapSubTitle = styled.h4<Props>`
  font-weight: 500;
  font-size: 33px;
  text-align: ${(props) => (props.left ? "left" : "right")};
  color: #15c4c6;
  margin: 0;
`;

export const YearsRoadMapBody = styled.div<Props>`
  display: flex;
  justify-content: ${(props) => (props.left ? "start" : "end")};
`;

export const YearsRoadMapBodyText = styled.p<Props>`
  max-width: 372px;
  color: rgba(255, 255, 255, 0.39);
  text-align: ${(props) => (props.left ? "left" : "right")};
`;
