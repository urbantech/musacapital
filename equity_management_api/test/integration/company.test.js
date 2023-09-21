const chai = require('chai');
const chaiHttp = require('chai-http');
const path = require('path'); // Import the path module
const app = require('../../src/app'); // Adjust the path to your app.js entry point
const expect = chai.expect;

chai.use(chaiHttp);

describe('Company API', () => {
  it('should retrieve all companies', (done) => {
    chai
      .request(app)
      .get('/api/companies')
      .end((err, res) => {
        expect(res).to.have.status(200);
        expect(res.body).to.be.an('array');
        done();
      });
  });

  // Add more tests for other routes
});

