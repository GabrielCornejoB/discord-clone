import { useState } from "react";
import { IconContext } from "react-icons";
import { AiOutlineSearch } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import s from "./OnlineFriends.module.scss";

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
    </div>
  );
};
export default OnlineFriends;
