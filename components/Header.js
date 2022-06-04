import Head from "next/head";
import react from "react";
import styled, { css } from "styled-components";
import Link from "next/link";
import { desktop, notablet, tablet, Tablet } from "../public/media";
export const Header = () => {
  return (
    <Row>
      <Wrapper>
        <Continer>
          <Navbar_brand>
            <a>
              <img
                src="/images/nobitex-logo.png"
                alt="Nobitex Logo"
                width="42"
                height="42"
              />
              نوبیتکس
            </a>
          </Navbar_brand>

          <Navbar>
            {/* <div> */}
            <a>
              <img
                src="/images/download.svg"
                alt="usageHelp"
                width="21px"
                height="21px"
              />
              راهنمای استفاده
            </a>
            {/* </div> */}
            {/* <div> */}
            <Drop_downContinar>
              <a className="nav_item">
                <img src="/images/price.svg" alt="currentPrices" />
                قیمت لحظه‌ای رمزارزها
                <Symbol>▼</Symbol>
              </a>
              {/* </Drop_downContinar> */}
              <Dropdown className="item">
                <a>بیت کوین</a>
                <a>اتریوم </a>
                <a>تتر</a>
                <a>بیت کوین کش</a>
                <a>سایر ارزهای دیجیتال</a>
              </Dropdown>
            </Drop_downContinar>

            <a>
              <img src="/images/question.svg" alt="anyQuestion" />
              سوالی دارید؟{" "}
            </a>

            <a>
              <img src="/images/introduce.svg" alt="introducetoFriends" />
              معرفی به دوستان
            </a>
          </Navbar>

          <Navbar_Btn>
            <Btn> ورود</Btn>
            <Btn className="purple"> ثبت نام</Btn>
            <BarIcon>
              <img src="/images/barIcon.png" width="24px" height="16px" />
            </BarIcon>
          </Navbar_Btn>
        </Continer>
      </Wrapper>
    </Row>
  );
};

const Row = styled.div`
  height: 70px;
  line-height: 70px;
`;

const Wrapper = styled.header`
  position: fixed;
  overflow: hidden;
  margin: 0;
  z-index: 100;
  top: 0;
  right: 0;
  left: 0;
  //display: flex;
  background-color: #14151a;
  width: 100%;
  font-size: ${(p) => p.theme.fontSize.normall};
`;

const Continer = styled.div`
  display: flex;
  white-space: nowrap;
  align-items: center;
  justify-content: space-between;
  text-align: center;
  padding: 0px 10rem;
  margin: 0;
  ${notablet(css`
    padding: 0rem 4.5rem;
  `)}
  ${tablet(css`
    padding: 0rem 2rem;
  `)}
`;
const Navbar_brand = styled.div`
  font-size: 19px;
  padding-right: 30px;
  color: #fff;
  margin-left: 2rem;
  img {
    vertical-align: middle;
    margin-left: 10px;
  }
`;

const Navbar = styled.div`
  font-size: 15px;
  // margin-left: 3.2rem;
  color: #fff;
  align-items: center;
  display: flex;
  flex-grow: 1;
  img {
    visibility: hidden;
  }
  a {
    //padding-right: 1.5rem;
    padding-left: 1.5rem;
    display: flex;
    transition: all 0.22s;
    &:hover {
      color: ${(p) => p.theme.colors.secondary};
    }
  }
  &.nav_item:hover {
    &.item {
      display: block;
    }
  }
  ${tablet(css`
    display: none;
  `)}
`;

const Symbol = styled.div`
  font-size: 10px;
  padding-top: 3px;
  padding-right: 7px;
`;

const Navbar_Btn = styled.div`
  display: flex;

  flex-flow: row wrap;
  text-align: right;
  align-items: flex-start;
  // margin-right: 30rem;
`;

const Btn = styled.button`
  font-size: 15px;
  line-height: 1.5;
  font-family: inherit;
  color: #fff;
  border: none;
  background-color: transparent;
  padding: 6px 24px;
  cursor: pointer;
  &.purple {
    background-color: ${(p) => p.theme.colors.primary};
    border-radius: 5px;
  }
`;
const BarIcon = styled.button`
  padding: 4px 12px;
  font-size: 20px;
  line-height: 1.3;
  border: none;
  background-color: transparent;
  margin-right: 0.6rem;
  ${desktop(css`
    display: none;
  `)}
`;

const Dropdown = styled.div`
  position: absolute;
  background-color: #1e2026;
  z-index: 1000;
  margin-top: 2px;
  display: none;
  text-align: right;
  transition: all 0.22s;
  left: 67%;
  right: auto;
  transform: translate(-50%);
  border-radius: 4px;
  border: 1px solid #14151a;
  padding: 3px;
  a {
    padding: 14px 19px;
    display: flex;
    flex-direction: column;
    text-align: right;
    align-items: flex-start;
    &:hover {
      color: ${(p) => p.theme.colors.secondary};
      background-color: #292c34;
    }
    &:last-child {
      border-top: 1px solid #535a5f;
    }
  }
`;

const Drop_downContinar = styled.div`
  position: relative;
  &:hover ${Dropdown} {
    display: block;
  }
`;
