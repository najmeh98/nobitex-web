import react from "react";
import styled, { css } from "styled-components";

export const LearnContainer = () => {
  return (
    <Wrapper>
      <Container>
        <Learn_more>
          <h2>همراه با نوبیتکس بیشتر یاد بگیرید</h2>
          <Nobitex_training>
            <BuyingGuide>
              <Item href="https://help.nobitex.ir/چطور-در-نوبیتکس-خرید-و-فروش-انجام-بدهم؟/">
                <Symbol>
                  <Img
                    src="/images/learnMoreIcon.png"
                    alt="راهنمای خرید ارز دیجیتال"
                  />
                </Symbol>
                <h4>راهنمای خرید ارز دیجیتال</h4>
              </Item>
            </BuyingGuide>

            <BuyingGuide>
              <Item href="https://www.aparat.com/nobitex/" data-type="external">
                <Symbol>
                  <Img src="/images/video.png" alt="ویدئوهای آموزشی" />
                </Symbol>
                <h4>ویدئوهای آموزشی</h4>
              </Item>
            </BuyingGuide>

            <BuyingGuide>
              <Item href="https://blog.nobitex.ir/" data-type="external">
                <Symbol>
                  <Img src="/images/blog.png" alt="نوبیتکس بلاگ" />
                </Symbol>
                <h4>نوبیتکس بلاگ</h4>
              </Item>
            </BuyingGuide>

            <BuyingGuide>
              <Item href="/faq/" data-type="internal">
                <Symbol>
                  <Img src="/images/question.png" alt="سوالات متداول " />
                </Symbol>
                <h4> سوالات متداول </h4>
              </Item>
            </BuyingGuide>
          </Nobitex_training>
        </Learn_more>
      </Container>
    </Wrapper>
  );
};

const Wrapper = styled.div`
  background-color: #fff;
  width: 100%;
  max-width: 1243px;
  padding: 0px 15px;
  margin: auto;
`;

const Container = styled.div`
  max-width: 1243px;
  margin: auto;
  display: block;
  text-align: center;
  align-items: center;
  jusrify-content: center;
  padding-top: 48px;
  padding-bottom: 130px;
  margin: 0px -15px;
`;
const Learn_more = styled.div`
  margin: auto;
  display: grid;
  text-align: center;
  align-items: center;
  jusrify-content: center;
  padding: 0px 15px;
  margin-bottom: 24px;
  h2 {
    padding: 16px 0px;
    margin-bottom: 24px;
    font-size: 29px;
    line-height: 50px;
  }
`;

const Nobitex_training = styled.div`
  display: flex;
  text-align: center;
  align-items: center;
  jusrify-content: center;
`;

const BuyingGuide = styled.div`
  display: grid;
  grid-template-columns: 300px;
  text-align: center;
  align-items: center;
  jusrify-content: center;
  padding-right: 15px;
  padding-left: 15px;
`;

const Symbol = styled.div`
  display: flex;
  text-align: center;
  align-items: center !important;
  jusrify-content: center;
  justify-items: center;
  border: 12px solid ${(p) => p.theme.colors.backgroundColor};
  border-radius: 100%;
  width: 110px;
  height: 110px;
  transition: all 0.25s;
  margin-top: 1rem;
  margin-bottom: 1rem;
  &: hover {
    border: 7px solid #784ed1;
    transition: all 0.25s;
  }
`;

const Img = styled.img`
  border-radius: 10%;
  margin: auto;
`;

const Item = styled.a`
  display: flex;
  flex-direction: column;
  text-align: center;
  align-items: center !important;
  jusrify-content: center;
  h4 {
    padding-bottom: 8px;
    font-size: 19px;
    line-height: 36px;
    font-weight: 600;
    color: ${(p) => p.theme.colors.textPrimary};

    &: hover {
      color: #784ed1;
    }
  }
`;
