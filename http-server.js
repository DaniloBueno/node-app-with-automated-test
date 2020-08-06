const express = require('express');
const http = require('http');

class HttpServer {
    constructor(port) {
        this._listeningPort = port;
        this._app = express();
        this._setupServer();
        this._setupRoutes();
        this._server = {};
    }

    startServer() {
        this._server = http.createServer(this._app);
        this._server.listen(this._listeningPort);
        this._server.on('listening', () => {
            console.log(`App started on port ${this._listeningPort}`);
        });
    }

    stopServer() {
        this._server.close();
    }

    _setupServer() {
        this._app.set('port', this._listeningPort);
    }

    _setupRoutes() {
        this._app.get('/', (req, res) => {
            res.send('Hello World!');
        });
    }
}

module.exports = HttpServer;
