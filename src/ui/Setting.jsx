import styled from "styled-components";
import { FaGear } from "react-icons/fa6";
import { TbRobot } from "react-icons/tb";
import { TbRobotOff } from "react-icons/tb";
import { FiSun } from "react-icons/fi";
import { FiMoon } from "react-icons/fi";
import { useSetting } from "../contexts/SettingContext";
import IconButton from "./IconButton";
import { useBoardGame } from "../contexts/BoardGameContext";

const StyledSetting = styled.div`
  position: absolute;
  right: 15px;
  top: 15px;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 8px;
`;

const Mode = styled.p`
  font-size: 23px;
  margin-right: 8px;
`;

function Setting() {
  const {
    isOpen,
    AIMode,
    isDarkMode,
    toggleSetting,
    toggleAIMode,
    toggleDarkMode,
  } = useSetting();
  const { handleRestart } = useBoardGame();

  return (
    <StyledSetting>
      <Mode>Mode: {AIMode ? "AI" : "Human"}</Mode>
      <IconButton onClick={toggleSetting} type="secondary" isActive={isOpen}>
        <FaGear />
      </IconButton>

      {isOpen && (
        <>
          <IconButton
            onClick={() => {
              handleRestart();
              toggleAIMode();
            }}
          >
            {AIMode ? <TbRobot /> : <TbRobotOff />}
          </IconButton>

          <IconButton onClick={toggleDarkMode}>
            {isDarkMode ? <FiSun /> : <FiMoon />}
          </IconButton>
        </>
      )}
    </StyledSetting>
  );
}

export default Setting;
