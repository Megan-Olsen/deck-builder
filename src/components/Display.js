import React, { Component } from 'react'
import Cards from './Cards'
import Deck from './Deck'
import axios from 'axios'

class Display extends Component {
    constructor() {
        super()
        this.state = {
            cards: [],
            deck: {total: 0, items: [] },
        }
        // this.addToDeck = this.addToDeck.bind(this)
        // this.changeQuantity = this.changeQuantity.bind(this)
        // this.removeFromDeck =this.removeFromDeck.bind(this)
        // this.delete = this.delete.bind(this)
    }

    componentDidMount() {}

    addToDeck(id, quantity) {}

    changeQuantity(id, quantity) {}
    
    removeFromDeck(id) {}

    delete() {}

    render() {
        return(
            <div className="display">
                <Cards />
                <Deck />
            </div>
        )
    }
}
export default Display 