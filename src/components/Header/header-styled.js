import { styled } from "styled-components";

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
