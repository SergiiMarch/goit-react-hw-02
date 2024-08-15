export default function Options({ onGoodClick, onNeutralClick, onBadClick }) {
  return (
    <div>
      <button style={{ backgroundColor: "gray" }} onClick={onGoodClick}>
        Good
      </button>
      <button style={{ backgroundColor: "gray" }} onClick={onNeutralClick}>
        Neutral
      </button>
      <button style={{ backgroundColor: "gray" }} onClick={onBadClick}>
        Bad
      </button>
    </div>
  );
}
