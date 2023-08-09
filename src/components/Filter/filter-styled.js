import { styled } from "styled-components";
import search from "../../assets/search.png";

export const Form = styled.div`
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  height: 96px;
  width: 888px;
  margin: 0 auto;
  border-radius: 32px;
  border: none;
`;

export const Input = styled.input`
  border: none;
  margin-left: 32px;
  &::before {
    content: " ";
    width: 48px;
    height: 48px;
    background-image: url(${search});
  }
`;

export const Button = styled.button`
  color: white;
  border-radius: 24px;
  font-size: 24px;
  padding: 14px 24px;
  margin: 16px 0;
  margin-right: 16px;
`;
