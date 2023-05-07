import s from "./App.module.scss";
import {
  ActiveNow,
  FriendsHeader,
  OnlineFriends,
  PrivateChannels,
  Servers,
} from "./components";

function App() {
  return (
    <main className={s.wrapper}>
      <Servers />
      <PrivateChannels />
      <section className={s.friends}>
        <FriendsHeader />
        <section className={s.onlineFriends}>
          <OnlineFriends />
          <ActiveNow />
        </section>
      </section>
    </main>
  );
}

export default App;
