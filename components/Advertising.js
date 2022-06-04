import react from "react";
import styled, { css } from "styled-components";
import { noMobile, tablet, desktop } from "../public/media";
export const Advertising = () => {
  return (
    <Wrapper>
      <Why_nobitex>
        <Continar>
          <h2> چرا نوبیتکس را انتخاب کنیم؟ </h2>
        </Continar>
        <Row>
          <Simpledeal>
            <img src="/images/firstpic.png" alt="ساده و کاربردی" />
            <span>ساده و کاربردی</span>
            <p>
              محیط ساده و کاربردی نوبیتکس، معامله ارزدیجیتال را برای شما لذت بخش
              خواهد کرد.
            </p>
          </Simpledeal>

          <Simpledeal>
            <img src="/images/secondpic.png" alt="ساده و کاربردی" />
            <span>خرید و فروش امن</span>
            <p>
              اولویت نوبیتکس امنیت است. با خیالی آسوده و بدون نگرانی خرید و فروش
              کنید.
            </p>
          </Simpledeal>

          <Simpledeal>
            <img src="/images/thirdpic.png" alt="ساده و کاربردی" />
            <span>پیشرو و سریع</span>
            <p>
              تنوع رمزارزها و سرعت معاملات، نوبیتکس را جزو بهترین بازارهای
              آنلاین قرار داده است.
            </p>
          </Simpledeal>
        </Row>
      </Why_nobitex>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  max-width: 100%;
  margin: auto;
  //max-width: 1324px;
  background-color: #fff;
  display: block;
  text-align: center;
  align-items: center;
  justify-content: center;
`;

const Why_nobitex = styled.div`
  padding-top: 48px;
  padding-bottom: 65px;
`;

const Continar = styled.div`
  padding-top: 20px;
  padding-bottom: 66px;
  h2 {
    padding: 0px 16px;
    font-weight: 700;
    font-size: 30px;
  }
`;

const Row = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 440px);
  row-gap: 20px;
  text-align: center;
  align-items: center;
  justify-content: center;
  //max-width: 33.3%;
  ${noMobile(css`
    grid-template-columns: repeat(3, 350px);
    // max-width: 100%;
  `)}
`;

const Simpledeal = styled.div`
  display: grid;
  text-align: center;
  align-items: center;
  justify-content: center;
  justify-items: center;
  margin: auto;
  span {
    padding-top: 35px;
    font-weight: 600;
    font-size: 19px;
    line-height: 36px;
    padding-bottom: 10px;

    ${tablet(css`
      font-size: 15px;
    `)}
  }
  p {
    line-height: 22px;
    color: #4c505b;
    max-width: 280px;
    font-size: 15px;
    ${tablet(css`
      font-size: 12px;
    `)}
  }
  ${noMobile(css`
    img {
      height: 120px;
    }
  `)}
`;
