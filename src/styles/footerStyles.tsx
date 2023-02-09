import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 3px solid rgba(255, 255, 255, 0.12);
  color: white;
`;

export const FooterContainer = styled.div`
  padding: 30px 20px;
  display: grid;
  grid-template-columns: repeat(7, auto);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 20px;
    text-align: center;
  }
`;

export const FooterSiteMapContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  order: 1;

  @media (max-width: 640px) {
    grid-column-start: 0;
    grid-column-end: 1;
    order: 2;
    margin-top: 50px;
  }
`;

export const SiteMapColumn = styled.div``;

export const SiteMapTitle = styled.h3`
  font-weight: normal;
  margin-bottom: 35px;
`;

export const SiteMapData = styled.p`
  margin-bottom: 23px;
`;

export const FooterSocialContainer = styled.div`
  grid-column-start: 5;
  grid-column-end: 6;
  order: 2;
  @media (max-width: 640px) {
    order: 1;
    grid-column-start: 0;
    grid-column-end: 1;
    display: flex;
    justify-content: center;
  }
`;

export const FooterSocial = styled.div``;

export const SocialContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const SocialIcon = styled.img`
  margin-right: 8px;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  margin: 25px 0 0 5px;

  @media (max-width: 640px) {
    justify-content: center;
    margin-top: 25px;
  }
`;

export const SmallTwitter = styled.img`
  margin-right: 28px;
`;

export const SmallDiscord = styled.img``;

export const BigDiscordImageWrapper = styled.div`
  order: 3;
  grid-column-start: 7;
  grid-column-end: 8;
  display: flex;
  justify-content: end;
  align-items: flex-end;

  @media (max-width: 640px) {
    margin-top: 20px;
    justify-content: center;
    grid-column-start: 0;
    grid-column-end: 1;
  }
`;

export const FooterBigDiscordContainer = styled.div``;

export const DiscordJoiningButton = styled.button`
  background: white;
  border: none;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: space-between;
  min-height: 105px;
  padding: 30px 15px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 640px) {
    margin: 0;
    padding: 9px 45px;
    border-radius: 30px;
    min-height: 65px;
  }
`;

export const DiscordButtonImage = styled.img``;

export const DiscordContent = styled.span``;

export const CopyRight = styled.div`
  text-align: center;
  margin: 25px 0;
`;
