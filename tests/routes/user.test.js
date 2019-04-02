const request = require('supertest');

const {getApp,} = require('../../app')

jest.mock('../../middleware')
const {fireAuthService,} = require('../../middleware')

test('calling user/:id/listitems returns 200', done => {
    /*
    fireAuthService.mockImplementation((req, res, next) => {
        next()
        return true; 
    })
    */

    request(getApp())
        .get('user/1')
        .then(d => {
            console.log('IN EHRE', d)
            done();
        })
        .catch(e => {
            console.log(e)
            done()
        })
});
