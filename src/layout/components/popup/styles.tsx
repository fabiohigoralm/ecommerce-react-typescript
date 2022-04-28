import styled from "styled-components/macro";

interface Props {
  display: boolean;
}

export const CountainerPopUp = styled.div(
  ({display}:Props)=>`
  position: fixed;
  display: ${display?"flex":"none"};
  width: 100%;
  justify-content: center;
   background: rgba(0, 0, 0, 0.6);
  z-index: 10;
  height: 100%;
  p {
    display: flex;
    margin: 0 !important;
    color: #787d83;
  }
  .welcome {
    padding: 15px;
    font-size: 12px;
  }
  .text div {
    display: flex;
  }
  .popup {
    padding-top: 5%;
    height: 555px;
    z-index: 2;
    //background-color: white;
    display: flex;
    flex-direction: column;
    .close {
      p {
        cursor:pointer;
        color: white;
      }
      background: none;
      padding-right: 5px;
      display: flex;
      justify-content: flex-end;
    }
    .content {
      background-color: white;
      height: 531px;
      width: 100%;
      display: flex;
      .text {
        padding-top: 15%;
        width: 426px;
        display: flex;
        flex-direction: column;
        //justify-content: center;
        font-size: 20px;
        line-height: 20px;
        align-items: center;
      }
    }
  }
  .bold {
    font-weight: 800;
  }
  .news {
    padding: 0 0 25px;
    display: flex;
    flex-direction: column;
    align-items: center;
  }
  .input,
  .button,
  .button button {
    width: 100%;
    display: flex;
    justify-content: center;
  }
  .button button {
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    height: 40px;
    display: flex;
    justify-content: center;
    align-items: center;
    background-color: #faa500;
    font-weight: 700;
    font-size: 12px;
    text-transform: uppercase;
    color: #ffffff;
    margin: 0 52px;
  }
  .button {
    padding: 10px 0;
  }
  .input input {
    width: 100%;
    height: 40px;
    border-radius: 10px;
    border: 1px solid #c4c4c4;
    box-sizing: border-box;
    margin: 0 52px;
    font-size: 12px;
    padding-left: 13px;
  }

  @media screen and (max-width: 860px) {
    .img{
      display: none;
    }
    .popup .content .text {
  
      width: 307px;
      padding-top: 25px;
    }
    .popup{
      height: 307px;
    }
    .input input {
      margin: 0 20px;
    }
    .button button {
      margin: 0 20px;
    }
  }

`);
