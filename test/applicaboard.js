const Applicaboard = artifacts.require('Applicaboard')

contract('Applicaboard', accounts => {
  it('has empty applications', async () => {
    const applicaboard = await Applicaboard.new()

    const count = await applicaboard.getApplicationsCount()

    assert.equal(count, 0)
  })

  it('can create application', async () => {
    const applicaboard = await Applicaboard.new()

    await applicaboard.createApplication('some text')
    const count = await applicaboard.getApplicationsCount()

    assert.equal(count, 1)

    const application = await applicaboard._applications(0)

    assert.equal(application.text, 'some text')
    assert.equal(application.resolved, false)
    assert.equal(application.response, '')
  })

  it('can create response', async () => {
    const applicaboard = await Applicaboard.new()

    await applicaboard.createApplication('some text')
    await applicaboard.createResponse(0, 'some response')
    const count = await applicaboard.getApplicationsCount()

    assert.equal(count, 1)

    const application = await applicaboard._applications(0)

    assert.equal(application.text, 'some text')
    assert.equal(application.resolved, true)
    assert.equal(application.response, 'some response')
  })
})
