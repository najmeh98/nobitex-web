import react from "react";
import styled, { css } from "styled-components";
import { noMobile, tablet } from "../public/media";
export const DigitalCurrency = () => {
  return (
    <Wrapper>
      <Continar>
        <Row>
          <h2>بهترین امکانات خرید و فروش ارزهای دیجیتال</h2>
        </Row>

        <Wallet>
          <Items>
            <Comment>
              <Image>
                <img src="/images/wallet.png" />
              </Image>
              <Subtitle>
                <h4>مدیریت موجودی کیف پول</h4>
                <p>
                  رمزارزهای دیجیتال محبوب را خرید و فروش کنید و در یکجا وضعیت
                  موجودی خود را دنبال کنید
                </p>
              </Subtitle>
            </Comment>
            <Comment>
              <Image>
                <img src="/images/card.png" />
              </Image>
              <Subtitle>
                <h4>پرداخت با کارت‌های شتاب</h4>
                <p>
                  معامله انواع رمزارز با تومان از طریق واریز و برداشت با
                  کارت‌های بانکی عضو شتاب
                </p>
              </Subtitle>
            </Comment>
            <Comment>
              <Image>
                <img src="/images/safewallet.png" />
              </Image>
              <Subtitle>
                <h4>کیف پول امن</h4>
                <p>
                  رمز اختصاصی کیف پول شما به صورت آفلاین نگهداری می شود و در
                  برابر هک ایمن خواهد بود{" "}
                </p>
              </Subtitle>
            </Comment>
            <Comment>
              <Image>
                <img src="/images/wallet.png" />
              </Image>
              <Subtitle>
                <h4>کارمزد رقابتی</h4>
                <p>
                  کارمزد خرید و فروش در نوبیتکس بسیار کم است و با بالاتر رفتن
                  حجم معاملات کاهش می‌یابد
                </p>
              </Subtitle>
            </Comment>
          </Items>
          <Img>
            <img src="/images/app-screenshot.png" alt="اسکرین شات برنامه" />
          </Img>
        </Wallet>
      </Continar>

      <FooterWrapper>
        <Container_numbers>
          <Numbers>
            <h3>
              600<span>K</span>+
            </h3>
            <p>کاربر فعال</p>
          </Numbers>

          <Numbers>
            <h3>
              5.5<span>M</span>+
            </h3>
            <p>معاملات انجام شده</p>
          </Numbers>
          <Numbers>
            <h3>
              200<span>B</span>+
            </h3>
            <p>حجم معاملات</p>
          </Numbers>
        </Container_numbers>
      </FooterWrapper>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-image: url("/images/facilities-bg.png");
  width: 100%;
  margin: auto;
  background-color: #f2f3f5 !important;
  height: 900px;
  background-repeat: no-repeat;
`;
const Continar = styled.div`
  margin: auto;
  display: block;
  //  max-width: 1243px;
  width: 100%;
  text-align: center;
  align-items: center;
  justify-content: space-between !important;
  margin: 0px 15px;
  padding-top: 56px;
  padding-bottom: 18px;
`;
const Row = styled.div`
  padding-top: 16px;
  padding-bottom: 16px;
  margin-bottom: 2.5rem !important;
  line-height: 24px;
  h2 {
    font-size: 29px;
    font-weight: 700;
    padding: 0rem 1rem;
    line-height: 50px;

    ${tablet(css`
      font-size: 19px;
      line-height: 30px;
    `)}
  }
`;

const Wallet = styled.div`
  display: grid;
  grid-template-columns: 670px 630px;
  grid-column-gap: 0px;
  margin: auto;
  text-align: center;
  align-items: center;
  justify-content: space-around !important;
  //justify-items: center;
  max-width: 1243px;
  width: 100%;
`;
const Items = styled.div`
  //margin: auto;
  display: grid;
  text-align: right;
  align-items: stretch !important;
  justify-content: start;
  vertical-align: middle;
  ${noMobile(css``)}
`;

const Comment = styled.div`
  display: flex;
  vertical-align: middle;
  justify-content: start;
  align-items: center;
  text-align: start;
  margin-bottom: 2.5rem;
`;

const Image = styled.div`
  background-color: #fff;
  border-radius: 100%;
  margin-left: 1rem;
  width: 78px;
  height: 78px;
  display: flex;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  box-shadow: rgba(0, 0, 0, 0.1) 0px 2px 10px 0px;
`;

const Subtitle = styled.div`
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  line-height: 24px;
  h4 {
    line-height: 36px;
    font-size: 19px;
    padding-bottom: 8px;
    ${tablet(css`
      font-size: 15px;
    `)}
  }
  p {
    max-width: 460px;
    line-height: 23px;
    ${tablet(css`
      font-size: 12px;
      max-width: 300px;
    `)}
  }
`;

const Img = styled.div`
  // position: relative;
  // right: 25px;
  margin-bottom: 1.5rem !important;
  padding: 0px 15px;
  ${noMobile(css`
    width: 380px;
    height: 270px;
  `)}
`;

const FooterWrapper = styled.div`
  background-color: #4c505b;
  background-image: url("/images/by-numbers-bg.png");
  background-repeat: no-repeat;
  width: 100%;
  height: 181px;
  float: right;
`;
const Container_numbers = styled.div`
  padding: 0px 15px;
  max-width: 1243px;
  margin: auto;
  display: grid;
  grid-template-columns: repeat(3, 445px);
  align-items: center;
  text-align: center;
  justify-content: center;
  justify-items: center;
  padding: 2rem 0rem;
`;

const Numbers = styled.div`
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
  padding-top: 1rem;
  padding-bottom: 1rem;
  letter-spacing: normal;
  h3 {
    font-size: 42px;
    gont-weight: bold;
    color: #fff;
    line-height: 63px;
  }
  span {
    color: #d3bdff;
    padding-left: 0.5rem;
  }
  p {
    color: #ffffff;
    font-size: 15px;
    line-height: 22.5px;
  }
`;
const Trades = styled.div``;
