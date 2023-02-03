import {
  USER,
  LOGIN,
  USERNAME_WRONG,
  PASSWORD_WRONG,
  SMALL_USERNAME,
  SMALL_PASSWORD,
  WRONG_ALPHANUMERIC_PASSWORD,
} from './mocks/LoginMocks';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import 'mocha';
import * as Sinon from 'sinon';
import { app } from '../app';

import User from '../database/models/user';
import { afterEach } from 'mocha';

chai.use(chaiHttp);

describe('Testando rota de Login', () => {
  describe('Sucesso', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Testando login com tudo correto', async () => {
      Sinon.stub(User, 'findOne').resolves(USER as User);
      const response = await chai.request(app).post('/login').send(LOGIN);

      chai.expect(response.status).to.be.equal(202);
      chai.expect(response.status).to.equal(202);
      chai.expect(response.body).to.be.key('token');
    });
  });
  describe('Falha', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Testando login com usuario errado', async () => {
      Sinon.stub(User, 'findOne').returns(Promise.resolve(null));
      const response = await chai
        .request(app)
        .post('/login')
        .send(USERNAME_WRONG);

      chai.expect(response.status).to.be.equal(400);
      chai.expect(response.status).to.equal(400);
      chai.expect(response.body).to.be.deep.equal({
        error: 'User not found',
      });
    });
    it('Testando login com senha errada', async () => {
      Sinon.stub(User, 'findOne').resolves(USER as any);
      const response = await chai
        .request(app)
        .post('/login')
        .send(PASSWORD_WRONG);

      chai.expect(response.status).to.be.equal(400);
      chai.expect(response.status).to.equal(400);
      chai.expect(response.body).to.be.key('error');
      chai.expect(response.body).to.be.deep.equal({
        error: 'Incorrect email or password',
      });
    });
    it('Testando login com username errado menor que 3 caracteres', async () => {
      const response = await chai
        .request(app)
        .post('/login')
        .send(SMALL_USERNAME);

      chai.expect(response.status).to.be.equal(400);
      chai.expect(response.status).to.equal(400);
      chai.expect(response.body).to.be.key('error');
      chai.expect(response.body).to.be.deep.equal({
        error: 'model must be 3 or more characters long',
      });
    });
    it('Testando login com senha errada menor que 8 caracteres', async () => {
      const response = await chai
        .request(app)
        .post('/login')
        .send(SMALL_PASSWORD);

      chai.expect(response.status).to.be.equal(400);
      chai.expect(response.status).to.equal(400);
      chai.expect(response.body).to.be.key('error');
      chai.expect(response.body).to.be.deep.equal({
        error: 'String must contain at least 8 character(s)',
      });
    });
    it('Testando login com senha faltando validações', async () => {
      const response = await chai
        .request(app)
        .post('/login')
        .send(WRONG_ALPHANUMERIC_PASSWORD);

      chai.expect(response.status).to.be.equal(400);
      chai.expect(response.status).to.equal(400);
      chai.expect(response.body).to.be.key('error');
      chai.expect(response.body).to.be.deep.equal({
        error: 'model must be alphanumeric',
      });
    });
  });
});