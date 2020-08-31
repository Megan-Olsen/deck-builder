import React from 'react'
import Card from './Card'

const Cards = (props) => {
return <div className="cards">{props.cards.map(element => {
    return <Card addToDeck={props.addToDeck} key={element.id} data={element} />
})}
</div>
}
export default Cards