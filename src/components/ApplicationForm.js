import React from 'react'

import Form   from 'react-bootstrap/Form'
import Button from 'react-bootstrap/Button'

export default class ApplicationFormComponent extends React.Component {
  constructor(props) {
    super(props)

    this.onTextChange  = this.onTextChange.bind(this)
    this.onSubmitClick = this.onSubmitClick.bind(this)

    this.state = {
      text: '',
    }
  }

  render() {
    return (
      <Form>
        <Form.Group controlId='text'>
          <Form.Label>Text</Form.Label>
          <Form.Control
            as='textarea'
            defaultValue={this.state.text}
            onChange={this.onTextChange}
          />
        </Form.Group>
        <Button variant='primary' onClick={this.onSubmitClick}>
          Submit application
        </Button>
      </Form>
    )
  }

  onTextChange(ev) {
    if (!ev || !ev.target) { return }

    this.setState({ text: ev.target.value })
  }

  onSubmitClick() {
    console.log(this.state.text)
  }
}
