import React from 'react'

class Beer extends React.Component {
    state = {
        isLiked: true,
        Liked: 'No'
    }

    LikedBeer() {
        let isLiked = this.state.isLiked
        this.setState({isLiked: !isLiked})
        if (isLiked) {
        this.setState({Liked: 'Yes'}) 
        }else{this.setState({Liked: 'No'})}
      }

render(){
    return (
        <li id='beerItem' key = {this.props.id}>
        <h2>"{this.props.name}"</h2>
        <br/>
        <span id ="abv">ABV: {this.props.abv}</span>
        <br/>
        <div id="description">{this.props.description}</div>
        <br/><br/>
        <span id="firstBrew">First Brewed on:{this.props.first_brewed}</span>
        <br/>
        <span id="tagline">{this.props.tagline}</span>
        <br/><br/>

        <div><b>You have liked the "{this.props.name}: {this.state.Liked}</b></div>

        <button onClick = {() => this.LikedBeer(this.props.name)} id="likeBeer">Click to like the "{this.props.name}" beer!</button>
        </li>
      )
    }
}

export default Beer