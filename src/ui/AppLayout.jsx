import styled from "styled-components";
import Footer from "./Footer";
import Header from "./Header";
import Main from "./Main";

const StyledAppLayout = styled.div`
  height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 40px;
`;

function AppLayout() {
  return (
    <StyledAppLayout>
      <Header />
      <Main />
      <Footer />
    </StyledAppLayout>
  );
}

export default AppLayout;
