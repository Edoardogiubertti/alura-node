const http = require('http');
const port = 3000;

const rotas = {
    '/': 'Curso de Node',
    '/livros': 'Entrei na Página de Livros',
    '/autores': 'Listagem de Autores',
    '/editoras': 'Página das Editoras'
}

const server = http.createServer((req, res) => {
    res.writeHead(200, {'Content-Type': 'text/plain'})
    res.end(rotas[req.url])
})

server.listen(port, () => {console.log(`Servidor escutando na porta: http://localhost:${port}`)})