import styled from "styled-components";

export const NavbarWrapper = styled.nav`
  font-size: 15px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding-top: 8px;
  margin: 0 auto;
`;

export const NavLogo = styled.img.attrs(({ src }) => ({
  src: src,
}))`
  max-width: 70px;
  margin: 8px;
`;

export const MenuContainer = styled.ul`
  list-style: none;
  display: flex;
`;
export const MenuItems = styled.li`
  margin-right: 31px;
`;

export const MenuItemsLink = styled.a.attrs(() => ({
  href: "/#",
}))`
  color: white;
  text-decoration: none;
`;

export const NavSocialMediaContainer = styled.div`
  border: 1px solid rgba(255, 255, 255, 0.17);
  border-radius: 60px;
  width: 106px;
  height: 56px;
  display: flex;
  justify-content: center;
  align-items: center;
`;

export const DiscordLink = styled.a.attrs(() => ({
  href: "#",
}))`
  font-size: 20px;
  margin-right: 29px;
  color: white;
`;

export const Discord = styled.img.attrs(({ src }) => ({
  src: src,
}))``;

export const TwitterLink = styled.a.attrs(() => ({
  href: "#",
}))`
  font-size: 20px;
  color: white;
`;
export const Twitter = styled.img.attrs(({ src }) => ({
  src: src,
}))``;
