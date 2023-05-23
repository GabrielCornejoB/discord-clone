import { IconContext } from "react-icons";
import { BsDiscord } from "react-icons/bs";
import s from "./ProfileIcon.module.scss";

interface Props {
  color: "green" | "purple" | "orange" | "yellow";
}

const ProfileIcon = ({ color }: Props) => {
  enum colors {
    "green" = "#20bf6b",
    "purple" = "#9b59b6",
    "orange" = "#ff6b6b",
    "yellow" = "#feca57",
  }

  return (
    <div className={s.pfp} style={{ background: colors[color] }}>
      <IconContext.Provider value={{ size: "20px" }}>
        <BsDiscord />
      </IconContext.Provider>
    </div>
  );
};
export default ProfileIcon;
