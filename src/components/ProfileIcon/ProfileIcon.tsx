import { IconContext } from "react-icons";
import { BsDiscord } from "react-icons/bs";
import s from "./ProfileIcon.module.scss";

const ProfileIcon = () => {
  return (
    <div className={s.pfp}>
      <IconContext.Provider value={{ size: "20px" }}>
        <BsDiscord />
      </IconContext.Provider>
    </div>
  );
};
export default ProfileIcon;
