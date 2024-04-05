import css from "./Options.module.css";


const Options = ({ update, totalFeedback }) => {
    return (
      <ul className={css.div}>
        <li>
          <button className={css.btn} onClick={() => update("good")}>
            Good
          </button>
        </li>
        <li>
          <button className={css.btn} onClick={() => update("neutral")}>
            Neutral
          </button>
        </li>
        <li>
          <button className={css.btn} onClick={() => update("bad")}>
            Bad
          </button>
        </li>
        {totalFeedback > 0 && (
          <li>
            <button onClick={() => update("reset")} className={css.btn}>
              Reset
            </button>
          </li>
        )}
      </ul>
    );
  };
  
  export default Options;