import react from "react";
import styled, { css } from "styled-components";
import { noMobile, tablet } from "../public/media";
export const Trad = () => {
  return (
    <Background>
      <Main>
        <Container>
          <Wrapper>
            <HRow>
              <Row>
                <p>انتخاب بازار بر اساس</p>
                <Button>
                  <Btn mode="Tbtn">تومان IRT</Btn>
                  <Btn>تتر USTD</Btn>
                </Button>
              </Row>
            </HRow>
            <div>
              <Market>
                <Table>
                  <thead>
                    <tr>
                      <th className="name-column">نام</th>
                      <th>آخرین قیمت</th>
                      <th> تغییر 24h</th>
                      <th>نمودار هفتگی</th>
                      <th></th>
                    </tr>
                  </thead>
                  <tbody>
                    <Tr>
                      <td>
                        <Bitcoin
                          href="/bitcoin/"
                          data-type="internal"
                          className="name-column"
                        >
                          <img
                            src="/images/bitcoin.svg"
                            alt="btc"
                            width="36px"
                            height="36px"
                          />
                          <BTC>
                            <p>BTC</p>
                            <span>بیت کوین</span>
                          </BTC>
                        </Bitcoin>
                      </td>
                      <td className="td-2">
                        <div>1,319,900,123 </div>
                      </td>
                      <td className="td-3">
                        <Badge_column>
                          {" "}
                          <span>+4.63%</span>
                        </Badge_column>
                      </td>
                      <td className="td-4">
                        <Img
                          src="images/btc.png"
                          alt="نمودار قیمت"
                          width="115 px"
                          height="35px"
                        />
                      </td>
                      <td className="td-5">
                        <Price>
                          <a href="app/exchange/btc-rls/" data-type="external">
                            خرید و فروش
                          </a>
                        </Price>
                      </td>
                    </Tr>

                    <Tr>
                      <td>
                        <Bitcoin
                          href="/ethereum/"
                          data-type="internal"
                          className="name-column"
                        >
                          <img
                            src="/images/eth.svg"
                            alt="eth"
                            width="36px"
                            height="36px"
                          />
                          <BTC>
                            <p>ETH</p>
                            <span>اتریوم</span>
                          </BTC>
                        </Bitcoin>
                      </td>
                      <td className="td-2">
                        <div>94,500,000 </div>
                      </td>
                      <td className="td-3">
                        <Badge_column>
                          {" "}
                          <span>+12.31%</span>
                        </Badge_column>
                      </td>
                      <td className="td-4">
                        <Img
                          src="images/eth.png"
                          alt="نمودار قیمت"
                          width="115 px"
                          height="35px"
                        />
                      </td>
                      <td className="td-5">
                        <Price>
                          <a href="app/exchange/btc-rls/" data-type="external">
                            خرید و فروش
                          </a>
                        </Price>
                      </td>
                    </Tr>
                    <Tr>
                      <td>
                        <Bitcoin
                          href="/tether/"
                          data-type="internal"
                          className="name-column"
                        >
                          <img
                            src="/images/usdt.svg"
                            alt="eth"
                            width="36px"
                            height="36px"
                          />
                          <BTC>
                            <p>USDT</p>
                            <span>تتر</span>
                          </BTC>
                        </Bitcoin>
                      </td>
                      <td className="td-2">
                        <div>23,071</div>
                      </td>
                      <td className="td-3">
                        <Badge_column>
                          {" "}
                          <span>+3%</span>
                        </Badge_column>
                      </td>
                      <td className="td-4">
                        <Img
                          src="images/usdt.png"
                          alt="نمودار قیمت"
                          width="115 px"
                          height="35px"
                        />
                      </td>
                      <td className="td-5">
                        <Price>
                          <a href="app/exchange/btc-rls/" data-type="external">
                            خرید و فروش
                          </a>
                        </Price>
                      </td>
                    </Tr>

                    <Tr>
                      <td>
                        <Bitcoin
                          href="/tron/"
                          data-type="internal"
                          className="name-column"
                        >
                          <img
                            src="/images/trx.svg"
                            alt="trx"
                            width="36px"
                            height="36px"
                          />
                          <BTC>
                            <p>TRX</p>
                            <span>ترون</span>
                          </BTC>
                        </Bitcoin>
                      </td>
                      <td className="td-2">
                        <div>3,304</div>
                      </td>
                      <td className="td-3">
                        <Badge_column>
                          {" "}
                          <span> +8.36%</span>
                        </Badge_column>
                      </td>
                      <td className="td-4">
                        <Img
                          src="images/trx.png"
                          alt="نمودار قیمت"
                          width="115 px"
                          height="35px"
                        />
                      </td>
                      <td className="td-5">
                        <Price>
                          <a href="app/exchange/btc-rls/" data-type="external">
                            خرید و فروش
                          </a>
                        </Price>
                      </td>
                    </Tr>

                    <Tr>
                      <td>
                        <Bitcoin
                          href="/dogecoin/"
                          data-type="internal"
                          className="name-column"
                        >
                          <img
                            src="/images/doge.svg"
                            alt="doge"
                            width="36px"
                            height="36px"
                          />
                          <BTC>
                            <p>GOGE</p>
                            <span>دوج کوین</span>
                          </BTC>
                        </Bitcoin>
                      </td>
                      <td className="td-2">
                        <div>11,950</div>
                      </td>
                      <td className="td-3">
                        <Badge_column>
                          {" "}
                          <span>+17.17%</span>
                        </Badge_column>
                      </td>
                      <td className="td-4">
                        <Img
                          src="images/doge.png"
                          alt="نمودار قیمت"
                          width="115 px"
                          height="35px"
                        />
                      </td>
                      <td className="td-5">
                        <Price>
                          <a href="app/exchange/btc-rls/" data-type="external">
                            خرید و فروش
                          </a>
                        </Price>
                      </td>
                    </Tr>
                  </tbody>
                </Table>
                <Current_price href="/current-prices/">
                  <Bazar>
                    <span>نمایش همه بازارها</span>
                    <div data-v-10f469f4="" data-v-15222d50="" class="left">
                      <i
                        data-v-10f469f4=""
                        aria-hidden="true"
                        class="fas fa-chevron-right color-inherit"
                      ></i>
                    </div>
                  </Bazar>
                </Current_price>
              </Market>
            </div>
          </Wrapper>
        </Container>
      </Main>
    </Background>
  );
};

