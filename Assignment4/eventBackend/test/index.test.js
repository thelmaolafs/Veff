//Importing the application to test
let server = require('../index');
let mongoose = require("mongoose");
let Event = require('../models/event');
let Booking = require('../models/booking');

//These are the actual modules we use
let chai = require('chai');
let should = chai.should();
let chaiHttp = require('chai-http');
chai.use(chaiHttp);

let apiUrl = "http://localhost:3000";

describe('Endpoint tests', () => {
    //###########################
    //These variables contain the ids of the existing event/booking
    //That way, you can use them in your tests (e.g., to get all bookings for an event)
    //###########################
    let eventId = '';
    let bookingId = '';

    //###########################
    //The beforeEach function makes sure that before each test, 
    //there is exactly one event and one booking (for the existing event).
    //The ids of both are stored in eventId and bookingId
    //###########################
    beforeEach((done) => {
        let event = new Event({ name: "Test Event", capacity: 10, startDate: 1590840000000, endDate: 1590854400000});

        Event.deleteMany({}, (err) => {
            Booking.deleteMany({}, (err) => {
                event.save((err, ev) => {
                    let booking = new Booking({ eventId: ev._id, firstName: "Jane", lastName: "Doe", email: "jane@doe.com", spots: 2 });
                    booking.save((err, book) => {
                        eventId = ev._id;
                        bookingId = book._id;
                        done();
                    });
                });
            });
        });
    });

    //###########################
    //Write your tests below here
    //###########################

    it("should always pass", function() {
        console.log("Our event has id " + eventId);
        console.log("Our booking has id " + bookingId);
        chai.expect(1).to.equal(1);
    });

    //Regular endpoint tests, all success cases.
    it("GET /api/v1/events", function(done) {
        chai.request(apiUrl)
            .get('/api/v1/events')
            .end((err, res) => {
                res.should.have.status(200);
                res.should.be.json;
                res.body.should.be.a('array');
                res.body.length.should.be.eql(1);
                res.body[0].should.have.property('_id');
                res.body[0].should.have.property('description').eql("Reykjavik");
                Object.keys(res.body[0]).length.should.be.eql(2);
                done();
        });
    });

    it("", function(done) {
        chai.request(apiUrl)
            .end((err, res) => {
                done();
            });
    });

    it("", function(done) {
        chai.request(apiUrl)
            .end((err, res) => {
                done();
            });
    });

    it("", function(done) {
        chai.request(apiUrl)
            .end((err, res) => {
                done();
            });
    });

    it("", function(done) {
        chai.request(apiUrl)
            .end((err, res) => {
                done();
            });
    });

    it("", function(done) {
        chai.request(apiUrl)
            .end((err, res) => {
                done();
            });
    });

    //Endpoint tests to DELETE individual booking, success and failure.
    it("", function(done) {
        chai.request(apiUrl)
            .end((err, res) => {
                done();
            });
    });

    it("", function(done) {
        chai.request(apiUrl)
            .end((err, res) => {
                done();
            });
    });
});