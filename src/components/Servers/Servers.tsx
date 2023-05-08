import s from "./Servers.module.scss";
import { IconContext } from "react-icons";
import { BsDiscord, BsPlusLg } from "react-icons/bs";
import { IoMdCompass } from "react-icons/io";
import { RxDownload } from "react-icons/rx";
import { HiUserGroup } from "react-icons/hi2";
import ServerLink from "./ServerLink";

const Servers = () => {
  return (
    <nav className={s.serversNav}>
      <ul>
        <IconContext.Provider value={{ size: "26px" }}>
          <ServerLink icon={<BsDiscord />} />
          <hr />
          <ServerLink icon={<HiUserGroup />} />
          <ServerLink icon={<BsPlusLg />} />
          <ServerLink icon={<IoMdCompass />} />
          <hr />
          <ServerLink icon={<RxDownload />} />
        </IconContext.Provider>
      </ul>
    </nav>
  );
};
export default Servers;
