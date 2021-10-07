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
  position: sticky;
  z-index: 28;
  top: 0;

  .logoContainer {
    display: flex;
    align-items: center;
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
`;

export const ContainerIcon = styled.div`
  position: relative;
  font-size: 32px;
  z-index: 30;
  color: ${({ show }) => (show ? "black" : "white")};
  @media (min-width: 720px) {
    display: none;
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
  padding: 15px 15px 0 15px;
  background-color: #eeeff3;

  li {
    padding: 20px 0;
    width: 100%;
    text-align: center;
    border-bottom: 1px solid lightgray;
  }

  @media (min-width: 720px) {
    position: relative;
    display: flex;
    flex-direction: row;
    width: 100%;
    transform: translate(0, 0);
    padding: 0;
    color: white;
    background-color: transparent;
    li {
      padding: 5px;
      margin: 0 15px;
      &:hover {
        text-shadow: 0 0 3px white;
        border-bottom: 1px solid white;
        cursor: pointer;
      }
    }
  }
`;
