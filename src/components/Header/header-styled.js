import { styled } from "styled-components";
import { Link } from "react-router-dom";

export const Head = styled.header`
  width: 100%;
  min-height: 88px;
`

export const Container = styled.div`
  z-index: 1;
  position: relative;
  width: calc(100% - 16px  - 32px);
  height: 88px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  border-radius: 32px;
  background-color: var(--Secondary95);
  padding: 0 16px 0 32px;
`;

export const Logo = styled(Link)`
  color: var(--Primary5);
  font-weight: 700;
  font-size: 24px;

  &:hover {
    color: var(--Primary5);
  }
`;

export const HeadList = styled.ul`
  display: flex;
  gap: 24px;
  list-style: none;
`;

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 24px;

  * {
    cursor: pointer;
  }

  .language {
    display: flex;
    align-items: center;
    gap: 16px;
    color: var(--Neutral40);
    text-transform: uppercase;

    .line {
      height: 24px;
      border: 1px solid var(--Neutral40);
    }

    .item {
      display: flex;
      align-items: center;
      gap: 8px;
      color: var(--Primary5);
    }
  }
`
