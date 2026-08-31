import { useState } from "react";
import { BsStar, BsStarFill } from "react-icons/bs";

export default function Star() {
  return starred ? (
    <BsStarFill className="star filled" onClick={toggle} />
  ) : (
    <BsStar className="star" onClick={toggle} />
  );
}
