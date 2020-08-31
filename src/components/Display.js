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
        this.addToDeck = this.addToDeck.bind(this)
        this.changeQuantity = this.changeQuantity.bind(this)
        this.removeFromDeck =this.removeFromDeck.bind(this)
        this.delete = this.delete.bind(this)
    }

    componentDidMount() {
        axios.get('/api/cards').then((res) => {
            axios.get('/api/deck').then((deckRes) =>{
                this.setState({
                    cards: res.data,
                    deck: deckRes.data,
                })
            })
        })
    }

    addToDeck(id, quantity) {
        axios.post('/api/deck', { cardId: id, quantity }).then((res) => {
            this.setState({
                deck: res.data,
            })
        })
    }

    changeQuantity(id, quantity) {}
    
    removeFromDeck(id) {}

    delete() {}

    render() {
        return(
            <div className="display">
                <Cards addToDeck={this.addToDeck} cards={this.state.cards} />
                <Deck deck={this.state.deck} />
            </div>
        )
    }
}
export default Display 