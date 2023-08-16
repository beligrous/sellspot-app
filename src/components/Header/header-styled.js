import { styled } from "styled-components";
import { NavLink } from "react-router-dom";

export const Container = styled.header`
  /* position: fixed; */
  height: 88px;
  display: block;
  width: 100%;
  display: flex;
  align-items: center;
  border-radius: 32px;
  background-color: #fff;
  padding-left: 32px;
  padding-right: 16px;
  margin-bottom: 56px;
`;

export const Logo = styled.p`
  margin: 0;
`;

export const HeadList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
`;

export const SaleButton = styled(NavLink)`
  color: white;
  background-color: black;
  border-radius: 24px;
  font-size: 24px;
  padding: 14px 24px;
  margin: 16px 0;
  margin-left: auto;
`;
