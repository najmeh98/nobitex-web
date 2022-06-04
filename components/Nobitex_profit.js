import react from "react";
import styled, { css } from "styled-components";

export const Nobitexـprofit = () => {
  return (
    <Second_part>
      <Wrapper>
        <Row>
          <Profit>
            <h2>در سود نوبیتکس سهیم شوید</h2>
            <p>
              با دعوت از دوستانتان با لینک اختصاصی خود، هر بار که معامله می‌کنند
              برای همیشه تا 30% از کارمزد معاملاتشان از طرف نوبیتکس به شما تعلق
              می‌گیرد
            </p>
            <Knowـmore href="/policies/referral/" data-type="internal">
              بیشتر بدانید
            </Knowـmore>
          </Profit>

          <Image>
            <img
              src="/images/profit-img.png"
              alt=" بیشتر بدانید"
              loading="lazy"
            />
          </Image>
        </Row>
      </Wrapper>
    </Second_part>
  );
};

const Second_part = styled.div`
  background-color: #f0eafc;
  width: 100%;
  //height: 250px;
  margin: auto;
  padding-left: 15px;
`;

const Row = styled.div`
  max-width: 1243px;
  margin: auto;
  // display: grid;
  // grid-template-columns: auto auto;
  display: flex;
  flex-wrap: wrap;

  align-items: flex-end;
  //align-items: center;
  text-align: center;
  justify-content: space-between;
  padding-top: 2.5rem;
`;

const Wrapper = styled.div`
  margin: auto;
  max-width: 1243px;
`;

const Profit = styled.div`
  height: 210px;
  display: flex;
  flex-direction: column;
  //display: grid;
  //grid-template-columns: auto auto;
  margin-bottom: 56px;
  padding-right: 15px;
  padding-left: 15px;
  // padding-top: 0px;
  //width: 100%;
  text-align: right;
  align-items: flex-start;
  justify-content: center;
  line-height: 24px;
  font-size: 16px;
  color: #212529;
  h2 {
    font-size: 29px;
    line-height: 50px;
    font-weight: 700;
    margin-top: 19px;
    margin-bottom: 19px;
  }
  p {
    width: 670px;
    // max-width: 650px;
    font-size: 19px;
    line-height: 30px;
    margin-bottom: 2rem;
  }
`;

const Knowـmore = styled.a`
  display: inline-block;
  background-color: ${(p) => p.theme.colors.primary};
  border: 1px solid ${(p) => p.theme.colors.primary};
  color: #fff;
  width: 130px;
  padding: 6px 24px;
  border-radius: 24px;
  font-size: 15px;
  line-height: 21px;
  vertical-align: middle;
  border: none;
  text-align: center;
  cursor: pointer;
  &: hover {
    background-color: #5e35b1;
  }
`;

const Image = styled.div`
  position: relative;
  width: 100%;
  margin: auto;
  img {
    display: inline;
    text-aling: center;
    align-items: center;
    justify-content: center;
    bottom: 0;
    position: absolute;
    padding-right: 80px;
  }
`;
