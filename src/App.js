import React from 'react';
import './App.css';

class App extends React.Component {
  constructor(){
    super()
    this.state = {
      name: '', 
      img: ''
    }
  }

  getPokemon = async () => {
    const randomNumber = Math.floor(Math.random() * 807 + 1);

    const respose = await fetch('https://pokeapi.co/api/v2/pokemon/' + randomNumber +'/');
    const pockemon = await respose.json();

    return pockemon;
  }

 async componentDidMount() {
     const pokemon = await this.getPokemon().then((data) =>{
       return data
     })
     console.log(pokemon)
     this.setState({name: pokemon.name ,
                    img: pokemon.sprites.front_default})
    }

  render() {
    let { name, img } = this.state
 
  
      return (
          <div className="pokemon">
            <img src = {img} alt="pokemon"/>
              <p className="pockemon__name">
                {name}
              </p>
          </div>
      );
  }
}



export default App;
