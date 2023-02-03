import { carsMock } from './mocks/CarsMocks';
import { CORRECT_USER } from './mocks/VerifyMocks';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import 'mocha';
import * as Sinon from 'sinon';
import { app } from '../app';

import Cars from '../database/models/car';
import { NextFunction } from 'express';

chai.use(chaiHttp);

describe('Testando rota cars', () => {
  describe('Sucesso', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Testando rota de requisição de carros', async () => {
      Sinon.stub(Cars, 'findAll').resolves(carsMock as unknown as Cars[]);
      const response = await chai.request(app).get('/cars').send();
      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.be.an('array');
      chai.expect(response.body).to.deep.equal(carsMock);
    });
    it('Testando rota de carros por id', async () => {
      Sinon.stub(Cars, 'findOne').resolves(carsMock[0] as unknown as Cars);
      const response = await chai.request(app).get('/cars/993').send();

      chai.expect(response.status).to.equal(200);
      chai.expect(response.body).to.be.an('object');
      chai.expect(response.body).to.deep.equal(carsMock[0]);
    });
  });
  describe('Falha', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Testando rota de requisição de carros por id', async () => {
      Sinon.stub(Cars, 'findOne').resolves(null);
      const response = await chai.request(app).get('/cars/993').send();

      chai.expect(response.status).to.equal(400);
      chai.expect(response.body).to.be.an('object');
      chai.expect(response.body).to.deep.equal({
        error: 'Car not found',
      });
    });
  });
});
