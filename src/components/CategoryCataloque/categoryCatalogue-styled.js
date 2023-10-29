import { styled } from "styled-components";

export const Container = styled.div`
  box-sizing: border-box;
  width: 100%;
  margin-top: ${prop => prop.isVisible? '32px' : '-100%'};
  padding: 32px;
  transition: all 1s;
  background-color: var(--Primary100);
  border-radius: 32px;
  box-shadow: 0px 0px 0px 0px rgba(113, 157, 147, 0.1),
    7px 7px 22px 0px rgba(120, 148, 142, 0.1),
    27px 28px 39px 0px rgba(140, 168, 162, 0.09),
    60px 64px 53px 0px rgba(158, 180, 175, 0.05);
  column-gap: 32px;
  display: flex;

  .chips {
    height: fit-content;
    display: grid;
    gap: 16px;
  }

  .cards {
    display: flex;
    flex-wrap: wrap;
    gap: 32px;
  }
`;