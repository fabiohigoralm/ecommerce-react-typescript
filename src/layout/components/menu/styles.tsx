import styled from "styled-components/macro";

export const ContainerMenu = styled.div`
@media screen and (max-width: 700px) {
  display: none;
}
  box-shadow: inset 0px 10px 8px -10px #ccc;
  margin: 0 auto;
  display: flex;
  ul {
    max-width: 1345px;
    width: 100%;
    margin: 0 auto;
    display: flex;
    padding: 0;
  }
  li {
    width: 100%;
    max-width: 161px;
    padding: 0;
    color: #353535;
    display: flex;
    align-items: center;
    height: 48px;
    list-style-type: none;
    justify-content: center;
    p {
      padding: 0;
      margin: 0;
      font-weight: 400;
      font-size: 14px;
    }
  }
  li:hover{
    background: url('icons/icon_news.png');
    background-repeat: no-repeat;
    background-position: 16% 50%;
    font-weight: 600;
    color: #FAA500;
  }

 /*  li:first-child {
    img {
      padding: 0 15px;
    }
    p {
      font-weight: 700;
    }
    font-size: 14px;
    color: #faa500;
  } */
`;
