import { styled } from "styled-components";

export const Container = styled.footer`
  width: calc(100% - 56px - 56px);
  padding: 56px;
  border-radius: 32px;
  background: var(--Secondary95);
  justify-content: space-between;
  display: flex;
`;

export const HeadList = styled.ul`
  display: flex;
  align-items: center;
  gap: 32px;
  list-style: none;
`;

export const Logo = styled.h1`
  color: var(--Primary5);
  cursor: pointer;
`
