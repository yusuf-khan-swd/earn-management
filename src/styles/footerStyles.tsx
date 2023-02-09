import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 3px solid rgba(255, 255, 255, 0.12);
  color: white;
`;

export const FooterContainer = styled.div`
  padding: 30px 20px;
  display: grid;
  grid-template-columns: repeat(6, auto);
  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 20px;
    text-align: center;
  }
`;

export const FooterSiteMapContainer = styled.div`
  grid-column-start: 2;
  grid-column-end: 3;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  order: 1;

  @media (max-width: 640px) {
    grid-column-start: 1;
    grid-column-end: 2;
    order: 2;
    margin-top: 50px;
  }
`;

export const SiteMapColumn = styled.div``;

export const SiteMapTitle = styled.h3`
  font-weight: normal;
  margin-bottom: 45px;
`;

export const SiteMapData = styled.p`
  margin-bottom: 28px;
`;

export const FooterSocialContainer = styled.div`
  grid-column-start: 4;
  grid-column-end: 5;
  order: 2;
  @media (max-width: 640px) {
    grid-column-start: 0;
    grid-column-end: 1;
    order: 1;
    display: flex;
    justify-content: center;
  }
`;

export const FooterSocial = styled.div``;

export const SocialContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 20px;
`;

export const SocialIcon = styled.img`
  margin-right: 8px;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  margin: 35px 0 0 5px;
`;

export const SmallTwitter = styled.img`
  margin-right: 28px;
`;

export const SmallDiscord = styled.img``;

export const BigDiscordImageWrapper = styled.div`
  display: flex;
  justify-content: end;

  @media (max-width: 640px) {
    justify-content: center;
  }
`;

export const FooterBigDiscordContainer = styled.div``;

export const DiscordJoiningButton = styled.button`
  margin: -60px 20px 0px auto;
  background: white;
  border: none;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  border-radius: 50%;
  cursor: pointer;

  @media (max-width: 640px) {
    margin: 0;
    padding: 9px 45px;
    border-radius: 30px;
  }
`;

export const DiscordButtonImage = styled.img`
  margin-bottom: 6px;
`;

export const DiscordContent = styled.span``;

export const CopyRight = styled.div`
  text-align: center;
  margin: 15px 0 15px 0;
`;
