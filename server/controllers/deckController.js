const cards = require('../data.json')

const deck = {total: 0, items: []}
let deckId = 0

const updateDeckTotal = () => {
    const total = deck.items.reduce((acc, element) => {
        return acc + element.quantity
    }, 0)

    deck.total = total
}

module.exports = {
    getDeck : (req, res) => {
        res.status(200).send(deck)
    },
    addToDeck : (req, res) => {
        const{ cardId, quantity } = req.body 

        const index = deck.items.findIndex((element) => element.id === +cardId)

        if (index === -1){
            const card = cards.find((element) => element.id === +cardId)

            card.deckId = deckId
            card.quantity = +quantity

            deck.items.push(card)

            deckId++
        } else {
            deck.items[index].quantity += +quantity
        }
        updateDeckTotal()
        
        res.status(200).send(deck)
    },
    changeQuantity : (req, res) => {
        const {deck_id} = req.params
        const {action} = req.query

        const index = deck.items.findIndex((element) => element.deckId === +deck_id)

        if(index === -1){
            return res.status(404).send('Card not in Deck')
        }

        if(action === 'up'){
            deck.items[index].quantity += 1
        } else {
            if(deck.items[index].quantity > 1){
                deck.items[index].quantity -= 1
            } else {
                deck.items.splice(index, 1)
            }
        }
        updateDeckTotal()
        
        res.status(200).send(deck)
    },
    removeFromDeck : (req, res) => {},
    delete : (req, res) => {}
}
