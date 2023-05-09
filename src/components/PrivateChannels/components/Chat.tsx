import s from "./Chat.module.scss";
import { ProfileIcon } from "../../ProfileIcon";

interface Props {
  name?: string;
  isActive?: boolean;
  index: number;
  handleClick: (index: number) => void;
}

const Chat = ({
  name = "Username",
  isActive = false,
  handleClick,
  index,
}: Props) => {
  return (
    <div
      className={`${s.chat} ${isActive && s.active}`}
      onClick={() => handleClick(index)}
    >
      <ProfileIcon />
      <span>{name}</span>
    </div>
  );
};
export default Chat;
