import styled from "styled-components";
import btnPng from "../assets/btnPng.png";
import { Props } from "../types/interfaces";
import bannerImage from "../assets/banner.png";
import roadMapMainImage from "../assets/roadmapMainImage.png";
import left1 from "../assets/left1.png";

export const Banner = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BannerContentSection = styled.div``;

export const BannerTitle = styled.h1`
  font-weight: 500;
  font-size: 80px;
  color: white;
  margin-bottom: 10px;
`;

export const BannerBody = styled.p`
  font-weight: 400;
  font-size: 20px;
  color: white;
  margin-bottom: 30px;
`;

export const InputContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  border: 1px solid rgba(255, 255, 255, 0.18);
  border-radius: 89px;
  max-width: 400px;
`;

export const InputEmail = styled.input.attrs(() => ({
  type: "email",
  placeholder: "Enter you Email Address",
}))`
  border: none;
  padding: 12px 0px;
  width: 60%;
  background: transparent;
  margin-left: 4px;
`;

export const Select = styled.select`
  background: transparent;
  color: white;
  border: none;

  option: {
    margin-left: 10px;
  }
`;
export const SelectOption = styled.option.attrs(() => ({
  value: "0",
}))``;

export const ButtonIcon = styled.img.attrs(() => ({
  src: btnPng,
}))`
  max-width: 50px;
  margin-right: 2px;
`;

export const BannerImageSection = styled.div`
  background: radial-gradient(
    41.76% 41.76% at 50% 50%,
    rgba(0, 209, 255, 0.24) 0%,
    rgba(0, 163, 255, 0) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const BannerImage = styled.img.attrs(() => ({
  src: bannerImage,
}))`
  width: 100%;
`;

export const RoadMapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  border-bottom: 3px solid rgba(255, 255, 255, 0.12);
  border-left: 3px solid rgba(255, 255, 255, 0.12);
  /* border-radius: 30px; */
  margin: 0;
`;

export const RoadMapContent = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
`;

export const RoadMapTitleContainer = styled.div``;

export const RoadMapTitle = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 80px;
  color: #ffffff;
  margin: 0px;
`;

export const RoadMapSubTitle = styled.p`
  font-weight: 400;
  font-size: 18px;
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
  left: -100px;
`;

export const YearsImage = styled.img.attrs(() => ({
  src: left1,
}))`
  max-width: 200px;
`;

export const YearsRoadMapContent = styled.div<Props>`
  margin: ${(props) => (props.left ? "0 20px" : "0 20px")};
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

export const YearsRoadMapBodyText = styled.p`
  max-width: 372px;
  color: rgba(255, 255, 255, 0.39);
  text-align: right;
`;
