import { useState } from "react";
import Card from "./Card";
function AddCard() {
  const [item, update] = useState([
    {
      itemname: "",
      price: ""
    }
  ]);
  const [title, getTitle] = useState("");
  const [amount, getAmount] = useState("");
  function addingItem(event) {
    const newitem = event.target.value;
    getTitle(newitem);
  }
  function addingPrice(event) {
    const newprice = event.target.value;
    getAmount(newprice);
  }
  function addItem(prevItems) {
    console.log(title, amount);
    console.log(item);
    let initialState = [...item];
    initialState.push({
      itemname: title,
      price: amount
    });
    console.log(initialState);
    return update(initialState);
  }
  function removeItem(id) {
    console.log("rem");
  }
  return (
    <>
      <div>
        <input
          type="text"
          name="itemname"
          placeholder="Item to be added"
          onChange={addingItem}
        />
      </div>
      <div>
        <input
          type="text"
          name="price"
          placeholder="Price"
          onChange={addingPrice}
        />
      </div>
      <button onClick={addItem}>Add item to Cart</button>
      {item.map((key, id) => {
        console.log("id :" + id);
        const { itemname, price } = key;
        return (
          <Card
            item_name={itemname}
            price={price}
            key={id}
            removeItem={removeItem(id)}
          />
        );
      })}
    </>
  );
}
export default AddCard;
