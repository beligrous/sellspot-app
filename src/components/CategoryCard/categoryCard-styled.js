import { styled } from "styled-components";
import { Link } from "react-router-dom";

// const getRandomSize = () => {
//   const sizes = ["400px", "500px", "700px"];
//   const randomIndex = Math.floor(Math.random() * sizes.length);
//   return sizes[randomIndex];
// };

export const Container = styled.li`
  width: 432px;
  height: 400px;
  &:nth-child(n + 3) {
    width: 736px;
  }
  &:nth-child(n + 4) {
    width: 536px;
  }
`;

export const SmallContainer = styled(Container)``;

export const CategoryContainer = styled.div`
  background-color: #fff;
  border-radius: 16px;
  padding: 8px 16px;
  width: 145px;
`;

export const CategoryLink = styled(Link)`
  display: block;
  box-sizing: border-box;
  background-color: #f2f2f2;
  border-radius: 32px;
  padding: 32px;
  height: 100%;
`;
