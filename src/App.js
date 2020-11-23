import React, { Component } from 'react';
import { render } from 'react-dom';
import WishItem from './Wish/WishItem'
import AddWish from './Wish/AddWish'

//1st initial state declared
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

//saved to localstorage because not using redux yet
localStorage.setItem('wishes', JSON.stringify(wishes))

class App extends Component {
//needs contructor and super to pass props
  constructor(props){
    super(props)

      //state is updated from localstorage 
    this.state = {
      wishes: JSON.parse(localStorage.getItem('wishes'))
    }

    //binding methods to this state
    this.onAdd = this.onAdd.bind(this);
    this.onDelete = this.onDelete.bind(this);
    this.onEditSubmit = this.onEditSubmit.bind(this);
  }

    //hook gets the snapshop before the update
  componentWillMount(){
    const wishes = this.getwishes()

    this.setState({wishes})
  }
  //gets the state from tis
  getwishes(){
    return this.state.wishes
  }

/////////////////////////
//gets the state and pushes it 
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