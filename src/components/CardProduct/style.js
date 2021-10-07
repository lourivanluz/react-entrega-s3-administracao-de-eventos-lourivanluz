import styled from "styled-components";

export const InfoCard = styled.div`
  background-color: white;
  width: 200px;
  height: 370px;
  padding: 15px;
  font-size: 15px;
  margin-bottom: 15px;
  box-shadow: 1px 1px 8px rgb(0, 0, 0, 0.6);

  h2 {
    font-size: 18px;
    margin-bottom: 15px;
  }
  figure {
    height: 150px;
    margin-bottom: 15px;
    img {
      margin: 0 auto;
    }
  }
  span {
    color: var(--color-primaryDark);
    cursor: pointer;
    &:hover {
      text-decoration: underline;
    }
  }
`;

export const CardContainer = styled.div`
  display: flex;
  flex-direction: column;
`;

export const DivDescription = styled.div`
  z-index: 10;
  height: 100%;
`;
