import react from "react";
import styled, { css } from "styled-components";
import { noMobile, tablet } from "../public/media";
export const NobitexArticles = () => {
  return (
    <Wrapper>
      <Continar>
        <Button mode="right">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.061"
            height="22.817"
            viewBox="0 0 13.061 22.817"
          >
            <path
              d="M357.636,3454.842l-8.816-8.815,8.8-8.815a1.522,1.522,0,0,0-2.152-2.153l-10.1,10.1a1.211,1.211,0,0,0,0,1.714l10.1,10.1a1.522,1.522,0,0,0,2.164-2.14Z"
              transform="translate(-345.011 -3434.612)"
              fill="#a3a5a8"
            ></path>
          </svg>
        </Button>
        <Row>
          <a href="https://testnet.nobitex.ir/">
            <Img src="/images/news.jpg" title="بازار آزمایشی" loading="lazy" />
          </a>
        </Row>
        <Row>
          <a href="https://testnet.nobitex.ir/">
            <Img
              src="/images/news-2.jpg"
              title="بازار آزمایشی"
              loading="lazy"
            />
          </a>
        </Row>
        <Row>
          <a href="https://testnet.nobitex.ir/">
            <Img
              src="/images/news-3.jpg"
              title="بازار آزمایشی"
              loading="lazy"
            />
          </a>
        </Row>

        <Button>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="13.061"
            height="22.817"
            viewBox="0 0 13.061 22.817"
          >
            <path
              d="M345.447,3454.842l8.816-8.815-8.8-8.815a1.522,1.522,0,1,1,2.152-2.153l10.1,10.1a1.211,1.211,0,0,1,0,1.714l-10.1,10.1a1.522,1.522,0,0,1-2.164-2.14Z"
              transform="translate(-345.011 -3434.612)"
              fill="#a3a5a8"
            ></path>
          </svg>
        </Button>
      </Continar>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;
  direction: ltr;
  width: 100%;
  //max-width: 1324px;
  // margin: auto;
  padding: 72px 0px;
  //background-color: #f2f3f5;
  // margin: 0px -15px;
`;
const Continar = styled.div`
  display: flex;
  flex-direction: row;
`;

const Row = styled.div`
  margin: 0px 32px;
`;

const Img = styled.img`
  width: 326px;
  height: 203px;
  border-radius: 10px;
  border: none;
  ${noMobile(css`
    width: 210px;
    height: 150px;
  `)}
`;

const Button = styled.button`
  width: 46px;
  ${(p) =>
    p.mode == "right"
      ? css`
          transform: translateY(130%) translateX(60%);
        `
      : css`
          transform: translateY(130%) translateX(-70%);
        `}

  height: 46px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: center;
  margin: 20px 30px;
  border-radius: 100%;
  padding: 8px;
  border: 1px solid #e3e4e5 !important;
  background-color: #fff;
`;
