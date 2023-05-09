import { IconContext } from "react-icons";
import { CgMathPlus } from "react-icons/cg";
import s from "./Chats.module.scss";
import Chat from "./Chat";
import { useState } from "react";

const initialChats = ["Cornejoooo", "Galhrrera", "Mura", "Chelito"];
// const colors = ["#2ecc71", "#ff6b6b", "#feca57", "#9b59b6", "#3498db"];

const Chats = () => {
  const [activeChat, setActiveChat] = useState<number>(0);

  const handleActiveChat = (index: number) => {
    setActiveChat(index);
  };

  return (
    <section className={s.chatsSection}>
      <header>
        <span>DIRECT MESSAGES</span>
        <IconContext.Provider value={{ size: "17.5px" }}>
          <CgMathPlus className={s.plusButton} title="CREATE DM" />
        </IconContext.Provider>
      </header>
      <ul>
        {initialChats.map((user, index) => (
          <Chat
            key={index}
            name={user}
            index={index}
            isActive={activeChat == index}
            handleClick={handleActiveChat}
          />
        ))}
      </ul>
    </section>
  );
};
export default Chats;
