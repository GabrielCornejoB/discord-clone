import { ProfileIcon } from "../../ProfileIcon";
import { IconContext } from "react-icons";
import { MdMic, MdMicOff, MdHeadset, MdSettings } from "react-icons/md";
import s from "./UserInfo.module.scss";

const UserInfo = () => {
  return (
    <section className={s.userTab}>
      <section className={s.userInfo}>
        <ProfileIcon />
        <div className={s.user}>
          <span className={s.userName}>GabrielCB</span>
          <span className={s.id}>#2173</span>
        </div>
      </section>
      <section className={s.settings}>
        <IconContext.Provider value={{ size: "22px" }}>
          <div className={s.iconContainer}>
            <MdMic />
          </div>
          <div className={s.iconContainer}>
            <MdHeadset />
          </div>
          <div className={s.iconContainer}>
            <MdSettings />
          </div>
        </IconContext.Provider>
      </section>
    </section>
  );
};
export default UserInfo;
