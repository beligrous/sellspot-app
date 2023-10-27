import { styled } from "styled-components";
import { Link, NavLink } from "react-router-dom";

export const Container = styled.header`
  /* position: fixed; */
  height: 88px;
  display: block;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 32px;
  background-color: #f3f3f1;
  margin-bottom: 56px;
`;

export const Logo = styled(Link)`
  text-decoration: none;
  color: inherit;
  margin: 0;
  margin-left: 32px;
`;

export const HeadList = styled.ul`
  display: flex;
  align-items: center;
  gap: 24px;
  list-style: none;
`;

// export const SaleButton = styled(NavLink)`
//   color: white;
//   background-color: #4aa28f;
//   border-radius: 24px;
//   font-size: 24px;
//   padding: 14px 24px;
//   margin: 16px 0;
//   margin-right: 16px;
// `;

export const MenuItem = styled.p`
  cursor: pointer;
`;
