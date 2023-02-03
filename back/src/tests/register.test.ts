import {
  USERNAME_WRONG,
  SMALL_USERNAME,
  SMALL_PASSWORD,
  WRONG_ALPHANUMERIC_PASSWORD,
  USER,
} from './mocks/UserMocks';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import 'mocha';
import * as Sinon from 'sinon';
import { app } from '../app';

import User from '../database/models/user';
import { afterEach } from 'mocha';

chai.use(chaiHttp);

describe('Testando rota de Register', () => {
  describe('Sucesso', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Testando cadastro com tudo correto', async () => {
      Sinon.stub(User, 'findOne').resolves();
      Sinon.stub(User, 'create').resolves(USER as unknown as User);
      const response = await chai.request(app).post('/register').send(USER);

      chai.expect(response.status).to.be.equal(201);
      chai.expect(response.status).to.equal(201);
      chai.expect(response.body).to.be.key('token');
    });
    describe('Falha', () => {
      afterEach(() => {
        Sinon.restore();
      });
      it('Testando cadastro com login ja existente', async () => {
        Sinon.stub(User, 'findOne').resolves(USER as unknown as User);
        const response = await chai
          .request(app)
          .post('/register')
          .send(USERNAME_WRONG);

        chai.expect(response.status).to.be.equal(400);
        chai.expect(response.status).to.equal(400);
        chai.expect(response.body).to.be.deep.equal({
          error: 'Username already exists.',
        });
      });
      it('Testando registro com username errado menor que 3 caracteres', async () => {
        Sinon.stub(User, 'create').rejects(USER as unknown as User);
        const response = await chai
          .request(app)
          .post('/register')
          .send(SMALL_USERNAME);

        chai.expect(response.status).to.be.equal(400);
        chai.expect(response.status).to.equal(400);
        chai.expect(response.body).to.be.key('error');
        chai.expect(response.body).to.be.deep.equal({
          error: 'model must be 3 or more characters long',
        });
      });
      it('Testando registro com senha errada menor que 8 caracteres', async () => {
        Sinon.stub(User, 'create').rejects(USER as unknown as User);
        const response = await chai
          .request(app)
          .post('/register')
          .send(SMALL_PASSWORD);

        chai.expect(response.status).to.be.equal(400);
        chai.expect(response.status).to.equal(400);
        chai.expect(response.body).to.be.key('error');
        chai.expect(response.body).to.be.deep.equal({
          error: 'String must contain at least 8 character(s)',
        });
      });
      it('Testando registro com senha faltando validações', async () => {
        Sinon.stub(User, 'create').rejects(USER as unknown as User);
        const response = await chai
          .request(app)
          .post('/register')
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
});
