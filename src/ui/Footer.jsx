import styled from "styled-components";
import { FaGithub } from "react-icons/fa6";

const StyledFooter = styled.a`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 2px;
  font-size: small;
  text-decoration: none;
  color: var(--color-dark);

  &:hover {
    color: var(--color-red);
    transition: all 0.3s ease-in-out;
  }
`;

const Icon = styled.div`
  font-size: 38px;
`;

function Footer() {
  return (
    <StyledFooter href="https://github.com/avanich28/tic-tac-toe-with-AI.git">
      <Icon>
        <FaGithub />
      </Icon>
      <p>&copy; Copyright by avanich28</p>
    </StyledFooter>
  );
}

export default Footer;
