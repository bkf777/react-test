import Styled from "styled-components";

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
  return <div>Main</div>;
};
const Footer = () => {
  return <div>Footer</div>;
};

const HeaderStyled = Styled.div`

`;
