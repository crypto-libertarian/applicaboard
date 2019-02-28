import React from 'react'
import PropTypes from 'prop-types'

import Table from 'react-bootstrap/Table'

import ApplicationComponent from '../components/Application'

export default class ApplicationsListComponent extends React.Component {
  static propTypes = {
    drizzle:      PropTypes.object.isRequired,
    drizzleState: PropTypes.object.isRequired,
  }

  state = { dataKey: null }

  componentDidMount() {
    const { drizzle } = this.props
    const contract = drizzle.contracts.Applicaboard
    const dataKey = contract.methods.getApplicationsCount.cacheCall()
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

    if (value < 0 || isNaN(value) || !isFinite(value)) {
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
