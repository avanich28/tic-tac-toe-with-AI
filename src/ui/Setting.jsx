import styled from "styled-components";
import { FaGear } from "react-icons/fa6";
import { TbRobot } from "react-icons/tb";
import { TbRobotOff } from "react-icons/tb";
import { useSetting } from "../contexts/SettingContext";
import IconButton from "./IconButton";

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
  const { isOpen, setIsOpen, modeAI, setModeAI } = useSetting();

  return (
    <StyledSetting>
      <Mode>Mode: {modeAI ? "AI" : "Human"}</Mode>
      <IconButton
        onClick={() => setIsOpen((is) => !is)}
        type="secondary"
        isActive={isOpen}
      >
        <FaGear />
      </IconButton>

      {isOpen && (
        <IconButton onClick={() => setModeAI((is) => !is)}>
          {modeAI ? <TbRobot /> : <TbRobotOff />}
        </IconButton>
      )}
    </StyledSetting>
  );
}

export default Setting;
