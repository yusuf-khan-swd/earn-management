import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  margin: 0 auto;
  padding: 15px;
`;

export const NavLogo = styled.img`
  max-width: 70px;
  min-width: 40px;
`;

export const DesktopMenuContainer = styled.div`
  width: 60%;
  display: flex;
  justify-content: space-between;
  align-items: center;

  @media (max-width: 640px) {
    display: none;
  }
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

  @media (max-width: 640px) {
    display: none;
  }
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

export const MobileMenuContainer = styled.div`
  @media (min-width: 640px) {
    display: none;
  }
`;

export const MenuIconContainer = styled.div``;

export const MenuIcon = styled.div`
  width: 35px;
  height: 5px;
  background-color: white;
  margin: 6px 0;
`;

export const MobileSideNav = styled.div`
  height: 100%;
  width: 0;
  position: fixed;
  z-index: 1;
  top: 0;
  left: 0;
  background-color: #111;
  overflow-x: hidden;
  transition: 0.5s;
  padding-top: 60px;
`;

export const MobileMenuAnchor = styled.a`
  padding: 8px 8px 8px 32px;
  text-decoration: none;
  font-size: 25px;
  color: #818181;
  display: block;
  transition: 0.3s;
  text-align: center;

  &:hover {
    color: #f1f1f1;
  }
`;

export const CloseButton = styled.a`
  text-decoration: none;
  color: #818181;
  position: absolute;
  top: 0;
  right: 25px;
  font-size: 40px;
`;

export const MobileMainDiv = styled.div``;
