import React from "react";
import "./cards.css";

function Col(props) {
  return <div className="col">{props.children}</div>;
}

function Card(props) {
  return (
    <>
      <Col>{props.children}</Col>
    </>
  );
}

function Cards(props) {
  return (
    <div
      className="cards"
      style={{ background: props.color, display: props.display }}
    >
      <Card></Card>
      <Card>
        <img width="100" height="150"></img>
        <img width="100" height="100"></img>
        <img width="150" height="100"></img>
      </Card>
      <Card>
        <img width="150" height="100"></img>
        <img width="100" height="150"></img>
        <img width="100" height="100"></img>
      </Card>
    </div>
  );
}

export default Cards;
