const chai = require('chai');
const http = require('chai-http');

const server = require('../server');

chai.use(http);

describe('Testando', () => {

    it('/hexToRgb', () => {
        chai.request(server.app)
            .get('/hexToRgb')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
            });
    });

    it('/rgbToHex', () => {
        chai.request(server.app)
            .get('/rgbToHex')
            .end((err, res) => {
                chai.expect(res).to.have.status(200);
            });
    });
});