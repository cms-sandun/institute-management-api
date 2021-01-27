let chai = require('chai');
let chaiHttp = require('chai-http');
let describe = require('mocha').describe;
let it = require('mocha').it;
let httpStatusCode = require('../enums/httpStatusCode');
let faker = require('faker');

let assert = chai.assert;
let should = chai.should();
let expect = chai.expect;

chai.use(chaiHttp);
let app = 'http://localhost:5000';


describe('App', function () {

    describe('Employee Management', function () {

        it('Create employee only with required parameters', function (done) {
            chai.request(app)
                .post('/api/employees')
                .send({
                    firstName: faker.name.firstName(),
                    middleName: faker.name.middleName(),
                    lastName: faker.name.lastName(),
                    dob: '1993-03-06',
                    address: faker.address.streetAddress(),
                    contact_no: faker.phone.phoneNumber(),
                    gender: 'male',
                    email: faker.internet.email(),
                    type: 'academic',
                    branchId: 1
                })
                .end(function (err, res) {
                    if(res.should.have.status !== httpStatusCode.CREATED){
                        console.log(res.body)
                    }
                    res.should.have.status(httpStatusCode.CREATED);
                    assert.equal(res.body.success, true, "success should be true");

                    done();
                })
        });

        it('Update employee with valid data', function (done) {
            chai.request(app)
                .put(`/api/employees/${2}`)
                .send({
                    firstName: 'Sandun updated',
                    middleName: 'Madushan updated',
                    lastName: 'Perera updated'
                })
                .end(function (err, res) {
                    console.log("*************"+JSON.stringify(res))
                    res.should.have.status(httpStatusCode.UPDATED);
                    assert.equal(res.body.success, true, "success should be true");

                    done();
                })
        })

        it('Get all employees', function (done) {
            chai.request(app)
                .get(`/api/employees`)
                .end(function (err, res) {
                    res.should.have.status(httpStatusCode.SUCCESS);
                    expect(res.body.data).to.not.be.empty;
                    done();
                })
        })

        /*it('Get employee by id', function (done) {
            chai.request(app)
                .get('/api/applicants/1')
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, true);
                    assert.notEqual(res.body.data, null);
                    done();
                })
        });*/



        /*it('Check login with correct details', function (done) {
            chai.request(app)
                .post('/api/login')
                .send({
                    loginId: 'newapp4',
                    password: '1234'
                })
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, true);
                    token = res.body.data;
                    done();
                })
        });

        it('Check update an applicant by id', function (done) {
            //Generate random phone number
            let mobile = '07' + Math.floor(10000000 + Math.random() * 90000000);
            chai.request(app)
                .put(`/api/applicants/${applicantId}`)
                .set('Authorization', `Bearer ${token}`)
                .send({
                    firstName: 'isuru',
                    middleName: 'empty',
                    lastName: 'madusanka',
                    dob: '1995.04.09',
                    gender: 'male',
                    mobile: mobile,
                    profileDescription: 'This is a test description',
                    imageUrl: 'test image url',
                    school: 'test school',
                    loginType: 'direct',
                    loginId: 'newapp4',
                    password: '1234',
                })
                .set('content-type', 'application/json')
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, true);
                    done();
                })
        })

        it('Check get all applicants', function (done) {
            chai.request(app)
                .get('/api/applicants')
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, true);
                    done();
                })
        })

        it('Check get an applicant by id', function (done) {
            chai.request(app)
                .get('/api/applicants/1')
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, true);
                    assert.notEqual(res.body.data, null);
                    done();
                })
        });

        it('Check get applicants by tech skills', function (done) {
            chai.request(app)
                .get('/api/applicants/skills/search?search_text=java')
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, true);
                    done();
                })
        });

        it('Check get recently joined applicants', function (done) {
            chai.request(app)
                .get('/api/applicants/joined/recent')
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, true);
                    done();
                })
        });*/

    })

})
