import styled from "styled-components";

export const HeaderStyled = styled.header`
  height: 80px;
  width: 100%;
  box-shadow: 1px 1px 8px rgb(0, 0, 0, 0.8);
  background-color: var(--color-primaryDark);
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px;

  .logoContainer {
    display: flex;
    align-items: center;
    &:hover {
      background-color: red;
    }
    h1 {
      margin-left: 15px;
      font-size: 25px;
      font-family: var(--font-secondary);
      font-weight: 600;
      color: white;
      span {
        color: var(--color-primaryMidleLight);
        margin: 0 5px;
      }
    }
    .imgContainer {
      width: 70px;
      height: 70px;
      padding: 10px;
      border-radius: 50%;
    }
  }
  .Container-nav {
    .container-menuIcon {
      position: relative;
      font-size: 32px;
      z-index: 30;
      color: white;
      @media (min-width: 720px) {
        display: none;
      }
    }
  }
`;

export const UlStyled = styled.ul`
  z-index: 1;
  position: absolute;
  transform: translate(-80%, -18%);
  width: 200px;
  display: ${({ show }) => (show ? "flex" : "none")};
  flex-direction: column;
  align-items: center;
  padding: 15px;

  li {
    margin: 20px 0;
  }

  @media (min-width: 720px) {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    transform: translate(0, 0);
    padding: 0;
    color: white;
    li {
      margin: 0 15px;
    }
  }
`;
