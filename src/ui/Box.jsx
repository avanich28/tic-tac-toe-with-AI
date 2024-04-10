import styled, { css } from "styled-components";

const players = {
  x: css`
    color: var(--color-yellow);
  `,
  o: css`
    color: var(--color-red);
  `,
};

const StyledBox = styled.div`
  width: 100px;
  height: 100px;
  background-color: var(--color-green);
  border-radius: 15px;
  cursor: pointer;
  display: flex;
  justify-content: center;
  font-size: 75px;
  animation: expand 1.2s forwards;

  ${(props) => players[props.$player]}
`;

const Symbol = styled.span`
  animation: expand 0.1s forwards;
`;

function Box({ num, player, onSpot }) {
  return (
    <StyledBox $player={player} onClick={() => onSpot(num)}>
      {typeof player !== "number" && <Symbol>{player}</Symbol>}
    </StyledBox>
  );
}

export default Box;
