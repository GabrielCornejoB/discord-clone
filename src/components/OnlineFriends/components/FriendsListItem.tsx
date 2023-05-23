import { ProfileIcon } from "../../ProfileIcon";
import { BsThreeDotsVertical } from "react-icons/bs";
import { RiMessage2Fill } from "react-icons/ri";
import s from "./FriendsListItem.module.scss";

interface Props {
  name: string;
  status: "Online" | "Idle";
  color: "green" | "purple";
}

const FriendsListItem = ({ name, status, color }: Props) => {
  return (
    <li className={s.listItem}>
      <div className={s.left}>
        <ProfileIcon color={color} />
        <div className={s.profileInfo}>
          <h3>{name}</h3>
          <span>{status}</span>
        </div>
      </div>
      <div className={s.right}>
        <div className={s.icon}>
          <RiMessage2Fill />
        </div>
        <div className={s.icon}>
          <BsThreeDotsVertical />
        </div>
      </div>
    </li>
  );
};
export default FriendsListItem;
