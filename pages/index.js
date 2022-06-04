import styled from "styled-components";
import { NobitexArticles } from "../components/NobitexArticles";
import { Header } from "../components/Header";
import { Advertising } from "../components/Advertising";
import { Layout } from "../components/Layout";
import { Main } from "../components/Main";
import { Trad } from "../components/Trad";
import { DigitalCurrency } from "../components/DigitalCurrency";
import { LearnContainer } from "../components/LearnContainer";
import { Nobitexـprofit } from "../components/Nobitex_profit";
import { Footer } from "../components/Footer";

function HomePage() {
  return (
    <Wrapper>
      {/* <Layout> */}
      <Header />

      <Main />
      <Trad />
      <NobitexArticles />
      <Advertising />
      {/* </Layout> */}

      <DigitalCurrency />
      <LearnContainer />
      <Nobitexـprofit />
      <Footer />
    </Wrapper>
  );
}

export default HomePage;

const Wrapper = styled.div`
  // margin: 0px 15px;
  background-color: #f2f4f5;
  z-index: -1;
  height: 2000px;
`;

const Continar = styled.div`
  height: 1000;
`;
