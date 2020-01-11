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

render(){
    const {items} = this.state
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
          ))}
        </ul>
      </div>
      )
    }

}
export default App;