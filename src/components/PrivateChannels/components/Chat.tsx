import { ReactNode } from "react";
import s from "./Chat.module.scss";

interface Props {
  icon: ReactNode;
  name: string;
  isActive: boolean;
}

const Chat = ({ icon, name, isActive }: Props) => {
  return (
    <div className={`${s.chat} ${isActive && s.active}`}>
      <div className={s.pfp}>{icon}</div>
      <span>{name}</span>
    </div>
  );
};
export default Chat;
