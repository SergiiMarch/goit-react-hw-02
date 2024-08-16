export default function Feedback({ good, neutral, bad, total, positive }) {
  return (
    <div>
      <div>
        <p>Good :{good}</p>
        <p>Neutral :{neutral}</p>
        <p>Bad :{bad}</p>
        <p>total :{total}</p>
        <p>positive :{positive}</p>
      </div>
      <p></p>
    </div>
  );
}
