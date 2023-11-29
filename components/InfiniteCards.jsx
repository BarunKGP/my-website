import React, { useState } from "react";

function InfiniteCards({ cards }) {
  const [cards, setCards] = useState([
    { text: "Up or down", background: "#FFBE0B" },
    { text: "Left or right", background: "#FB5607" },
    { text: "Swipe me", background: "#FF006E" },
  ]);

  const [dragStart, setDragStart] = useState({
    axis: null,
    animation: { x: 0, y: 0 },
  });
  return cards.map((card, index) => {
    if (index === cards.length - 1) {
      return;
    }
    <div></div>;
  });
}

export default InfiniteCards;
