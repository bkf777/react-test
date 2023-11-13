import Styled from "styled-components";
import Swiper from "@/components/my-swiper";

export default function CustomHome() {
  return (
    <>
      <Header />
      <Main />
      <Footer />
    </>
  );
}
const Header = () => {
  return <HeaderStyled>Header</HeaderStyled>;
};
const Main = () => {
  return (
    <div>
      <Swiper spaceBetween={59} slidesPerView={10} children={[1, 2, 3]} width={300} height={300} />
      {/* <Swiper /> */}
    </div>
  );
};
const Footer = () => {
  return <div>Footer</div>;
};

const HeaderStyled = Styled.div`

`;
