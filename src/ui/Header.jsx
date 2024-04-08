import styled from "styled-components";

const StyledHeader = styled.h1`
  font-size: 47px;
  font-weight: bold;
  animation: expand 1.2s forwards;
`;

function Header() {
  return <StyledHeader>Tic Tac Toe - AI</StyledHeader>;
}

export default Header;
