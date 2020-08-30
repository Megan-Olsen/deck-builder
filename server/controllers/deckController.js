const cards = require('../data.json')

const deck = {total: 0, items: []}
let deckId = 0

module.exports = {
    getDeck : (req, res) => {
        res.status(200).send(deck)
    },
    addToDeck : (req, res) => {
        const{cardId} = req.body 

        const index = deck.items.findIndex((element) => element.id === +cardId)

        if (index === -1){
            const card = cards.find((element) => element.id === +cardId)
            res.send(card)
        }

    },
    changeQuantity : (req, res) => {},
    removeFromDeck : (req, res) => {},
    delete : (req, res) => {}
}
