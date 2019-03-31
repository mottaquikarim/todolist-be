const {getApp,} = require('./app')

getApp().listen(5003, () => {
    console.log('listening on port 5003')
});
