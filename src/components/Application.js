import React from 'react'
import PropTypes from 'prop-types'

export default class ApplicationComponent extends React.Component {
  static propTypes = {
    drizzle:       PropTypes.object.isRequired,
    drizzleState:  PropTypes.object.isRequired,
    applicationId: PropTypes.number.isRequired,
  }

  state = { dataKey: null }

  componentDidMount() {
    const { drizzle, applicationId } = this.props
    const contract = drizzle.contracts.Applicaboard
    const dataKey = contract.methods._applications.cacheCall(applicationId)
    this.setState({ dataKey })
  }

  render() {
    const { drizzleState } = this.props
    const contract = drizzleState.contracts.Applicaboard
    const data = contract._applications[this.state.dataKey]

    if (!data) { return <tr></tr> }

    const value = data.value

    return (
      <tr>
        <td>{value.applicant}</td>
        <td>{value.text}</td>
        <td>{value.response}</td>
      </tr>
    )
  }
}
