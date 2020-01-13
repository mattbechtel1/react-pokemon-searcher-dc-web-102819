import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import { Container } from 'semantic-ui-react'

const url = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {pokemon: [], searchTerm: ''}
  }

  componentDidMount() {
    fetch(url)
    .then(response => response.json())
    .then(data => this.setState({pokemon: data}))
  }

  changeSearchTerm = (e) => {
    this.setState({searchTerm: e.target.value})
  }

  filteredPokemon = () => {
    return this.state.pokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm))
  }

  addPokemon = (pokemon) => {
    debugger
    fetch(url, {
      method: 'POST',
      headers: {'Content-Type': 'application/json'},
      body: JSON.stringify(pokemon)
    })
    .then(response => response.json())
    .then(newPokemon => this.setState({
        pokemon: [newPokemon, ...this.state.pokemon]
      })
    )
  }

  render() {
    return (
      <Container>
        <h1>Pokemon Searcher</h1>
        <br />
        <PokemonForm addPokemon={this.addPokemon}/>
        <br />
        <Search onChange={this.changeSearchTerm} />
        <br />
        <PokemonCollection pokemon={this.filteredPokemon()} />
      </Container>
    )
  }
}

export default PokemonPage
