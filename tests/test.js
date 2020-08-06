const chai = require('chai');
const chaiHttp = require('chai-http');
const HttpServer = require('../http-server');
const config = require('../config/default.json');

chai.use(chaiHttp);

const server = new HttpServer(config.port.test);

before(() => {
    server.startServer();
})

it('should hit get route successfully', async () => {
    const res = await chai.request(`http://localhost:${config.port.test}`).get('/').send();
    chai.expect(res.text).to.equal('Hello World!');
    chai.expect(res.statusCode).to.equal(200);
});

after(() => {
    server.stopServer();
})
