import styled from "styled-components";
import { CardPositionProps } from "../types/interfaces";

export const BannerWrapper = styled.div`
  padding: 0 55px;
  margin-bottom: 60px;
  display: grid;
  grid-template-columns: 1fr 1fr;

  @media (max-width: 768px) {
    grid-template-columns: 1fr;
    padding: 0 20px;
  }
`;

export const BannerContentSection = styled.div`
  max-width: 480px;
`;

export const BannerTitle = styled.h1`
  font-weight: 500;
  font-size: 51px;
  color: white;
  margin: 66px 0 15px 0;

  @media (max-width: 640px) {
    font-size: 35px;
    margin: 25px 0 15px 0;
  }
`;

export const BannerBody = styled.p`
  font-size: 15px;
  color: white;
  margin-bottom: 30px;
  font-weight: 200;
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
  max-height: 550px;

  @media (max-width: 1120px) {
    max-width: 615px;
    max-height: 100%;
  }
  @media (max-width: 640px) {
    width: 100%;
    height: 100%;
  }
`;

export const CardContainer = styled.div<CardPositionProps>`
  position: absolute;
  top: ${(props) => props.top};
  right: ${(props) => props.right};
  bottom: ${(props) => props.bottom};
  left: ${(props) => props.left};
  max-width: 220px;
  background: rgba(255, 255, 255, 0.06);
  backdrop-filter: blur(40px);
  border-radius: 90px;
  padding: 20px;
  @media (max-width: 768px) {
    display: none;
  }
`;

export const CardBody = styled.p`
  color: white;
  font-size: 14px;

  @media (max-width: 640px) {
    font-size: 8px;
  }
`;

export const BreakLine = styled.br``;
