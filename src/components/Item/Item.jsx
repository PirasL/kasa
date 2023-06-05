import React from "react";
import {useNavigate } from "react-router-dom";
import "./Item.css";

export default function Item({ id, title, cover }) {
  const navigate = useNavigate();
  return (
    <div
      className="item"
      onClick={() => {
        navigate(`/room/${id}`);
      }}
    >
      <img className="item-img" src={cover} alt="item"/>
      <div className="item-overlay"></div>
      <h3 className="item-text">{title}</h3>
    </div>
  );
}
