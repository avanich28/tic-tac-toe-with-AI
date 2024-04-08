import styled from "styled-components";
import Box from "./Box";
import Button from "./Button";

const StyledMain = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 20px;
`;

const BoardGame = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 310px;
  gap: 5px;
`;

function Main() {
  return (
    <StyledMain>
      <BoardGame>
        {Array(9)
          .fill("")
          .map((_, i) => (
            <Box key={i} num={i} />
          ))}
      </BoardGame>

      <Button>Restart</Button>
    </StyledMain>
  );
}

export default Main;
