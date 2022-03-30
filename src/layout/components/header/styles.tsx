import styled from "styled-components/macro";

export const Notification = styled.div`
  width: 100%;
  text-align: center;
  margin: 0 auto;
  background: #353535;

  h1 {
    font-style: normal;
    font-weight: 400;
    font-size: 12px;
    line-height: 18px;
    color: #ffffff;
    padding: 2px 0 0 0;
    margin: 0;
  }
`;

export const Logo = styled.div`
  @media screen and (max-width: 768px) {
    min-width: auto;
    width: auto;
    img {
      width: 111px;
    }
  }
  min-width: 190px;
  width: 15%;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  @media screen and (max-width: 1620px) {
    justify-content: center;
  }
`;

export const Search = styled.div`
  @media screen and (max-width: 700px) {
    justify-content: flex-end;
    form {
      background-image: url("icons/icon_search.png");
      background-repeat: no-repeat;
      background-position: center;
      width: 25px !important;
      height: 25px;
      margin: 10px;
      button,
      input {
        display: none;
      }
    }
  }
  display: flex;
  align-items: center;
  justify-content: center;
  form {
    display: flex;
    width: 100%;
  }
  input[type="search"] {
    flex-grow: 1;
    background: #efefef;

    border: none;
    height: 40px;
    width: 80%;
    border-top-left-radius: 10px;
    border-bottom-left-radius: 10px;
    padding: 0 0 0 40px;
    font-family: "Titillium Web";
    color: #353535;
    font-size: 12px;
  }
  button {
    background: #faa500;
    border-radius: 10px;
    height: 40px;
    border: none;
    width: 119px;
    margin-left: -10px;
    font-weight: 400;
    font-size: 14px;
    line-height: 21px;
    color: #ffffff;
  }
  button:hover{
    background: #ff9100;
  }
  width: 45%;
`;

export const User = styled.div`
  @media screen and (max-width: 700px) {
    ul {
      li:nth-child(2) {
        background-color: #faa500;
        display: none;
      }
      li:first-child {
        display: none;
      }
      li:last-child {
        border: none !important;
        background-image: url("icons/icon_wish2.png");
        background-repeat: no-repeat;
        background-position: center;
        width: 25px;
        height: 25px;
        margin: 10px;
        img {
          display: none;
        }
      }
      li {
        span {
          display: none;
        }
      }
    }
  }

  justify-content: flex-end;
  display: flex;
  width: 40%;
  ul {
    padding: 0;
    margin: 0;
    font-weight: 400;
    font-size: 14px;
    display: flex;
    align-items: center;
    height: 100%;
    li {
      list-style-type: none;
      padding: 10px 12px;
      margin: 0 5px;
      img {
        margin-right: 10px;
        margin-bottom: -2px;
      }
    }
    li:last-child {
      border: 1px solid #faa500;
      border-radius: 8px;
    }
  }
`;
export const ContainerHeader = styled.div`
  margin: 0 auto;
  max-width: 1600px;
  height: 80px;
  display: flex;
`;
