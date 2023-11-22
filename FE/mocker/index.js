const proxy = {
  _proxy: {
    proxy: {
      '/api/(.*)': 'http://195.20.232.210',
      '/files/(.*)': 'http://195.20.232.210'
    }
  },
  'POST /api/dne': {
    message: 'Nice! you\'ve made it!!!'
  }
}

module.exports = proxy
