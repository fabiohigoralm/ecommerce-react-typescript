import styled from "styled-components/macro";

export const Menu = styled.div`

  ul {
    margin: 0;
    padding: 0;
  }
  display: none;
  margin: 0;
  z-index: 1;
  div:first-child {
    padding: 20px;
    display: flex;
    align-items: center;
    img {
      width: 30px;
    }
  }
  .hidden {
    visibility: hidden;
    position: absolute;
    margin: 200px 0 0 0;

    ul {
      text-align: left;
      list-style-type: none;
      margin: 0;
      padding: 0;
      background-color: white;
    }
  }

  @media screen and (max-width: 700px) {
    &:hover {
      .hidden {
        padding: 20px 20px 10px 20px;
        visibility: visible !important;
        background-color: #FFFFFF;
       
      }
    }
    display: flex;
    align-items: center;
  
  }

`;
