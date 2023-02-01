import styled from "styled-components";
import btnPng from "../assets/btnPng.png";
import bannerImage from "../assets/banner.png";

export const BannerWrapper = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
  }
`;

export const BannerContentSection = styled.div``;

export const BannerTitle = styled.h1`
  font-weight: 500;
  font-size: 70px;
  color: white;
  margin-bottom: 10px;
`;

export const BannerBody = styled.p`
  font-weight: 400;
  font-size: 15px;
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