import styled from "styled-components";
import { CardPositionProps } from "../types/interfaces";

export const BannerWrapper = styled.div`
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const BannerContentWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const BannerContentSection = styled.div`
  max-width: 445px;
`;

export const BannerTitle = styled.h1`
  font: 500 51px outfit;
  color: white;
  margin-bottom: 20px;

  @media (max-width: 640px) {
    font-size: 35px;
    margin: 10px 0 15px 0;
  }
`;

export const BannerBody = styled.p`
  font: 200 14px outfit;
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
  margin-bottom: 40px;
`;

export const InputEmail = styled.input`
  border: none;
  padding: 12px 0px;
  background: transparent;
  margin-left: 4px;
  outline: none;
  color: white;
  padding-left: 12px;
`;

export const Select = styled.select`
  background: transparent;
  color: white;
  border: none;

  option: {
    margin-left: 10px;
  }
`;
export const SelectOption = styled.option``;

export const ButtonIcon = styled.img`
  max-width: 50px;
  margin-right: 2px;
`;

export const BannerImageSection = styled.div`
  overflow: hidden;
  background: radial-gradient(
    41.76% 41.76% at 50% 50%,
    rgba(0, 209, 255, 0.24) 0%,
    rgba(0, 163, 255, 0) 100%
  );
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
`;

export const BannerImage = styled.img`
  max-width: 716px;

  @media (max-width: 1120px) {
    max-width: 615px;
    max-height: 100%;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;

const CommonCardStyles = styled.div`
  position: absolute;
  max-width: 220px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(40px);
  border-radius: 90px;
  padding: 18px;

  @media (max-width: 768px) {
    border-radius: 18px;
    padding: 6px 5px 5px 15px;
    max-width: 130px;
  }
`;

export const LeftTopCardContainer = styled(CommonCardStyles)`
  top: 150px;
  left: 20px;

  @media (max-width: 640px) {
    top: 79px;
    left: 2px;
  }
`;

export const LeftBottomCardContainer = styled(CommonCardStyles)`
  bottom: 135px;
  left: 35px;

  @media (max-width: 640px) {
    bottom: 58px;
    left: 6px;
  }
`;

export const RightTopCardContainer = styled(CommonCardStyles)`
  top: 65px;
  right: 3px;

  @media (max-width: 640px) {
    top: 25px;
    right: 4px;
  }
`;

export const RightBottomCardContainer = styled(CommonCardStyles)`
  right: 58px;
  bottom: 175px;

  @media (max-width: 640px) {
    right: 17px;
    bottom: 80px;
  }
`;

export const CardContent = styled.p`
  color: white;
  font-size: 14px;

  @media (max-width: 640px) {
    font-size: 10px;
  }
`;

export const BreakLine = styled.br``;
