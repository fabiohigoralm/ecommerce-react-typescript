import styled from "styled-components/macro";

export const CardBox = styled.div`
 margin: 0 5px;
  width: 307px;
  border-radius: 4px;
  display: flex;
  text-align: start;
  align-items: center;
  background-color: #efefef;
  height: 64px;
  h4,
  p {
    font-size: 12px;
    padding: 0;
    margin: 0;
  }

  div:first-child {
    display: flex;
    img {
      flex-grow: 0;
      height: 32px;
      padding-left: 26px;
    }
  }
  div:last-child {
    padding-left: 20px;
  }
`;
export const CountainerDepartament = styled.div`
  .slick-prev {
    left: 3% !important;
    z-index: 1;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
  }
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  .title {
    h4 {
      margin: 20px 0;
      line-height: 24px;
      font-weight: 700;
    }
  }
  .row {
    max-width: 1600px;
    margin: 0 auto;
  }
`;
