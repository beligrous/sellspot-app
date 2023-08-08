import { styled } from "styled-components";

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin: 0 auto;
  padding-top: 32px;
  background-color: #e5e5e5;
`;

export const Hero = styled.h1`
  margin: 0 209px;
  text-align: center;
  width: 1500px;
  font-weight: 500;
  font-size: 72px;
`;

export const List = styled.ul`
  list-style: none;
  display: flex;
  flex-wrap: wrap;
  gap: 32px;
`;
