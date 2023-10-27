import { Link } from "react-router-dom";
import styled from "styled-components";
import img from "../../assets/right.png";

export const CrumbSection = styled.nav`
  width: 100%;
`;

export const Crumb = styled.li`
  list-style: none;
  display: flex;
  cursor: pointer;
`;

export const LinkCrumb = styled(Link)`
  text-decoration: none;
  color: inherit;
`;

export const Container = styled.ul`
  padding-left: 0;
  display: flex;
  gap: 15px;
`;

export const Img = styled.div`
  width: 24px;
  height: 24px;
  background-image: url(${img});
  background-repeat: no-repeat;
  margin-left: 15px;
`;
