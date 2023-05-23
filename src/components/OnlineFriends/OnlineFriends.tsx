import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import s from "./OnlineFriends.module.scss";
import FriendsListItem from "./components/FriendsListItem";

const OnlineFriends = () => {
  const [text, setText] = useState("");

  return (
    <div className={s.onlineFriends}>
      <div className={s.searchBar}>
        <input
          value={text}
          type="text"
          placeholder="Search"
          onChange={(event) => setText(event.target.value)}
        />
        <IconContext.Provider value={{ size: "22px", color: "#b5bac1" }}>
          {text ? <IoMdClose /> : <AiOutlineSearch />}
        </IconContext.Provider>
      </div>
      <div className={s.friendsList}>
        <h2>ONLINE - 2</h2>
        <FriendsListItem name="Cornejoooo" status="Idle" color="purple" />
        <FriendsListItem name="Mura" status="Online" color="green" />
      </div>
    </div>
  );
};
export default OnlineFriends;
