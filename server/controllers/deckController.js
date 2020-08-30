const cards = require('../data.json')

const deck = {total: 0, items: []}
let deckId = 0

// const updateCartTotal = () => {
//     const total = deck.items.reduce((acc, element) => {
//       return acc + element.quantity
//     }, 0)
//   }

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
        res.status(200).send(deck)

    },
    changeQuantity : (req, res) => {},
    removeFromDeck : (req, res) => {},
    delete : (req, res) => {}
}
