const request = require('supertest');
const chai = require('chai');
const expect = chai.expect;

// Ajuste o caminho conforme seu app Express
const app = require('../../src/app');

describe('User REST API', () => {
  it('GET /users/:id retorna usuário', async () => {
    const res = await request(app).get('/users/1');
    expect(res.status).to.equal(200);
    expect(res.body).to.have.property('id');
    expect(res.body).to.have.property('name');
  });
});