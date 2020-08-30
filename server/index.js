const express = require('express');
const app = express()
const cardsCtrl = require('./controllers/cardsController')
const deckCtrl = require('./controllers/deckController')

const SERVER_PORT = 5000

app.use(express.json())


//endpoints go here!
app.get('/api/cards', cardsCtrl.getAllCards) 



app.get('/api/deck', deckCtrl.getDeck)
app.post('/api/deck', deckCtrl.addToDeck)
app.put('/api/deck/:deck_id', deckCtrl.changeQuantity)
app.delete('/api/deck/:deck_id', deckCtrl.removeFromDeck)
app.delete('/api/deck', deckCtrl.delete)




app.listen(SERVER_PORT, () => console.log(`Funky deck building on port ${SERVER_PORT}`))