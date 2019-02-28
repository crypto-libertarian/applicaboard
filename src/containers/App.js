import React from 'react'
import { connect } from 'react-redux'
import { DrizzleContext } from 'drizzle-react'

import Table from 'react-bootstrap/Table'

import ApplicationComponent from '../components/Application'

const mapStateToProps = state => ({...state})

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

    return <Foo drizzle={drizzle} drizzleState={drizzleState}/>
  }
}

class Foo extends React.Component {
  state = { dataKey: null }

  componentDidMount() {
    const { drizzle } = this.props

    const contract = drizzle.contracts.Applicaboard

    const dataKey = contract.methods['getApplicationsCount'].cacheCall()

    this.setState({ dataKey })
  }

  render() {
    const { drizzle, drizzleState } = this.props

    const contract = drizzleState.contracts.Applicaboard

    const data = contract.getApplicationsCount[this.state.dataKey]

    let value = 0

    if (data && data.value) {
      value = parseInt(data.value)
    }

    if (isNaN(value)) {
      value = 0
    }

    return (
      <div>
        <Table striped bordered hover>
          <thead>
            <tr>
              <th>Applicant</th>
              <th>Text</th>
              <th>Response</th>
            </tr>
          </thead>
          <tbody>
            {[...Array(value)].map((e, i) =>
              <ApplicationComponent
                key={i}
                drizzle={drizzle}
                drizzleState={drizzleState}
                applicationId={i}
              />
            )}
          </tbody>
        </Table>
      </div>
    )
  }
}

export default connect(mapStateToProps)(AppContainer)
