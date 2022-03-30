import styled from "styled-components/macro";

export const CardProduct = styled.div`
  padding: 0 5px;
  width: 308px;
  .all-colors {
    display: flex;
    list-style-type: none;
    margin: 0;
    padding: 10px 30px;
  }
`;

export const Square = styled.div`
  &:hover {
    border: 1px solid #353535;
  }
  border: 1px solid transparent;
  width: 26px;
  height: 26px;
  margin-right: 10px;
  border-radius: 4px;
  background-color: ${(props) => props.color};
`;

export const ButtonProduct = styled.div`
&:hover{
  background-color: #ff9100;
}
  display: flex;
  justify-content: center;
  align-items: center;
  width: 254px;
  margin: 0 auto;
  height: 35px;
  background-color: #faa500;
  border-radius: 4px;
  p {
    text-align: center !important;
    margin: 0;
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    color: #ffffff;
  }
`;

export const CountainerProducts = styled.div`
.slick-slider{
  height: 588px;
}
  .title {
    h4 {
      margin-bottom: 105px;
      font-weight: 700;
      font-size: 32px;
      line-height: 49px;
      margin: 75px 0 25px;
    }
  }
  .title-prod,
  .desc,
  .price {
    margin: 0;
    text-align: left;
    padding: 0 30px;
  }
  .price {
    font-weight: 700;
    font-size: 20px;
    line-height: 30px;
  }
  .title-prod {
    font-weight: 400;
    font-size: 16px;
    line-height: 24px;
    text-align: justify;
  }
  .desc {
    font-size: 12px;
    line-height: 18px;
    opacity: 0.5;
    height: 54px;
    margin: 8px 0;
    width: 254px;
  }
  margin: 0 auto;
  text-align: center;
  justify-content: center;
  .row {
  
    max-width: 1600px;
    margin: 0 auto;
    margin-bottom: 50px;
  }
`;
