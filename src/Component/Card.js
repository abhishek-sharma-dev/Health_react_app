import React from 'react'
import './Card.css'

export const Card = (props) => {

  return (
    <>
      <div className="card" style={{ width: "15rem" }}>
        <a href={props.cardlink}>
          <img src={props.image} className="card-img-top" alt="cardiology" />
        </a>
        <div className="card-body">
          <h5 className="card-title">{props.cardtitle}</h5>
          <p className="card-text">{props.cardcontent}</p>
        </div>
      </div>
    </>
  );
}
