import React from "react";
import Summary from "./Summary";
import Total from "./Total";

export default function Cart(props) {
  return (
    <section className="main__summary">
      <h2>You Cart</h2>
      <Summary selected={props.selected} />
      <Total selected={props.selected} />
    </section>
  );
}
