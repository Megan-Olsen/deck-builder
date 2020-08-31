import React from 'react'

const DeckCard = (props) => {
    return(
        <div className="deck-card">
            <img src={props.data.imageUrl} alt={`Not found`}/>
            <div>
    <p>{props.data.name}</p>
    <p>Quantity:{props.data.quantity}</p>
                <div className="button-hold">
                    <button>-</button>
                    <button>+</button>
                    <button>trashcan</button>
                </div>
            </div>
        </div>
    )
}
export default DeckCard