import styled from "styled-components";

export const ButtonStyled = styled.button`
  background-color: var(--color-primaryMidleDark);
  width: 100%;
  height: 30px;
  color: white;
  border: none;
  border-radius: 7px;
  text-transform: uppercase;
  display: flex;
  justify-content: center;
  align-items: center;
  position: relative;
  z-index: 1;
  &:hover {
    background-color: var(--color-primaryDark);
  }

  .dropArrow {
    position: absolute;
    right: 20px;
  }
`;
