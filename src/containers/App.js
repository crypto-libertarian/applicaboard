import React from 'react'
import { connect } from 'react-redux'
import { DrizzleContext } from 'drizzle-react'

import Container from 'react-bootstrap/Container'
import Row       from 'react-bootstrap/Row'
import Col       from 'react-bootstrap/Col'
import Form      from 'react-bootstrap/Form'
import Button    from 'react-bootstrap/Button'

import ApplicationsListComponent from '../components/ApplicationsList'

class AppContainer extends React.Component {
  constructor(props, context) {
    super(props, context)

    this.renderContent = this.renderContent.bind(this)
  }

  render() {
    return (
      <DrizzleContext.Consumer>
        {this.renderContent}
      </DrizzleContext.Consumer>
    )
  }

  renderContent(drizzleContext) {
    const { drizzle, drizzleState, initialized } = drizzleContext

    if (!initialized) {
      return <p>Loading...</p>
    }

    return (
      <Container>
        <Row>
          <Col>
            <ApplicationFormComponent/>
          </Col>
        </Row>

        <hr/>

        <Row>
          <Col>
            <ApplicationsListComponent
              drizzle={drizzle}
              drizzleState={drizzleState}
            />
          </Col>
        </Row>
      </Container>
    )
  }
}

class ApplicationFormComponent extends React.Component {
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

export default connect()(AppContainer)
