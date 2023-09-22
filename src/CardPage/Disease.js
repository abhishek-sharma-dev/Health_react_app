import React from 'react'
import { Card } from '../Component/Card'
import CardData from "../CardData"; 

export const Disease = () => {
  return (
    <>
    {CardData.map((card) => (
          <Card
            key={card.cardNo}
            image={card.img}
            cardtitle={card.title}
            cardcontent={card.content}
            cardlink={card.link}
          />
        ))}
    </>
  )
}
