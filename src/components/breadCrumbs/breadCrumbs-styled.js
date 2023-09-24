import styled from "styled-components";
import img from "../../assets/right.png";

export const Crumb = styled.li`
  list-style: none;
  display: flex;
`;

export const Container = styled.ul`
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
