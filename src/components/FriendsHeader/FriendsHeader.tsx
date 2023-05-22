import { useState } from "react";
import { IconContext } from "react-icons";
import { FaUserFriends } from "react-icons/fa";
import { AiFillQuestionCircle } from "react-icons/ai";
import { GoInbox } from "react-icons/go";
import s from "./FriendsHeader.module.scss";

const listItems = ["Online", "All", "Pending", "Blocked"];

const FriendsHeader = () => {
  const [activeItem, setActiveItem] = useState(0);

  const handleActiveLink = (index: number) => {
    setActiveItem(index);
  };

  return (
    <header className={s.header}>
      <IconContext.Provider value={{ size: "24px" }}>
        <div className={s.left}>
          <FaUserFriends />
          <span className={s.friendsTitle}>Friends</span>
          <ul>
            {listItems.map((li, index) => (
              <li
                key={index}
                onClick={() => handleActiveLink(index)}
                className={activeItem === index ? s.active : undefined}
              >
                {li}
              </li>
            ))}
            <li>Add Friend</li>
          </ul>
        </div>
        <div className={s.right}>
          <GoInbox className={s.icon} />
          <AiFillQuestionCircle className={s.icon} />
        </div>
      </IconContext.Provider>
    </header>
  );
};
export default FriendsHeader;
