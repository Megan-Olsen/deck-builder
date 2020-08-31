import React from 'react'
import DeckCard from './DeckCard'

const Deck = (props) => {
    return (
        <div className="deck-container">
            <div className="deck">
                <h2>Your Awesome Deck!</h2>
                {}
            </div>
            <div className="total">
                Number of Cards in Deck:
                <button>Delete Deck</button>
            </div>
        </div>
    )
}
export default Deck