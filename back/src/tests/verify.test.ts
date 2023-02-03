import { CORRECT_USER, USER, WRONG_USER } from './mocks/VerifyMocks';
import * as chai from 'chai';
// @ts-ignore
import chaiHttp = require('chai-http');
import 'mocha';
import * as Sinon from 'sinon';
import { app } from '../app';

import Verify from '../database/models/account';
import { afterEach } from 'mocha';
import JwtSecret from '../utils/JwtService';

chai.use(chaiHttp);

describe('Testando rota de servicy', () => {
  describe('Sucesso', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Testando enviando authorization correta', async () => {
      Sinon.stub(JwtSecret, 'verify').resolves({ id: 999 });
      Sinon.stub(Verify, 'findOne').resolves(USER as unknown as Verify);
      const response = await chai
        .request(app)
        .get('/verify')
        .send()
        .set({ authorization: CORRECT_USER });

      chai.expect(response.status).to.be.equal(202);
      chai.expect(response.status).to.equal(202);
      chai.expect(response.body).to.be.keys('id', 'nivel', 'name');
    });
  });
  describe('Falha', () => {
    afterEach(() => {
      Sinon.restore();
    });
    it('Testando enviando authorization errada', async () => {
      const response = await chai
        .request(app)
        .get('/verify')
        .send()
        .set({ authorization: WRONG_USER });

      chai.expect(response.status).to.be.equal(400);
      chai.expect(response.status).to.equal(400);
      chai.expect(response.body).to.be.deep.equal({
        error: 'invalid token',
      });
    });
  });
});
