import { styled } from "styled-components";
import search from "../../assets/search.png";

export const Form = styled.div`
  background-color: #fff;
  height: 96px;
  margin: 0 auto;
  border-radius: 32px;
  border: none;
`;

export const Input = styled.input`
  border: none;
  &::before {
    content: " ";
    width: 48px;
    background-image: url(${search});
  }
`;

export const Button = styled.button`
  color: white;
  border-radius: 24px;
  font-size: 24px;
  padding: 14px 24px;
  margin: 16px;
`;