const Background = styled.div`
  // background-color: #f2f4f5;
  height: 500px;
  //  overflow: hidden;
  //z-index: -100;
`;

const Main = styled.div`
  // overflow: hidden;
  max-width: 1325px;
  position: relative;
  display: block;
  //top: 40%;
  width: 100%;
  margin: auto;
  padding: 0px 15px;
  z-index: 2;
  ${noMobile(css`
    margin-top: -32.4rem;
    max-width: 1100px;
  `)}
`;

const Container = styled.div`
  display: flex;
  margin-top: -19.3%;
  justify-content: center;
  max-width: 100%;
  align-items: center;
`;

const Wrapper = styled.div`
  position: absolute;
  top: 30%;
`;
const HRow = styled.div`
  display: inline-block;
  box-shadow:rgb(20, 21, 26, 0.1); 0 -10px 10px -2px; 
`;
const Row = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  text-align: center;
  background-color: #fff;
  padding: 0px 16px;
  padding-top: 16px;
  border-radius: 10px 10px 0px 0px;
  box-shadow: rgb(20, 21, 26, 0.1) 0 -10px 10px -2px;
  p {
    margin-left: 1.5rem;
  }
`;

const Btn = styled.button`
  border: none;
  font-family: inherit;
  ${(p) =>
    p.mode == "Tbtn"
      ? css`
          background-color: #85888f;
          color: #fff;
        `
      : css`
          background-color: #e3e4e5;
          color: #a3a5a8;
        `};
  padding: 6px 20px;
  line-height: 24px;
  font-size: 15px;
  // height: 40px;
  ${(p) =>
    p.mode == "Tbtn"
      ? css`
          border-radius: 0px 3px 3px 0px;
        `
      : css`
          border-radius: 3px 0px 0px 3px;
        `};
