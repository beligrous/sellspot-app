import { styled } from "styled-components";
import right from "../../assets/right.png";

export const Container = styled.div`
  position: absolute;
  box-sizing: border-box;
  top: 120px;
  width: 100%;
  max-height: 480px;
  overflow: scroll;
  background-color: white;
  padding: 32px;
  border-radius: 32px;
  box-shadow: 0px 0px 0px 0px rgba(113, 157, 147, 0.1),
    7px 7px 22px 0px rgba(120, 148, 142, 0.1),
    27px 28px 39px 0px rgba(140, 168, 162, 0.09),
    60px 64px 53px 0px rgba(158, 180, 175, 0.05);
`;

export const CatalogueItem = styled.li`
  display: flex;
  justify-content: space-between;
  list-style: none;
  border: 2px solid #4aa28f;
  border-radius: 16px;
  max-width: 320px;
  margin-bottom: 16px;
  padding: 13px 24px;
  &:last-child {
    margin-bottom: 0;
  }
`;

export const ItemButton = styled.div`
  display: inline-block;
  background-image: url(${right});
  background-repeat: no-repeat;
  background-position: center;
  width: 24px;
  height: 24px;
  cursor: pointer;
`;
