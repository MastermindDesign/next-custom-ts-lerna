import express from "express";
const next = require('next');
const path = require('path');

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare()
  .then(() => {
    const server = express()

    server.get('/', (req, res) => {
      return handle(req, res);
    })

    server.use(express.static(path.join(__dirname, 'dist')))

    server.get('/dashboard', (req, res) => {
      return res.sendFile(path.join(__dirname + '/dist/index.html'));
    })

    server.get('/dashboard/*', (req, res) => {
      return res.sendFile(path.join(__dirname + '/dist/index.html'));
    })

    server.get('/*', (req, res) => {
      return handle(req, res)
    })

    server.listen(3000, (err) => {
      if (err) throw err
      console.log('> Ready on http://localhost:3000')
    })
  })
  .catch((ex) => {
    console.error(ex.stack)
    process.exit(1)
  })