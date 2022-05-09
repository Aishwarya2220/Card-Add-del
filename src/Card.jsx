function Card(props) {
  return (
    <div className="mycard" key={props.key}>
      <h2>{props.item_name}</h2>
      <h4>{props.price}</h4>
      <button onClick={props.removeItem}>Remove item</button>
    </div>
  );
}
export default Card;
