import React, { Component } from 'react'

class Card extends Component {
    constructor(){
        super()
        this.state = {
            quantity: 0,
        }
    }
    handleQuantityChange(action) {
        if(action === 'up'){
            this.setState({
                quantity: this.state.quantity + 1,
            })
        }else{
            if(this.state.quantity > 0){
                this.setState({
                    quantity: this.state.quantity -1,
                })
            }
        }
    }

    handleAddToDeck() {
        this.props.addToDeck(this.props.data.id, 1)
    }
    handleAddPlayset(){
        this.props.addToDeck(this.props.data.id, 4)
    }

    render(){
        const {imageUrl, name} = this.props.data
        return(
            <div className="card">
                <img src={imageUrl} alt={`${name}' not found`}/>
                <p>{name}</p>
                <div className="button-hold">
                    <button onClick={() => this.handleAddToDeck()}>+ 1</button>

                    <button onClick={() => this.handleAddPlayset()}>Add Playset</button>
                </div>
            </div>
        )
    }
}
export default Card