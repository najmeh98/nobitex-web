import react from "react";
import styled, { css } from "styled-components";
import { noMobile, tablet, desktop } from "../public/media";

export const Main = () => {
  return (
    <Background>
      <Row>
        {/* <img src="/images/mainbackground.svg" /> */}
        <Wrapper>
          {/* <img src="/images/mainbackground.svg" /> */}
          <WMain>
            <Continar>
              <h1>خرید و فروش امن بیت‌کوین و ارزهای دیجیتال</h1>
              <h3>به بزرگترین بازار ارز دیجیتال ایران بپیوندید</h3>
            </Continar>
            <SearchInput>
              <Input placeholder="ایمیل خود را وارد کنید" />
              <Button>شروع کنید</Button>
            </SearchInput>
            <Notibex>
              <Play
                href="https://www.aparat.com/nobitex/"
                data-type="external"
                target="_blank"
              >
                نوبیتکس چطور کار می‌کند؟
                <img src="images/play-icon.svg" />
              </Play>
            </Notibex>
          </WMain>
          <Div>
            <img
              src="/images/mainbackground.svg"
              width=" 813px"
              height="426px"
            />
            {/* <picture data-v-b10a8ac6="">
              <source
                type="image/webp"
                media="(max-width: 767px)"
                srcset="/_nuxt/img/jumbotron-mobile.29c14c0.webp"
              />
              <source
                type="image/webp"
                media="(max-width: 1199px)"
                srcset="/_nuxt/img/jumbotron-tablet.491a026.webp"
              />
              <img
                id="jumbotron-img"
                src="/images/mainbackground.svg"
                alt="بهترین سایت خرید و فروش ارز دیجیتال"
              />
            </picture> */}
          </Div>
        </Wrapper>
        {/* <Div>
          <img src="/images/mainbackground.svg" width=" 813px" />
        </Div> */}
      </Row>
    </Background>
  );
};
const Background = styled.div`
  // background-color: #f2f4f5;
  // height: 200vh;
  // z-index: -1;
  // margin: 0px -15px;
`;

const Wrapper = styled.div`
  z-index: 1;
  max-width: 100%;
  width: 100%;
  margin: auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  justify-content: center;
  color: ${(p) => p.theme.colors.textPrimary};
  margin: 0px -15px;
  line-height: 1.2;
  ${noMobile(css`
    width: 100%;
  `)}
`;

const Continar = styled.div`
  position: relative;
  // margin-top: -20rem;
  width: 100%;
  margin-top: 4.5rem;
  z-index: 1;
  h1 {
    font-size: 2.6rem;
    margin-bottom: 8px;
    ${tablet(css`
      font-size: 29px;
    `)}
  }
  h3 {
    margin-top: 15px;
    font-size: 26px;
    font-weight: 100;
    margin-bottom: 32px;
    ${tablet(css`
      font-size: 19px;
    `)}
  }
`;
const SearchInput = styled.div`
  margin: auto;
  width: 100%;
  display: flex;
  flex-direction: row;
  text-align: center;
  justify-content: center;
  align-items: strech;
  font-weight: 400;
  border: none;
  // line-height: 24px;
  height: 40px;
  ${tablet(css`
    //  max-width: 340px;
  `)}
`;
const Input = styled.input`
  font-size: 1rem;
  border-top-right-radius: 5px;
  border-bottom-right-radius: 5px;
  line-height: 24px;
  border: none;
  font-family: inherit;
  padding: 13px 20px;
  box-shadow: rgba(20, 21, 26, 0.1) 0px 2px 10px 0px;
  color: #fff;
  width: 330px;
  &::placeholder {
    color: #495057;
  }
  ${tablet(css`
    max-width: 230px;
  `)}
`;
const Button = styled.button`
  border: none;
  font-family: inherit;
  font-size: 15px;
  border-top-left-radius: 3px;
  border-bottom-left-radius: 3px;
  padding: 13px 23px;
  display: flex;
  text-align: center;
  align-items: center;
  vertical-align: middle;
  color: ${(p) => p.theme.colors.cardColor};
  background-color: #00aea4 !important;
  line-height: 22px;
  &:hover {
    background-color: #109a91 !important;
  }
`;

const Play = styled.a`
  font-size: 19px;
  margin-top: 40px;
  display: flex;
  align-items: center;
  text-align: center;
  justify-content: center;

  img {
    margin-right: 10px;
    ${tablet(css`
      width: 21px;
    `)}
  }
  ${tablet(css`
    margin-top: 16px;
    font-size: 15px;
  `)}
`;
const Notibex = styled.div`
  width: 100%;
  z-index: 1;
`;

const Row = styled.div`
  height: 100vh;

  margin: 0px 15px;
  // background-image: url("/images/mainbackground.svg");
  background-position: top right;
  background-repeat: no-repeat;
  background-size: cover;
  background-attachment: scroll;
  margin: 0px -15px;
  overflow: hidden;
  background-color: #f2f3f5;
  z-index: 0;
  ${desktop(css`
    background-image: url("/images/mainbackground.svg");
  `)}
`;

const Color = styled.div`
  background-color: #f2f4f5;
`;

const Div = styled.div`
  display: none;
  ${noMobile(css`
    position: relative;
    z-index: 0;
    width: 813px;
    height: 426px;
    align-items: center;
    top: -6rem;
    display: block;
  `)}
`;

const WMain = styled.div`
  z-index: 1;
`;
