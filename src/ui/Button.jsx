import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  font-size: 20px;
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 0px 20px 4px 20px;
  border: none;
  border-radius: 50px;
  letter-spacing: 2px;
  transition: all 0.3s ease-in-out;
  font-family: "Darumadrop One", sans-serif;
  animation: unhide 2s forwards;

  &:hover {
    transform: scale(1.03);
    color: var(--color-dark);
    background-color: var(--color-white);
    box-shadow: inset 0 0 0 2px var(--color-dark);
  }

  &:active {
    transform: scale(1);
  }
`;

function Button({ children, onClick }) {
  return <StyledButton onClick={onClick}>{children}</StyledButton>;
}

export default Button;
