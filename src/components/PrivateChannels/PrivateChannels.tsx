import s from "./PrivateChannels.module.scss";
import Chats from "./components/Chats";
import ToggleView from "./components/ToggleView";

const PrivateChannels = () => {
  return (
    <section className={s.privateChannelsBar}>
      <section className={s.searchConversation}>
        <button>Find or start a conversation</button>
      </section>
      <ToggleView />
      <Chats />
    </section>
  );
};
export default PrivateChannels;
