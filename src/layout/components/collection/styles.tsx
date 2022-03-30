import styled from "styled-components/macro";

export const ContainerCollection = styled.div`
  width: 100%;
  max-width: 1564px;
  margin: 0 auto;
  display: flex;
  padding: 30px 0;
  @media screen and (max-width: 1500px) {
    flex-direction: column;
  }
  .col1 {
    padding-right: 4%;
    @media screen and (max-width: 1600px) {
      padding: 30px;
    }
    text-align: left;
    display: flex;

    flex-direction: column;
    justify-content: center;
    h4 {
      text-align: start;
      font-weight: 700;
      font-size: 24px;
      line-height: 37px;
      margin: 0;
      padding-bottom: 15px;
    }
    p {
      //width: 90%;
      margin: 0;
      font-weight: 400;
      font-size: 14px;
      line-height: 21px;
    }
  }
  .col2 {
    @media screen and (max-width: 1600px) {
      padding: 30px;
    }
    display: flex;
    img {
      border-radius: 6px;
      width: 100%;
    }

    @media screen and (min-width: 1500px) {
      img {
        width: auto;
      }
    }
  }
`;
