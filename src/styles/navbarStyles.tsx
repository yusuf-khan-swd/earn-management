import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  margin: 0 auto;
`;

export const NavLogo = styled.img`
  max-width: 70px;
  min-width: 40px;
  margin: 8px;
`;

export const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
`;
export const MenuItems = styled.li`
  margin-right: 31px;
`;

export const MenuItemsLink = styled.a`
  color: white;
  text-decoration: none;
`;

export const NavSocialMediaContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: 60px;
  min-width: 106px;
  min-height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DiscordLink = styled.a`
  font-size: 20px;
  margin-right: 29px;
  color: white;
`;

export const Discord = styled.img``;

export const TwitterLink = styled.a`
  font-size: 20px;
  color: white;
`;
export const Twitter = styled.img``;
