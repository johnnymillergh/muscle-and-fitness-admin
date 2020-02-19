const axios = require('axios')
const MockAdapter = require('axios-mock-adapter')

// All requests using this instance will have a 2 seconds delay.
const mock = new MockAdapter(axios, { delayResponse: 2000 })

mock.onGet('/api/getDemo').reply(200, {
  message: '/api/getDemo success!'
})

mock.onGet('/api/cancel-request-test').reply(200, {
  message: '/api/cancel-request-test SUCCESS'
})
