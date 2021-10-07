import styled from "styled-components";
export const ModalInfo = styled.div`
  padding-top: 20px;
  display: flex;
  justify-content: center;
  position: fixed;
  top: 0;
  width: 100vw;
  height: 100vh;
  background-color: rgb(0, 0, 0, 0.6);
  z-index: 30;

  .infoModal {
    background-color: white;
    max-width: 300px;
    min-height: 600px;
    height: fit-content;
    padding: 15px;
    z-index: 30;

    figure {
      height: 200px;
      margin-bottom: 15px;
      img {
        margin: 0 auto;
      }
    }
    h2 {
      font-size: 22px;
      margin-bottom: 15px;
    }
    p {
      font-size: 18px;
      margin-bottom: 15px;
    }
  }
`;
