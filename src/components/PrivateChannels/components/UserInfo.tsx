import { ProfileIcon } from "../../ProfileIcon";
import { IconContext } from "react-icons";
import {
  MdMic,
  MdMicOff,
  MdHeadset,
  MdHeadsetOff,
  MdSettings,
} from "react-icons/md";
import s from "./UserInfo.module.scss";
import { useState } from "react";

const UserInfo = () => {
  const [isMutted, setIsMutted] = useState(false);
  const [isDeafened, setIsDeafened] = useState(false);

  const handleDeafen = () => {
    if (!isDeafened) {
      setIsDeafened(true);
      setIsMutted(true);
    } else {
      setIsDeafened(false);
      setIsMutted(false);
    }
  };

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
          <div
            className={s.iconContainer}
            onClick={() => setIsMutted(!isMutted)}
          >
            {isMutted ? <MdMicOff /> : <MdMic />}
          </div>
          <div className={s.iconContainer} onClick={handleDeafen}>
            {isDeafened ? <MdHeadsetOff /> : <MdHeadset />}
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
