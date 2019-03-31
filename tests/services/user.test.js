jest.mock('../../db')
const {getDbConn,} = require('../../db')

const User = require('../../services/user')

test('db.none is called', done => {
    const mockNone = jest.fn(() => Promise.resolve())
    getDbConn.mockImplementation(() => {
        return {none: mockNone}
    })

    User.add('test')
        .then(() => {
            expect(mockNone.mock.calls[0][0]).toBe('INSERT INTO users (email) VALUES ($[email])')
            expect(mockNone.mock.calls[0][1]).toEqual({email:'test'})

            done()
        })
})

test('put will update record', done => {
    const mockNone = jest.fn(() => Promise.resolve())
    const mockOne = jest.fn(() => Promise.resolve({
        'id': 1,
        'email': 'foo@bar.com',
        'token': 'token123491345',
    }))

    getDbConn.mockImplementation(() => {
        return {
            none: mockNone,
            one: mockOne
        }
    })

    User.put('testidlol', {})
        .then(() => {
            expect(mockNone.mock.calls[0][1]).toEqual({
                'id': 1,
                'email': 'foo@bar.com',
                'token': 'token123491345',
            })

            done()
        })

    User.put('testidlol', {'email': 'foo@baz.com'})
        .then(() => {
            expect(mockNone.mock.calls[1][1]).toEqual({
                'id': 1,
                'email': 'foo@baz.com',
                'token': 'token123491345',
            })

            done()
        })

})
