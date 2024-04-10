import styled, { css } from "styled-components";

const types = {
  primary: css`
    background-color: var(--color-dark);
    color: var(--color-light);
    animation: moveDown 0.3s forwards;
  `,
  secondary: css`
    background-color: transparent;
    color: var(--color-dark);
    transition: all 0.3s ease-in-out;
    ${(props) =>
      props.$active === true
        ? css`
            transform: rotate(20deg);
          `
        : css`
            transform: rotate(-20deg);
          `}
  `,
};

const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  border-radius: 100%;
  width: 40px;
  height: 38px;
  font-size: 20px;
  cursor: pointer;

  ${(props) => types[props.$type]}
`;

function IconButton({ children, onClick, type = "primary", active }) {
  return (
    <Button onClick={onClick} $type={type} $active={active}>
      {children}
    </Button>
  );
}

export default IconButton;
