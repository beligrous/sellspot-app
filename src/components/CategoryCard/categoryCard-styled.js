import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Container = styled.li`
  position: relative;
  list-style: none;
  border-radius: 32px;
  overflow: hidden;
  width: ${(props) => (props.width ? props.width : "432px")};
  height: ${(props) => (props.height ? props.height : "400px")};
  &:nth-child(2n + 3) {
    width: ${(props) => !props.width && "736px"};
  }
`;

export const InnerCategory = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 8px 16px;
  width: 145px;
`;

export const CategoryData = styled.div`
  position: absolute;
  color: black;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  padding: 32px;
  transition-property: transform;
  transition-duration: 400ms;
  &:hover,
  &:focus {
    transform: scale(0.95);
  }
`;

export const CategoryLink = styled(Link)`
  position: relative;
  display: block;
  box-sizing: border-box;
  height: 100%;
  background-image: url(${(props) => props.image});
  background-repeat: no-repeat;
  background-size: cover;
  transition-property: transform;
  transition-duration: 400ms;
  &:hover,
  &:focus {
    transform: scale(1.05);
  }
`;
