module.exports = (app) => {
    app.use('/', require('./controller/main/index'))
}