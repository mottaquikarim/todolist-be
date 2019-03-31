jest.mock('express')
const express = require('express')

jest.mock('body-parser', () => {
    return {
        json: () => "bogus",
    }
});
const bodyParser = require('body-parser')

jest.mock('../routes/user')
const {getUserRouter,} = require('../routes/user')

jest.mock('../routes/listitem')
const {getListItemRouter,} = require('../routes/listitem')

const {getApp,} = require('../app')

test('just make it run, lol', done => {
    const mockUse = jest.fn();
    const mockApp = {
            use: mockUse,
        }
    express.mockImplementation(() => {
        return mockApp;
    })

    const app = getApp()
    expect(app).toEqual(mockApp)
    expect(mockUse.mock.calls.length).toBe(3)
    expect(mockUse.mock.calls[0][0]).toBe('bogus')
    expect(getUserRouter.mock.calls.length).toBe(1)
    expect(getListItemRouter.mock.calls.length).toBe(1)

    done()
})
