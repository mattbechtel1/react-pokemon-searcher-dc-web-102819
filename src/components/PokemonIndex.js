import React from 'react'
import PokemonCollection from './PokemonCollection'
import PokemonForm from './PokemonForm'
import Search from './Search'
import OptionsBar from './OptionsBar'
import { Container } from 'semantic-ui-react'

const url = 'http://localhost:3000/pokemon'

class PokemonPage extends React.Component {
  constructor() {
    super()
    this.state = {
      pokemon: [], 
      searchTerm: '', 
      displayOpts: {
        sortOpt: 'id',
        filterOpt: '',
        statOpts: {
          minValue: 0,
          statName: ''
        }
    }}
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
    const {displayOpts: {sortOpt, filterOpt, statOpts: {minValue, statName}}, pokemon} = this.state
    
    let typeFilter = function(pokemon) {
      return !!pokemon.types && pokemon.types.includes(filterOpt)
    }
   
    if (!filterOpt) {
      typeFilter = function() {
        return true
      }
    }

    let statFilter = function(pokemon) {
      if (!!statName && !!pokemon.stats.find(stat => stat.name === statName) && minValue > 0) {
        return pokemon.stats.find(stat => stat.name === statName).value >= minValue
      } else {
        return true
      }
    }

   
    return pokemon.filter(pokemon => pokemon.name.includes(this.state.searchTerm) && statFilter(pokemon) && typeFilter(pokemon)).sort((a, b) => a[sortOpt] < b[sortOpt] ? -1 : 1 )
  }

  changeDisplayOpt = (e) => {
    this.setState({
      displayOpts: {
        ...this.state.displayOpts,
        [e.target.name]: e.target.value
      }
    })
  }

  changeStatOpt = (e) => {
    this.setState({
      displayOpts: {
        ...this.state.displayOpts,
        statOpts: {
          ...this.state.displayOpts.statOpts,
          [e.target.name]: e.target.value
        }
      }
    })
  }

  addPokemon = (pokemon) => {
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
        < OptionsBar changeFunctions={this.changeDisplayOpt} changeStatOpts={this.changeStatOpt} currentDisplay={this.state.displayOpts} />
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
