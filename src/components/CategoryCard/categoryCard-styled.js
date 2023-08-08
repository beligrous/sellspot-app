import { styled } from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  background-color: #f2f2f2;
  border-radius: 32px;
  padding: 32px;
  width: 400px;
  height: 400px;
  flex-grow: 1;
  &:nth-child(4n + 1) {
    flex-grow: 2;
  }
`;

export const CategoryContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 8px 16px;
  width: 145px;
`;
