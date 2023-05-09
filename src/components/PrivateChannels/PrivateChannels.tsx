import s from "./PrivateChannels.module.scss";
import Chats from "./components/Chats";
import ToggleView from "./components/ToggleView";
import UserInfo from "./components/UserInfo";

const PrivateChannels = () => {
  return (
    <section className={s.privateChannelsBar}>
      <section className={s.searchConversation}>
        <button>Find or start a conversation</button>
      </section>
      <ToggleView />
      <Chats />
      <UserInfo />
    </section>
  );
};
export default PrivateChannels;
