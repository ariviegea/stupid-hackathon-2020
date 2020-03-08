import React, { useState } from "react";
import "./index.css";
import Wheel from "../Wheel/index";
import Button from "../Button/index";
import { chicktext, bravetext, bravebooleans } from "../Button/props";
import ChickenSound from '../ChickenSound/index';



const payment = {
  amount: 100,
  vat_amount: 0,
  customer: {
    first_name: "Fredrik",
    last_name: "Paulin",
    email: "fredrik@rymdskepp.com"
  }
};

// const Store = () => {
//   return <div>Store</div>;
// };

const items = [
  "Free of charge",
  "Pay double",
  "Free of charge",
  "Pay double",
  "Free of charge",
  "Pay double"
];

const Payment = ({ onSelectItem }) => {
  const [price, setPrice] = useState(payment.amount);
  const [selectItem, setselectItem] = useState(null);
  const [spinEvent, setSpinEvent] = useState("");
  const [stateChicken, setChicken] = useState(false);

  const select = () => {
    let timer;
    clearTimeout(timer);
    if (selectItem === null) {
      const selectedItem = Math.floor(Math.random() * items.length);
      console.log(selectedItem);
      if (onSelectItem) {
        onSelectItem(selectedItem);
      }
      setselectItem(selectedItem);
      timer = setTimeout(() => {
        setSpinEvent(
          selectedItem % 2 ? { EVENT: "REJECT" } : { EVENT: "RESOLVE" }
        );
        const odd_even = selectedItem % 2 ? "DOUBLE" : "NOTPAY";
        if (odd_even === "DOUBLE") {
          setPrice(price * 2);
        }
      }, 3500);
    } else {
      setselectItem(null);
      setTimeout(selectItem, 500);
    }
  };

  const chicken = () => {
    return setChicken(true);
  }

  return (
    <div className="container-wrapper">
      <div className="header">
        <h2 className="title">DukePay Checkout</h2>
        <div className="ordersummary">
          <h3>Total to pay:${price}</h3>
        </div>
        <div className="callto">
          <p>Take the chance with the spinner you get your cart for free!</p>
        </div>
      </div>
      <div className="buttons">
        <div className="chickenbutton">
          <Button texts={chicktext} onClick={chicken} />
        </div>
        <div className="bravebutton">
          <Button
            texts={bravetext}
            onClick={select}
            booleans={bravebooleans}
            onClickValue={spinEvent}
          />
        </div>
      </div>
      { stateChicken === true ? <div className='chicken'><ChickenSound/></div> : ''}
      <div className="Wheel">
        <Wheel items={items} selectItem={selectItem} />
      </div>

      <div className="terms">
        <p>
          We do not take responsability of your poor life decision making, you wanted
          to be brave....there you go!
        </p>
      </div>
    </div>
  );
};

export default Payment;
