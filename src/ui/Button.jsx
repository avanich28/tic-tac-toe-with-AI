import styled from "styled-components";

const StyledButton = styled.button`
  text-transform: uppercase;
  font-weight: bold;
  font-size: 23px;
  background-color: var(--color-dark);
  color: var(--color-light);
  padding: 0px 15px 4px 15px;
  border: none;
  border-radius: 50px;
  letter-spacing: 2.8px;
  transition: all 0.3s ease-in-out;
  font-family: "Darumadrop One", sans-serif;

  &:hover {
    transform: scale(1.01);
    color: var(--color-dark);
    background-color: var(--color-light);
    box-shadow: inset 0 0 0 2px var(--color-dark);
  }

  &:active {
    transform: scale(1);
  }
`;

function Button({ children }) {
  return <StyledButton>{children}</StyledButton>;
}

export default Button;
