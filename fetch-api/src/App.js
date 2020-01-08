import React, {Component} from 'react';
import './App.css';

class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLiked: false,
    }
  }

  componentDidMount() {

  fetch('https://api.punkapi.com/v2/beers')
    .then(res => res.json())
    .then(json => {
      this.setState({
        items: json,
      })
    })

  }

  likedBeer(id, name) {
    console.log("You have liked the beer with the id of " +id +' & the name of '+ name)
  }

render(){

    const {items} = this.state
      //console.log(items)

    return (
      
      <div className = "App">
        <h1>All the Beers!</h1>
        <ul id='beerListContainer'>
          {items.map(item => (
            <li id='beerItem' key = {item.id}>
            <h2>"{item.name}"</h2>
            <br/>
            <span id ="abv">ABV: {item.abv}</span>
            <br/>
            <div id="description">{item.description}</div>
            <br/><br/>
            <span id="firstBrew">First Brewed on:{item.first_brewed}</span>
            <br/>
            <span id="tagline">{item.tagline}</span>
            <br/><br/>
            <div><b></b></div>
            <button onClick = {(e) => this.likedBeer(item.id, item.name)} id="likeBeer">Click to like the "{item.name}" beer!</button>
            
            </li>
          ))}
        </ul>
      </div>
      )
    }


}
export default App;
