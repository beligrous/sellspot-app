import { styled } from "styled-components";

export const Btn = styled.button`
  height: fit-content;
  padding: 18px 24px;
  border: none;
  border-radius: 24px;
  color: var(--Primary100);
  background: var(--Primary50);
  cursor: pointer;

  &:hover {
    background: var(--Primary40);
  }
  &:focus {
    background: var(--Primary30);
  }
`;

export const BtnBorder = styled.button`
  padding: 13px 16px;
  border: 1px solid var(--Secondary20);
  border-radius: 24px;
  background: none;
  color: var(--Secondary20);
  line-height: 150%;
  cursor: pointer;

  &:hover {
    border: 2px solid var(--Secondary20);
  }
  &:focus {
    color: var(--Secondary10);
    border: 2px solid var(--Secondary10);
  }
`;

export const ChipR = styled.button`
  width: ${prop => prop.width? prop.width : 'fit-content'};
  padding: 13px 24px;
  border: 1px solid var(--Secondary60);
  border-radius: 16px;
  background: none;
  color: var(--Primary5);
  line-height: 150%;
  align-items: center;
  gap: 16px;
  cursor: pointer;
  justify-content: space-between;
  display: flex;

  svg {
    path {
      stroke: var(--Primary5);
    }
  }

  &:hover {
    color: var(--Primary100);
    background: var(--Primary40);
    border-color: inherit;
    path {
      stroke: var(--Primary100);
    }
  }
  &:focus {
    color: var(--Primary100);
    background: var(--Primary30);
    border-color: inherit;
    path {
      stroke: var(--Primary100);
    }
  }
`;

export const ChipC = styled(ChipR)`
  padding: 8px 16px;
  color: var(--Neutral70);
  svg path {
    stroke: transparent;
  }

  &:hover {
    svg path {
      fill: var(--Primary100);
      stroke: var(--Primary40);
    }
  }
  &:focus {
    svg path {
      fill: var(--Primary100);
      stroke: var(--Primary40);
    }
  }
`;

export const BtnCategory = styled.button`
  padding: 8px 16px;
  border: none;
  border-radius: 16px;
  background: ${props => props.bg? props.bg : 'var(--Secondary95)'};
  color: var(--Secondary20);
  line-height: 150%;
  cursor: pointer;

  &:hover {
    background: var(--Secondary80);
  }
  &:focus {
    background: var(--Secondary70);
  }
`;

export const TextLink = styled.a`
  color: var(--Primary5);
  cursor: pointer;

  &:hover {
    color: var(--Primary40);
  }
`;

export const NavBtn = styled.button`
  width: 275px;
  padding: 24px;
  color: var(--Primary5);
  line-height: 150%;
  background: var(--Secondary95);
  border: none;
  border-radius: 32px;
  cursor: pointer;

  &:hover {
    color: var(--Secondary40);
    background: var(--Secondary50);
  }
  &:focus {
    color: var(--Primary5);
    background: var(--Secondary50);
  }
`;

export const ToggleStyle = styled.label`
  position: relative;
  width: 64px;
  height: 38px;
  background: var(--Neutral20);
  border-radius: 100px;
  align-items: center;
  justify-content: center;
  display: flex;

  input {
    width: 100%;
    height: 100%;
    opacity: 0;
  }

  span {
    position: absolute;
    left: 0;
    width: 32px;
    height: 32px;
    margin: 0 3px;
    border-radius: 50%;
    background: var(--Neutral1);
    cursor: pointer;
    transition: all 0.3s;
    box-shadow:
      0px 3px 1px 0px rgba(0, 0, 0, 0.06),
      0px 3px 8px 0px rgba(0, 0, 0, 0.15),
      0px 0px 0px 1px rgba(0, 0, 0, 0.04);
  }

  input:checked + span {
    left: 26px;
  }
`;

export const Radio = styled.input.attrs({ type: 'radio' })`
  width: 20px;
  height: 20px;
  cursor: pointer;
`

export const Up = styled.div.attrs({ id: 'scroll-up' })`
  position: fixed;
  bottom: 32px;
  right: 32px;
  width: 24px;
  height: 24px;
  padding: 12px;
  border: 1px solid var(--Primary5);
  border-radius: 50%;
  overflow: hidden;
  transform: rotateZ(270deg);
  align-content: center;
  justify-content: center;
  flex-wrap: wrap;
  display: none;

  &:hover {
    border: 1px solid transparent;
  }
`