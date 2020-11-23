let chai = require('chai');
let chaiHttp = require('chai-http');
let describe = require('mocha').describe;
let it = require('mocha').it;

let assert = chai.assert;
let should = chai.should();

chai.use(chaiHttp);
let app = 'http://localhost:5000';

let token = null;
let applicantId = 15;

describe('App', function () {

    describe('Applicant', function () {

        // it('Check add an applicant', function (done) {
        //     chai.request(app)
        //         .post('/api/applicants')
        //         .send({
        //             firstName: 'isuru',
        //             middleName: 'empty',
        //             lastName: 'madusanka',
        //             dob: '1995.04.09',
        //             gender: 'male',
        //             mobile: '0771234567',
        //             profileDescription: 'This is a test description',
        //             imageUrl: 'test image url',
        //             school: 'test school',
        //             loginType: 'direct',
        //             loginId: 'newapp4',
        //             password: '1234',
        //         })
        //         .set('content-type', 'application/json')
        //         .end(function (err, res) {
        //             if (err) done(err);
        //             res.should.have.status(200);
        //             assert.equal(res.body.success, true);
        //             done();
        //         })
        // });

        it('Check login with wrong details', function (done) {
            chai.request(app)
                .post('/api/login')
                .send({
                    loginId: 'wrongId',
                    password: 'wrong-password'
                })
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, false);
                    done();
                })
        });

        it('Check login with correct details', function (done) {
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
        });

    })

    describe('Project', function () {

        it('Check add a new project', function (done) {
            chai.request(app)
                .post(`/api/applicants/projects`)
                .set('Authorization', `Bearer ${token}`)
                .send({
                    applicantId: applicantId,
                    companyName: 'Test company',
                    projectName: 'Test project name',
                    description: 'Test description',
                    duration: 2,
                    projectTechnologies: 'react, java',
                    projectTools: 'Visual studio code'
                })
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(201);
                    assert.equal(res.body.success, true);
                    done();
                })
        })

        it('Check get projects by applicantId', function (done) {
            chai.request(app)
                .get(`/api/applicants/${applicantId}/projects`)
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, true);
                    done();
                })
        });

    })

    describe('Soft skills', function () {

        it('Check add soft skills', function (done) {
            chai.request(app)
                .post(`/api/applicants/soft-skills`)
                .set('Authorization', `Bearer ${token}`)
                .send({
                    applicantId: applicantId,
                    skill: 'Test skill',
                    rate: 5
                })
                .end(function (err, res) {
                    res.should.have.status(201);
                    assert.equal(res.body.success, true);
                    done();
                });
        })

    })

    describe('Professional Qualifications', function () {

        it('Check create professional qualification', function (done) {
            chai.request(app)
                .post('/api/applicants/professional-qualifications')
                .set('content-type', 'application/json')
                .send({
                    applicantId: applicantId,
                    instituteName: "Test Institute",
                    title: 'Test Qualification'
                })
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(201);
                    assert.equal(res.body.success, true);
                    done();
                })
        });

    })

    describe('Educational Qualifications', function () {

        it('Check create educational qualification', function (done) {
            chai.request(app)
                .post('/api/applicants/educational-qualifications')
                .set('content-type', 'application/json')
                .send({
                    applicantId: applicantId,
                    instituteName: 'Test institute',
                    title: 'Test title',
                    type: 'degree',
                    score: 3
                })
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(201);
                    assert.equal(res.body.success, true);
                    done();
                })
        });

    })

    describe('Technical skills', function () {

        it('Check add technical skill', function (done) {
            chai.request(app)
                .post('/api/applicants/technical-skills')
                .send({
                    applicantId: applicantId,
                    skill: 'Test skill',
                    rate: 4
                })
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(201);
                    assert.equal(res.body.success, true);
                    done();
                })
        });

        it('Check get technical skills (technical skills suggestion)', function (done) {
            chai.request(app)
                .get('/api/technical-skills?search_text=rea')
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, true);
                    done();
                })
        });

        it('Check get recently added technical skills', function (done) {
            chai.request(app)
                .get('/api/technical-skills/added/recent')
                .end(function (err, res) {
                    if (err) done(err);
                    res.should.have.status(200);
                    assert.equal(res.body.success, true);
                    done();
                })
        });

    })


})