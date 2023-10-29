import { styled } from "styled-components";

export const Form = styled.form`
  width: calc(888px - 32px);
  display: flex;
  justify-content: space-between;
  background-color: #fff;
  margin: 0 auto;
  padding: 16px;
  margin-bottom: 56px;
  border-radius: 32px;
  border: 1px solid;
  border-color: var(--Primart80);

  .src {
    flex-wrap: wrap;
    align-content: center;
    display: flex;

    input {
      margin-left: 16px;
      border: none;
      font-size: 32px;
    }

    input:focus, input:focus-visible {
      outline: none;
    }

    input:-internal-autofill-selected {
      appearance: none;
      background-color: rgb(0 0 0 / 0%) !important;
    }
  }
`;
