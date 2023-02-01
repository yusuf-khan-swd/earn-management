import styled from "styled-components";

export const FooterWrapper = styled.div`
  border-top: 3px solid rgba(255, 255, 255, 0.12);
  color: white;
`;

export const FooterContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  padding: 50px 150px;
`;

export const FooterSiteMapContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
`;

export const SiteMapColumn = styled.div``;

export const SiteMapTitle = styled.h3`
  font-weight: normal;
  margin-bottom: 35px;
`;

export const SiteMapData = styled.p`
  margin-bottom: 15px;
`;

export const FooterSocialContainer = styled.div``;

export const FooterSocialLeftSide = styled.div``;

export const SocialContent = styled.div`
  color: white;
  display: flex;
  align-items: center;
  margin-bottom: 10px;
`;

export const SocialIcon = styled.img`
  margin-right: 8px;
`;

export const FooterIconWrapper = styled.div`
  display: flex;
  margin-top: 20px;
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
  margin-top: -90px;
  margin-right: 20px;
  margin-bottom: 20px;
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

export const DiscordButtonImage = styled.img``;

export const DiscordContent = styled.span``;
