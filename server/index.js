const express = require('express');
const app = express()


const SERVER_PORT = 5000

app.use(express.json())


//endpoints go here!
app.get('/api/cards', cardsCtrl.getAllCards) 



app.get('/api/deck', deckCtrl.getDeck)
app.post('/api/deck', deckCtrl.addToDeck)
app.put('/api/deck/:card_id', deckCtrl.changeQuantity)
app.delete('/api/deck/:card_id', deckCtrl.removeFromDeck)
app.delete('/api/deck', deckCtrl.delete)

app.listen(5000, () => console.log('Funky deck building on 5000'))