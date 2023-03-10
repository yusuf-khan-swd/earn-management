import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 3px solid rgba(255, 255, 255, 0.12);
  color: white;
`;

export const FooterContainer = styled.div`
  padding: 30px 20px;
  display: grid;
  grid-template-columns: repeat(12, 1fr);

  @media (max-width: 640px) {
    grid-template-columns: 1fr;
    padding: 20px;
  }
`;

export const FooterSiteMapContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 7;
  display: grid;
  grid-template-columns: repeat(3, 1fr);

  @media (max-width: 640px) {
    grid-column-start: 0;
    grid-column-end: 1;
    margin: 15px 0;
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
  grid-column-start: 8;
  grid-column-end: 11;

  @media (max-width: 640px) {
    grid-column-start: 0;
    grid-column-end: 1;
    margin-bottom: 25px;
  }
`;

export const FooterSocial = styled.div``;

export const SocialContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 15px;

  @media (max-width: 640px) {
  }
`;

export const SocialIcon = styled.img`
  margin-right: 8px;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  margin: 25px 0 0 5px;

  @media (max-width: 640px) {
    margin-top: 25px;
  }
`;

export const SmallTwitter = styled.img`
  margin-right: 28px;
`;

export const SmallDiscord = styled.img``;

export const BigDiscordImageWrapper = styled.div`
  order: 3;
  grid-column-start: 12;
  grid-column-end: 13;
  display: flex;
  justify-content: end;
  align-items: flex-end;

  @media (max-width: 640px) {
    margin-top: 20px;
    justify-content: left;
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
`;

export const DiscordButtonImage = styled.img``;

export const DiscordContent = styled.span``;

export const CopyRight = styled.div`
  text-align: center;
  margin: 25px 0;
`;
