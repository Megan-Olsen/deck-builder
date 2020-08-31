import React from 'react'
import DeckCard from './DeckCard'

const Deck = (props) => {
    return (
        <div className="deck-container">
            <div className="deck">
                <h2>Your Awesome Deck!</h2>
                {props.deck.items.map((element) => {
                    return <DeckCard key={element.deckId} data={element}/>
                })}
            </div>
            <div className="total">
                Number of Cards in Deck: {props.deck.total}
                <button>Delete Deck</button>
            </div>
        </div>
    )
}
export default Deck