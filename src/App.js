import React, { Component } from 'react';
import { render } from 'react-dom';


import WishItem from './Wish/WishItem'
import AddWish from './Wish/AddWish'

const wishes = [
  {
    name: 'iPad',
    price: 200
  },
  {
    name: 'iPhone',
    price: 650
  }
]

localStorage.setItem('wishes', JSON.stringify(wishes))

class App extends Component {

  constructor(props){
    super(props)

    this.state = {
      wishes: JSON.parse(localStorage.getItem('wishes'))
    }

    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

  componentWillMount(){
    const wishes = this.getwishes()

    this.setState({wishes})
  }

  getwishes(){
    return this.state.wishes
  }

/////////////////////////

  onAdd(name, price){
    const wishes = this.getwishes()

    wishes.push({
      name,
      price
    })

    this.setState({wishes})
  }

  onDelete(name){
    const wishes = this.getwishes()

    const filteredwishes = wishes.filter(product => {
      return product.name !== name
    })

    this.setState({wishes:filteredwishes})
  }

  onEditSubmit(name, price, originalName){
    let wishes = this.getwishes();

    wishes = wishes.map(product => {
      if(product.name === originalName){
          product.name = name
          product.price = price
      }

      return product
    })

    this.setState({wishes})
  }

/////////////////////////

  render() {

    return (
      <div>
        <h1>Wishlist Online</h1>

        <AddWish 
          onAdd={this.onAdd}
        />

        {
          this.state.wishes.map(product =>{
            return(
              <WishItem
                key={product.name}
                {...product}
                onDelete={this.onDelete}
                onEditSubmit={this.onEditSubmit}
              />
            )
          })
        }
      </div>
      )
  }
}

render(<App />, document.getElementById('root'));
export default App;