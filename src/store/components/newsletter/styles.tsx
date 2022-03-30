import styled from "styled-components/macro";

export const CountainerNews = styled.div`
  margin: 2% 0 0;
  display: flex;
  height: 120px;
  
  justify-content: center;
  border-top: 1px solid #e7e7e7;
  border-bottom: 1px solid #e7e7e7;
  @media screen and (max-width: 768px) {
    .col1{
      padding: 30px;
      width: 100%;
      flex-direction: column;
      justify-content: center;
    }
    
   
  }
  @media screen and (min-width: 768px) {
    .col1{
      max-width: 950px;
      flex-direction: row;
    align-items: center;
    }
    

    div:first-child {
      p {
        margin-right: 40px !important;
      }
    }
    div:last-child {
      flex: 1;
    }
  }
  div:first-child {
    display: flex;
    p {
      font-weight: 700;
      font-size: 24px;
      line-height: 37px;
      padding: 0 0px;
      margin: 0;
    }
  }
  div:last-child {
    display: flex;
    //width: 100%;
  }

  form {
    display: flex;
    flex: 1;
    //justify-content: center;
    button {
      &:hover{
        background: #ff9100;
      }
      width: 131px;
      height: 34px;
      background: #faa500;
      border: none;
      box-sizing: border-box;
      border-radius: 4px;
      font-size: 16px;
      line-height: 24px;
      color: #ffffff;
      font-weight: 400;
    
    }
  }
  input[type="email"] {
    //max-width: 500px;
    width: 100%;
    height: 32px;
    padding: 0;

    padding-left: 22px;
    border-radius: 4px;
    border: 1px solid #353535;
  }
`;
