const Applicaboard = artifacts.require('Applicaboard')

contract('Applicaboard', accounts => {
  it('has empty applications', async () => {
    const applicaboard = await Applicaboard.new()
    assert.isTrue(true)
  })
})
