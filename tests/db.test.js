jest.mock('pg-promise')
const pgp = require('pg-promise')

const {getDbConn,} = require('../db')

test('returns same object after multiple invocations', () => {
    pgp.mockImplementation(() => {
        return function() { return Math.floor(Math.random()*10); }
    });

    const initialVal = getDbConn('testing');

    expect(pgp.mock.calls[0][0]).toEqual({})

    expect(getDbConn('testing')).toBe(initialVal)
    expect(getDbConn('testing')).toBe(initialVal)
    expect(getDbConn('testing')).toBe(initialVal)

    expect(pgp.mock.calls.length).toBe(1)

})
