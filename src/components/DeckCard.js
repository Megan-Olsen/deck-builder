import React from 'react'

const DeckCard = (props) => {
    const { deckId } = props.data
    return(
        <div className="deck-card">
            <img src={props.data.imageUrl} alt={`Not found`}/>
            <div>
    <p>{props.data.name}</p>
    <p>Quantity:{props.data.quantity}</p>
                <div className="button-hold">
                    <button onClick={() => props.changeQuantity(deckId, 'down')}>-</button>
                    <button onClick={() => props.changeQuantity(deckId, 'up')}>+</button>
                    <button className="trashcan" onClick={() => props.removeFromDeck(deckId)}><img src="https://w7.pngwing.com/pngs/616/37/png-transparent-trash-can-illustration-computer-icons-icon-design-delete-button-miscellaneous-text-rectangle-thumbnail.png"/></button>
                </div>
            </div>
        </div>
    )
}
export default DeckCard