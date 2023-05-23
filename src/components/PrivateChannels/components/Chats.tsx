import { IconContext } from "react-icons";
import { CgMathPlus } from "react-icons/cg";
import s from "./Chats.module.scss";
import Chat from "./Chat";
import { useState } from "react";

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
        <Chat
          name="Cornejoooo"
          index={0}
          isActive={activeChat == 0}
          handleClick={handleActiveChat}
          color="purple"
        />
        <Chat
          name="Galhrrera"
          index={1}
          isActive={activeChat == 1}
          handleClick={handleActiveChat}
          color="orange"
        />
        <Chat
          name="Mura"
          index={2}
          isActive={activeChat == 2}
          handleClick={handleActiveChat}
          color="green"
        />
        <Chat
          name="Chelito"
          index={3}
          isActive={activeChat == 3}
          handleClick={handleActiveChat}
          color="yellow"
        />
      </ul>
    </section>
  );
};
export default Chats;
