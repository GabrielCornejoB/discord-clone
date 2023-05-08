import { IconContext } from "react-icons";
import { CgMathPlus } from "react-icons/cg";
import { BsDiscord } from "react-icons/bs";

import s from "./Chats.module.scss";
import Chat from "./Chat";

const Chats = () => {
  return (
    <section className={s.chatsSection}>
      <header>
        <span>DIRECT MESSAGES</span>
        <IconContext.Provider value={{ size: "17.5px" }}>
          <CgMathPlus className={s.plusButton} title="CREATE DM" />
        </IconContext.Provider>
      </header>
      <ul>
        <IconContext.Provider value={{ size: "20px" }}>
          <Chat icon={<BsDiscord />} name="User" isActive={true} />
          <Chat icon={<BsDiscord />} name="User" isActive={false} />
          <Chat icon={<BsDiscord />} name="User" isActive={false} />
          <Chat icon={<BsDiscord />} name="User" isActive={false} />
        </IconContext.Provider>
      </ul>
    </section>
  );
};
export default Chats;
