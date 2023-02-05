import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 3px solid rgba(255, 255, 255, 0.12);
  color: white;
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(6, auto);
  padding-top: 60px;
`;

export const FooterSiteMapContainer = styled.div`
  grid-column-start: 3;
  grid-column-end: 4;
  display: grid;
  grid-template-columns: repeat(3, 1fr);
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
  grid-column-start: 5;
  grid-column-end: 6;
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
  margin-top: 35px;
  margin-left: 5px;
`;

export const SmallTwitter = styled.img`
  margin-right: 28px;
`;

export const SmallDiscord = styled.img``;

export const BigDiscordImageWrapper = styled.div`
  display: flex;
  justify-content: end;
`;

export const FooterBigDiscordContainer = styled.div``;

export const DiscordJoiningButton = styled.button`
  margin: -60px 20px 20px auto;
  background: white;
  border: none;
  font-weight: bold;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 40px 20px;
  border-radius: 50%;
  cursor: pointer;
`;

export const DiscordButtonImage = styled.img`
  margin-bottom: 6px;
`;

export const DiscordContent = styled.span``;

export const CopyRight = styled.div`
  text-align: center;
  margin-top: 15px;
  margin-bottom: 15px;
`;
