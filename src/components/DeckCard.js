import React from 'react'

const DeckCard = (props) => {
    return(
        <div className="deck-card">
            <div>
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