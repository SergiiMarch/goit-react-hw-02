import css from "../../App.module.css";
export default function Options({
  onGoodClick,
  onNeutralClick,
  onBadClick,
  onResetClick,
  totalFeedback,
}) {
  return (
    <div>
      <button onClick={onGoodClick}>Good</button>
      <button onClick={onNeutralClick}>Neutral</button>
      <button onClick={onBadClick}>Bad</button>
      {totalFeedback > 0 && (
        <button className={css.reset} onClick={onResetClick}>
          Reset
        </button>
      )}
    </div>
  );
}
