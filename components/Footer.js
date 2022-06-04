import react from "react";
import styled, { css } from "styled-components";

export const Footer = () => {
  return (
    <Wrapper>
      <Container>
        <Row>
          <h3>هفت روز هفته، در 24 ساعت شبانه‌روز پاسخگوی شما هستیم</h3>
          <Item>
            <span>support@nobitex.ir</span>
            <button>تماس با پشتیبانی</button>
            <button className="green">سوالات متداول</button>
          </Item>
        </Row>
      </Container>
      <Main_footer>
        <Footer_container>
          <Footer_center>
            <Footer_Nobitex>
              <img src="/images/nobitex-logo.png" />
              <h1>نوبیتکس</h1>
            </Footer_Nobitex>

            <Footer_item>
              <span>درباره نوبیتکس</span>
              <Footer_ul>
                <li>
                  <a href="/about/" data-type="internal" target="_self">
                    درباره ما
                  </a>
                </li>
                <li>
                  <a
                    href="https://blog.nobitex.ir/"
                    data-type="external"
                    target="_blank"
                  >
                    نوبیتکس بلاگ
                  </a>
                </li>
                <li>
                  <a href="/security/" data-type="internal" target="_self">
                    امنیت کیف پول
                  </a>
                </li>
                <li>
                  <a
                    href="/policies/terms/"
                    data-type="internal"
                    target="_self"
                  >
                    قوانین و مقررات
                  </a>
                </li>
                <li>
                  <a href="/contact-us/" data-type="internal" target="_self">
                    تماس با ما
                  </a>
                </li>
              </Footer_ul>
            </Footer_item>
            <Footer_item>
              <span>امکانات و خدمات</span>
              <Footer_ul>
                <li>
                  <a
                    href="https://testnet.nobitex.ir/"
                    data-type="external"
                    target="_blank"
                  >
                    بازار آزمایشی نوبیتکس
                  </a>
                </li>
                <li>
                  <a
                    href="/policies/referral/"
                    data-type="internal"
                    target="_self"
                  >
                    معرفی به دوستان
                  </a>
                </li>
                <li>
                  <a
                    href="https://apidocs.nobitex.ir/"
                    data-type="external"
                    target="_blank"
                  >
                    مستندات API
                  </a>
                </li>
              </Footer_ul>
            </Footer_item>
            <Footer_item>
              <span>راهنما و پشتیبانی</span>
              <Footer_ul>
                <li>
                  <a href="/faq/" data-type="internal" target="_self">
                    سوالات متداول
                  </a>
                </li>
                <li>
                  <a
                    href="/policies/user-levels/"
                    data-type="internal"
                    target="_self"
                  >
                    احراز هویت و سطوح کاربری
                  </a>
                </li>
                <li>
                  <a href="/pricing/" data-type="internal" target="_self">
                    قیمت ها و کارمزدها
                  </a>
                </li>
                <li>
                  <a
                    href="https://help.nobitex.ir/category/security/"
                    data-type="external"
                    target="_blank"
                  >
                    راهنمای امنیت حساب کاربری
                  </a>
                </li>
              </Footer_ul>
            </Footer_item>
          </Footer_center>
          <Footer_download>
            <h3>با اپلیکیشن موبایل نوبیتکس از هیچ معامله‌ای عقب نمی‌مونی!</h3>
            <Download>
              <a href="https://cdn.nobitex.ir/nobitex.apk" target="_blank">
                <img src="/images/direct-download.svg" alt="direct-download" />
              </a>
              <Download_method
                href="https://cafebazaar.ir/app/?id=market.nobitex"
                target="_blank"
              >
                <img
                  src="/images/download-from-bazar.svg"
                  alt="download-from-bazar"
                />
              </Download_method>
              <Download_method
                href="https://myket.ir/app/market.nobitex"
                target="_blank"
              >
                <img
                  src="/images/download-from-myket.svg"
                  alt="download-from-myket"
                />
              </Download_method>
            </Download>
          </Footer_download>
        </Footer_container>
        <Border>
          <Secondary_footer>
            <Secondary>
              <Social_media>
                <a href="https://twitter.com/nobitexmarket/" target="_blank">
                  <img src="/images/twitter.svg" alt="twitter" />
                </a>

                <a
                  href="https://www.linkedin.com/company/nobitexmarket/"
                  target="_blank"
                >
                  <img src="/images/linkedin.svg" alt="linkedin" />
                </a>

                <a href="https://t.me/nobitexmarket/" target="_blank">
                  <img alt="telegram" src="/images/telegram.svg" />
                </a>
                <a
                  href="https://www.instagram.com/nobitex_market/"
                  target="_blank"
                >
                  <img alt="instagram" src="/images/instagram.svg" />
                </a>
              </Social_media>
              <Copy_right>
                <span> © 2016-2021 NOBITEX, Inc-v0.3. </span>
                <button>
                  English
                  <img src="/images/world.svg" alt="switch language" />
                </button>
              </Copy_right>
            </Secondary>
          </Secondary_footer>
        </Border>
      </Main_footer>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  margin: auto;
  background-color: #4c505b;
  width: 100%;
`;

const Container = styled.div`
  display: flex;
  margin: auto;
  text-align: center;
  padding: 24px 15px;
  color: #fff;
  width: 100%;
  max-width: 1243px;
`;
const Row = styled.div`
  width: 100%;
  margin: auto;
  max-width: 1243px;
  display: flex;
  text-align: center;
  align-items: center;
  justify-content: space-between;
  justify-items: center;
  line-height: 24px;
  h3 {
    width: 100%;
    display: block;
    text-align: right;
    font-size: 19px;
    line-height: 23px;
    font-weight: 600;
  }
`;

const Item = styled.div`
  display: block;
  align-items: center;
  text-align: left;
  width: 100%;
  span {
    font-size: 15px;
    padding-left: 24px;
  }
  button {
    display: inline-block;
    font-family: Shabnam;
    padding-top: 6px;
    padding-bottom: 6px;
    padding-right: 24px;
    padding-left: 16px;
    font-size: 15px;
    line-height: 21px;
    border-radius: 4px;
    border: 1px solid #109a91;
    // border: none;
    height: 36px;
    border-color: #00aea4 !important;
    transition: color 0.15s ease-in-out, background-color 0.15s ease-in-out,
      border-color 0.15s ease-in-out, box-shadow 0.15s ease-in-out;
    &:hover {
    }
    &.green {
      color: #fff;
      background-color: #109a91;
      padding: 6px 24px;

      margin-right: 5px;
    }
    ${(p) =>
      p.color == ""
        ? css`
            color: "#fff";
          `
        : css`
            color: "#109A91";
          `}
    color: #109A91;
    background-color: #fff;
  }
`;

const Main_footer = styled.div`
  width: 100%;
  background-color: #14151a;
  margin: auto;
  height: 600px;
`;

const Footer_container = styled.div`
  margin: auto;
  display: block;
  max-width: 1243px;
  text-align: center;
  align-items: center;
  margin: auto;
  padding-left: 15px;
  padding-right: 15px;
  justify-content: center;
  width: 100%;
`;
const Footer_center = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 333px);
  align-items: flex-start;
  text-align: start;
  margin: auto;
  padding-top: 3.5rem;
  padding-bottom: 4.5rem;
  color: #fff;
`;
const Footer_Nobitex = styled.div`
  display: flex;
  align-items: center;
  h1 {
    padding-right: 1rem;
    font-weight: 700;
    font-size: 32px;
  }
`;
const Footer_item = styled.div`
  padding-right: 15px;
  padding-left: 15px;
  display: block;
  text-align: right;
  justify-content: space-between;
  align-items: flex-start;
  span {
    justify-content: space-between;
    font-size: 22px;
    line-height: 33px;
    font-weight: 600;
    padding-top: 0;
  }
`;
const Footer_ul = styled.ul`
  display: block;
  text-align: right;
  list-style: none;
  padding-top: 1rem;
  padding-bottom: 1rem;
  padding-right: 0;
  li,
  a {
    font-size: 15px;
    color: var(--text-secondary) !important;
    padding-top: 8px;
    padding-bottom: 8px;
    transition: all 0.5s ease-in-out;
  }
`;

const Footer_download = styled.div`
  margin: auto;
  max-width: 1243px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  line-height: 24px;
  padding-bottom: 24px;
  color: #fff;
  vertical-align: middle;
  h3 {
    margin-bottom: 8px;
    font-size: 19px;
    text-align: right;
  }
`;

const Download = styled.div`
  display: block;
  justify-content: space-between;
  text-align: left;
  align-items: center;
  vertical-align: middle;
`;

const Download_method = styled.a`
  padding-right: 1.5rem;
  img {
    background-color: #030504;
    height: 3rem;
    border-radius: 5px;
  }
`;

const Border = styled.div`
  border-top: 1px solid #85888f;
  width: 100%;
  max-width: 1903px;
  padding-top: 15px;
  padding-right: 15px;
`;
const Secondary_footer = styled.div`
  width: 100%;
  max-width: 1243px;
  margin: auto;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-right: 15p;
  padding-left: 15px;
`;

const Secondary = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding-top: 40px;
  padding-bottom: 40px;
`;
const Social_media = styled.div`
  display: flex;
  text-align: start;

  a {
    background-color: #4c505b;
    border-radius: 100%;
    display: flex;
    justify-content: center;
    text-align: center;
    align-items: center;
    vertical-align: middle;
    margin-left: 24px;
    height: 44px;
    width: 44px;
  }
`;

const Copy_right = styled.div`
  color: ${(p) => p.theme.colors.btnInactiveColor};
  font-size: 16px;
  //direction: ltr;
  display: flex;
  align-items: center;
  span {
    display: inline;
    direction: ltr;
    line-height: 24px;
  }
  button {
    color: ${(p) => p.theme.colors.btnInactiveColor};
    border: 1px solid ${(p) => p.theme.colors.btnInactiveColor};
    margin-right: 1rem;
    direction: ltr;
    display: flex;
    width: 130px;
    align-items: center;
    justify-content: center;
    text-align: center;
    background-color: #14151a;
    padding: 6px 24px;
    line-height: 21px;
    border-radius: 4px;
    font-size: 15px;
    img {
      margin-left: 8px;
    }
    &:hover {
      background-color: #a3a5a8;
      color: #fff;
    }
  }
`;
