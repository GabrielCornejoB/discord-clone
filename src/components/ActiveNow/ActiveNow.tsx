import s from "./ActiveNow.module.scss";

const ActiveNow = () => {
  return (
    <aside className={s.activeNow}>
      <h1>Active Now</h1>
      <div className={s.container}>
        <h2>It's quiet for now...</h2>
        <p>
          When someone starts an activity - like playing a game or hanging out
          on voice - we'll show it here!
        </p>
      </div>
    </aside>
  );
};
export default ActiveNow;
