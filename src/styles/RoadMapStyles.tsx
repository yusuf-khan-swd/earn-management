import styled from "styled-components";
import { BorderProps, Props } from "../types/interfaces";

export const RoadMapContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(8, 1fr);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    margin: 0 30px 0 10px;
  }
`;

export const RoadMapLeftSide = styled.div`
  border-top: 3px solid rgba(255, 255, 255, 0.178);
  border-top-right-radius: 30px;
  margin: -17px -4px 10px -146px;
`;

export const RoadMapRightSide = styled.div``;

export const RoadMapMainContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 8;
`;

export const RoadMapMain = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 3px solid rgba(255, 255, 255, 0.12);
  border-left: 3px solid rgba(255, 255, 255, 0.12);
  border-bottom-left-radius: 30px;

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
  }
`;

export const RoadMapContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoadMapTitleContainer = styled.div`
  margin: 0 0 60px 20px;
`;

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

export const RoadMapMainImageContainer = styled.div`
  background: radial-gradient(
    41.76% 41.76% at 50% 50%,
    rgba(0, 56, 255, 0.24) 0%,
    rgba(0, 133, 255, 0) 100%
  );
  max-width: 460px;

  @media (max-width: 640px) {
    display: none;
  }
`;

export const RoadMapMainImage = styled.img`
  width: 100%;
`;

export const RoadMapRight = styled.div`
  position: relative;
  border-right: 3px solid rgba(255, 255, 255, 0.12);
  border-radius: 30px;
  margin: -5px -14px -6px 0;
  padding: 10px;
`;

export const RoadMapLeft = styled.div<BorderProps>`
  position: relative;
  border-left: ${(props) =>
    props.border ? "3px solid rgba(255, 255, 255, 0.12)" : "none"};
  border-bottom: ${(props) =>
    props.border ? "3px solid rgba(255, 255, 255, 0.12)" : "none"};
  border-top: ${(props) =>
    props.border ? "3px solid rgba(255, 255, 255, 0.12)" : "none"};
  border-radius: 30px 0 0 30px;
  padding: 10px;
`;

export const RoadMapImageContainer = styled.div<Props>`
  position: absolute;
  max-width: 200px;
  top: 32px;
  left: ${(props) => (props.left ? "-120px" : "auto")};
  right: ${(props) => (!props.left ? "-110px" : "auto")};

  @media (max-width: 640px) {
    display: none;
  }
`;

export const RoadMapImage = styled.img`
  width: 100%;
`;

export const YearsRoadMapContent = styled.div<Props>`
  margin: ${(props) => (props.left ? "0 110px" : "0 125px")};
  padding: 15px 0 30px 0;

  @media (max-width: 640px) {
    margin: 10px;
  }
`;

export const YearsRoadMapTitle = styled.h3<Props>`
  font-size: 40px;
  font-weight: normal;
  text-align: ${(props) => (props.left ? "left" : "right")};
  color: #ffffff;
  margin-bottom: 8px;
`;

export const YearsRoadMapSubTitle = styled.h4<Props>`
  font-weight: 500;
  font-size: 33px;
  text-align: ${(props) => (props.left ? "left" : "right")};
  color: #15c4c6;
  margin-bottom: 8px;
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
