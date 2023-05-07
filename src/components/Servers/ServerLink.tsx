import { ReactNode } from "react";
import s from "./ServerLink.module.scss";

const ServerLink = ({ icon }: { icon: ReactNode }) => {
  return <li className={`${s.link}`}>{icon}</li>;
};
export default ServerLink;
