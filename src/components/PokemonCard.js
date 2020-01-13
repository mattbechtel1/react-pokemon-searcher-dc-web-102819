import React from 'react'
import { Card } from 'semantic-ui-react'

class PokemonCard extends React.Component {
  constructor() {
    super()
    this.state = {side: 'front'}
  }

  toggleSide = () => {
    this.setState({
      side: {'front': 'back', 'back': 'front'}[this.state.side]
    })
  }

  render() {
    const {pokemon} = this.props
    return (
      <Card>
        <div onClick={this.toggleSide}>
          <div className="image">
            <img src={pokemon.sprites[this.state.side]} alt="oh no!" />
          </div>
          <div className="content">
            <div className="header">{pokemon.name.toUpperCase()}</div>
          </div>
          <div className="extra content">
            <span>
              <i className="icon heartbeat red" />
              {pokemon.stats.find(stat => stat.name === "hp").value} HP
            </span>
          </div>
        </div>
      </Card>
    )
  }
}

export default PokemonCard
