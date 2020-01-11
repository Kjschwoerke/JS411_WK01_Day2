import React, {Component} from 'react';
import '../App.css';
import LikedBeer from './Beer'


class App extends Component {

  constructor(props) {
    super(props)
    this.state = {
      items: [],
      isLiked: [],
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
  //create a like beer feature for onClick event.
  
  
  // LikedBeer(name) {
  //   let items = this.state.items
  //   for(let i = 0; i<items.length; i++){
  //     items[i].isLiked = "No"}
  //   let beers = items
  //   const beerID = (beer) => beer.name === name
  //   let beerFound = beers.findIndex(beerID)

  //   if (beers[beerFound].isLiked === "No"){beers[beerFound].isLiked = "Yes"} else {beers[beerFound].isLiked = "No"}
  //   this.setState({beers})

  //   console.log(beers)
  // }

render(){

    const {items} = this.state
      //console.log(items.name)
      //console.log(this.state.isLiked)

    return (
      
      <div className = "App">
        <h1>All the Beers!</h1>
        <ul id='beerListContainer'>
          {items.map(item => (
            <LikedBeer 
            id={item.id}
            name={item.name}
            abv={item.abv}
            description={item.description}
            firstBrew={item.firstBrew}
            tagline={item.tagline}
            />
          //   <li id='beerItem' key = {item.id}>
          //   <h2>"{item.name}"</h2>
          //   <br/>
          //   <span id ="abv">ABV: {item.abv}</span>
          //   <br/>
          //   <div id="description">{item.description}</div>
          //   <br/><br/>
          //   <span id="firstBrew">First Brewed on:{item.first_brewed}</span>
          //   <br/>
          //   <span id="tagline">{item.tagline}</span>
          //   <br/><br/>

          // <div><b>You have liked the "{item.name}: {item.isLiked}</b></div>

          //   <button onClick = {() => this.LikedBeer(item.name)} id="likeBeer">Click to like the "{item.name}" beer!</button>
          //   {/* (e) => this.likedBeer(item.id, item.name) */}
          //   </li>
          ))}
        </ul>
      </div>
      )
    }


}
export default App;