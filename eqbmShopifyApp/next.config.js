module.exports = {
    async rewrites() {
      return [
        {
            source: '/api/get',
            destination: 'http://localhost:3000/api/get' // Proxy to Backend
        },{
            source: '/api/delete/:id',
            destination: 'http://localhost:3000/api/delete/:id' // Proxy to Backend
        },{
            source: '/api/post',
            destination: 'http://localhost:3000/api/post' // Proxy to Backend
        },{
            source: '/api/update/:id',
            destination: 'http://localhost:3000/api/update/:id'
        },{
            source: '/api/getReview/:id',
            destination: 'http://localhost:3000/api/getReview/:id'
        }
      ]
    }
  }