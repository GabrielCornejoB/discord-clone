import s from "./Chat.module.scss";
import { ProfileIcon } from "../../ProfileIcon";

interface Props {
  name?: string;
  isActive?: boolean;
  index: number;
  handleClick: (index: number) => void;
  color: "green" | "purple";
}

const Chat = ({
  name = "Username",
  isActive = false,
  handleClick,
  index,
  color,
}: Props) => {
  return (
    <div
      className={`${s.chat} ${isActive && s.active}`}
      onClick={() => handleClick(index)}
    >
      <ProfileIcon color={color} />
      <span>{name}</span>
    </div>
  );
};
export default Chat;
