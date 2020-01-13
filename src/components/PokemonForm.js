import React from 'react'
import { Form } from 'semantic-ui-react'

class PokemonForm extends React.Component {
  constructor() {
    super()

    this.state = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
    }
  }

  handleSubmit = (e) => {
    e.preventDefault()
    this.props.addPokemon( 
      { name: this.state.name,
        stats: [{name: 'hp', value: this.state.hp}],
        sprites: {front: this.state.frontUrl, back: this.state.backUrl}
      })
    this.setState(this.originalState)
  }

  originalState = {
      name: '',
      hp: '',
      frontUrl: '',
      backUrl: ''
  }

  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  render() {
    const {name, hp, frontUrl, backUrl} = this.state
    return (
      <div>
        <h3>Add a Pokemon!</h3>
        <Form onSubmit={this.handleSubmit}>
          <Form.Group widths="equal">
            <Form.Input fluid label="Name" placeholder="Name" name="name" onChange={this.handleChange} value={name}/>
            <Form.Input fluid label="hp" placeholder="hp" name="hp" onChange={this.handleChange} value={hp}/>
            <Form.Input fluid label="Front Image URL" placeholder="url" name="frontUrl" onChange={this.handleChange} value={frontUrl}/>
            <Form.Input fluid label="Back Image URL" placeholder="url" name="backUrl" onChange={this.handleChange} value={backUrl} />
          </Form.Group>
          <Form.Button>Submit</Form.Button>
        </Form>
      </div>
    )
  }
}

export default PokemonForm
