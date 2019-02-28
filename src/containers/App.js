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
            <Form>
              <Form.Group controlId='text'>
                <Form.Label>Text</Form.Label>
                <Form.Control as='textarea'/>
              </Form.Group>
              <Button variant='primary'>
                Submit application
              </Button>
            </Form>
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

export default connect()(AppContainer)
