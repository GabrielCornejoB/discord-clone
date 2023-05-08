import { useState } from "react";
import { IconContext } from "react-icons";
import { FaUserFriends } from "react-icons/fa";
import { AiFillThunderbolt } from "react-icons/ai";
import s from "./ToggleView.module.scss";

const ToggleView = () => {
  const [friendsActive, setFriendsActive] = useState(true);

  return (
    <section className={s.toggleViews}>
      <IconContext.Provider value={{ size: "20px" }}>
        <button
          className={friendsActive ? s.active : ""}
          onClick={() => setFriendsActive(true)}
        >
          <FaUserFriends />
          <span>Friends</span>
        </button>
        <button
          className={!friendsActive ? s.active : ""}
          onClick={() => setFriendsActive(false)}
        >
          <AiFillThunderbolt />
          <span>Nitro</span>
        </button>
      </IconContext.Provider>
    </section>
  );
};
export default ToggleView;
