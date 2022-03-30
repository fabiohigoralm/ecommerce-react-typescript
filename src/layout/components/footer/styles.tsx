import styled from "styled-components/macro";

export const ContainerFooter = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  .row {
    padding: 30px;
    @media screen and (max-width: 500px) {
      flex-direction: column;
    }
    display: flex;
    max-width: 950px;
    flex-direction: row;
    justify-content: space-between;
    width: 100%;
    ul {
      margin: 0;
      padding: 0;
      list-style-type: none;
      text-align: left;
      li:first-child {
        @media screen and (max-width: 500px) {
          display: block;
        }
        font-weight: 700;
        font-size: 16px;
        line-height: 18px;
      }
      li {
        padding: 10px 0;
        font-size: 12px;
        line-height: 18px;
        margin: 0;
        font-weight: 400;
      }
    }
  }
  @media screen and (max-width: 500px) {
    .information:first-child {
      &:hover {
        li {
          display: block;
        }
      }
    }
    .contact:first-child {
      &:hover {
        li {
          display: block;
        }
      }
    }
    .place:first-child {
      &:hover {
        li {
          display: block;
        }
      }
    }
    ul li {
      display: none;
    }
  }
`;
export const ContainerInformation = styled.div`
  width: 100%;
  background-color: #353535;
  display: flex;
  justify-content: center;
  padding: 15px 0;
  div:first-child {
    @media screen and (max-width: 870px) {
      flex-direction: column;
      ul {
        justify-content: center;
      }
    }
    justify-content: space-between;
    width: 72%;
    display: flex;
    ul {
      align-items: center;
      margin: 0;
      padding: 0;
      list-style-type: none;
      display: flex;
      li {
        padding: 15px;
        display: flex;
        align-items: center;
        display: flex;
        span {
          display: flex;
        }
      }
    }
    ul:last-child {
      li {
        flex-direction: column;
      }
    }
  }
`;
