import styled from "styled-components/macro";

interface Src {
  src: { title: string; img: string };
}

export const CountainerMain = styled.div`
  .slick-dots {
    bottom: -0px;
  }
  .slick-dots li {
    width: 50px;
    height: 50px;
  }
  .slick-dots li button:before {
    font-size: 20px;
    color: orange;
  }
  .slick-prev ::before {
    content: "❮";
  }
  .slick-next ::before {
    content: "❯";
  }
  .slick-prev::before,
  .slick-next::before {
    color: black;
    font-size: 30px;
  }
  .slick-prev {
    left: 3% !important;
    z-index: 2;
    width: 30px;
    height: 30px;
  }
  .slick-next {
    right: 3% !important;
    z-index: 1;
    width: 30px;
    height: 30px;
  }
  img {
    margin: 0 auto;
    width: 100%;
  }
`;

export const ImgBanner = styled.div(
  ({ src }: Src) => `
  @media screen and (max-width: 768px) {
    min-height: 320px;
    background-size: cover;
    background-position: 35%;
  }
  @media screen and (min-width: 768px) {
   .title-banner{
     font-size: 40px!important;
   }
   .coutainer-banner{
        padding: 150px 70px!important;
      margin:50px;
   }
    .text-banner{
      font-size: 20px!important;
      max-width:380px;
    }
    .button-banner button{
      width: 128px!important;
    height: 48px!important;
    font-size: 16px!important;
    }
  }
  @media screen and (min-width: 1800px) {
  .coutainer-banner{
  padding: 150px 280px!important;  
   }
  }
  .text-banner{
    padding:20px 0;
    text-align:left;
    font-size: 16px;
  }
  
max-width: 1920px;
  width: 100%;
  min-height: 600px;
  background:url(${src.img});
  background-attachment: fixed;
  background-position: center;
  .coutainer-banner{
  color: #FFFFFF;
  display:flex;
  flex-direction:column;
  align-items:flex-start;
  padding: 40px 70px;
  }
  .title-banner{
    text-align:left;
    font-weight: 700;
    font-size: 30px;
    color: #FFFFFF;
    line-height: 30px;
  }
  .button-banner button{
    background: #faa500;
    border: none;
    box-sizing: border-box;
    border-radius: 4px;
    font-size: 14px;
    width:76px;
    height: 28px;
    color: #ffffff;
    font-weight: 700;
  }
  
`
);
