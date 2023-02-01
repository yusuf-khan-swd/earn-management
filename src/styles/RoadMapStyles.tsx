import styled from "styled-components";
import { BorderProps, Props } from "../types/interfaces";

export const RoadMapTopBorder = styled.div`
  border-top: 3px solid rgba(255, 255, 255, 0.12);
  width: 142px;
  border-radius: 30px;
  margin-bottom: -0.5px;
`;

export const RoadMapWrapper = styled.div`
  margin: 0 140px;
`;

export const RoadMapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 3px solid rgba(255, 255, 255, 0.12);
  border-left: 3px solid rgba(255, 255, 255, 0.12);
  border-bottom-left-radius: 30px;
`;

export const RoadMapContent = styled.div`
  display: flex;
  flex-direction: column;
`;

export const RoadMapTitleContainer = styled.div`
  margin-left: 20px;
  margin-bottom: 60px;
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

export const RoadMapImageContainer = styled.div`
  background: radial-gradient(
    41.76% 41.76% at 50% 50%,
    rgba(0, 56, 255, 0.24) 0%,
    rgba(0, 133, 255, 0) 100%
  );
  max-width: 460px;
`;

export const RoadMapMainImage = styled.img`
  width: 100%;
`;

export const YearsRoadMapRight = styled.div`
  position: relative;
  border-right: 3px solid rgba(255, 255, 255, 0.12);
`;

export const YearsRoadMapLeft = styled.div<BorderProps>`
  position: relative;
  border-left: ${(props) =>
    props.border ? "3px solid rgba(255, 255, 255, 0.12)" : "none"};
  border-bottom: ${(props) =>
    props.border ? "3px solid rgba(255, 255, 255, 0.12)" : "none"};
  border-top: ${(props) =>
    props.border ? "3px solid rgba(255, 255, 255, 0.12)" : "none"};
  border-radius: 30px 0 0 30px;
`;

export const YearsImageContainer = styled.div<Props>`
  position: absolute;
  top: 22px;
  left: ${(props) => (props.left ? "-120px" : "auto")};
  right: ${(props) => (!props.left ? "-120px" : "auto")};
`;

export const YearsImage = styled.img`
  max-width: 200px;
`;

export const YearsRoadMapContent = styled.div<Props>`
  margin: ${(props) => (props.left ? "0 90px" : "0 90px")};
  padding-bottom: 30px;
  padding-top: 15px;
`;

export const YearsRoadMapTitle = styled.h3<Props>`
  font-size: 40px;
  font-weight: normal;
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
