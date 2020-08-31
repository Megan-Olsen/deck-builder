import React, { Component } from 'react'

class Card extends Component {
    constructor(){
        super()
        this.state = {
            quantity: 0,
        }
    }
    handleQuantityChange(action) {}

    handleAddToDeck() {}

    render(){
        return(
            <div className="card">
                <div className="button-hold">
                    <button>+ 1</button>

                    <button>Add Playset</button>
                </div>
            </div>
        )
    }
}
export default Card