`;
const Button = styled.div`
  display: flex;
`;

const Market = styled.div`
  //display: flex;
  //flex-wrap: no-wrap;
  width: 100%;
  background-color: #fff;
  box-shadow: rgb(20, 21, 26, 0.1) 0 -10px 10px -2px;
  border-radius: 10px 0px 10px 10px;
  height: 408px;
  line-height: 1.5;
  font-size: 16px;
  font-weight: 400;
  vertical-align: middle;
  white-space: nowrap;
`;

const Table = styled.table`
  border-collapse: collapse;
  display: table;
  border-spacing: 2px;
  border-color: gray;
  
  font-size: 15px;
  thead {
    display: table-header-group;
  }
  tbody {
    display: table-row-group;
  }
  tr {
    display: table-row;
  }
  td {
    height: 64px;
    border-top: 1px solid #dee2e6;
    padding: 12px;
    display: table-cell;
  }

  th {
    white-space: nowrap;
    padding: 12px;
    display: table-cell;
    vertical-align: middle;
    text-align: start;
    color: #a3a5a8;
    font-size: 15px;
    font-weight: 400;
    &.name-column {
      //  padding: 12px 64px;
    }
  }

  td:first-child,
  th:first-child {
    padding: 12px 64px;
    width: 420px;
  }
  th:nth-child(2),
  td:nth-child(2) {
    width: 185px;
  }
  th:nth-child(3),
  td:nth-child(3) {
    width: 330px;
  }
  th:nth-child(4),
  td:nth-child(4) {
    width: 210px;
  }
  th: nth-child(5), 
  td:nth-child(5) {
   width: 95px;
  }
`;
const Tr = styled.tr`
  //background-color: #f2f3f5;
  display: block;
  align-items: center;
  text-align: right;
  justify-content: center;
  td {
    &.td-2,
    &.td-4,
    &.td-5 {
      padding-right: 1rem;
      padding-left: 1rem;
    }
    &.td-3 {
      padding-right: 1.5rem;
      padding-left: 1.5rem;
    }
  }
`;
const Bitcoin = styled.a`
  vertical-align: middle;

  display: flex;
  align-items: center;
  text-align: right;
  justify-content: start;
  img {
    margin-left: 16px;
  }
`;
const BTC = styled.div`
  display: flex;
  align-items: flex-start;
  p {
    margin-left: 16px;
    font-size: 19px;
    color: ${(p) => p.theme.colors.textPrimary};
    font-weight: 700;
  }
  span {
    color: var(--text-secondary);
  }
`;

const Badge_column = styled.div`
  color: ${(p) => p.theme.colors.secondary};
  direction: ltr;
  background-color: #dcf8f7;
  font-weight: 700;
  padding: 4px;
  display: inline-block;
  //margin-right: 1.5rem;
  //margin-left: 1.5rem;
`;
const Img = styled.img`
  color: #9960d4;
  display: inline;
  filter: invert(42%) sepia(56%) saturate(6477%) hue-rotate(
    244deg
    ) brightness(88%) contrast(84%);
    }
`;

const Price = styled.div`
  display: block;
  text-align: right;
  align-items: center;
  justify-content: center;
  vertical-align: middle;
  a {
    color: #00aea4 !important;
    border: 1px solid #00aea4 !important;
    background-color: transparent !important;
    padding: 6px 32px;
    border-radius: 4px;
    margin: auto;

    &:hover {
      background-color: #00aea4;
      color: #fff;
    }
  }
`;

const Bazar = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  padding: 16px;
  border-top: 1px solid #dee2e6;
  width: 100%;
  background-color: #fff;
  border-radius: 0px 0px 10px 10px;
  span {
    color: #784ed1 !important;
    font-weight: 400;
    font-size: 16px;
    background-color: transparent;
  }
`;

const Current_price = styled.a`
  // color: #784ed1 !important;
  font-weight: 400;
  font-size: 16px;
  background-color: transparent;
`;
