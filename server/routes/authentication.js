module.exports = (app) => {
    const authentication = app.controllers.authentication;
    const token = require('./../middlewares/token');
    app.routes.post('/auth/login', authentication.login);
    app.routes.get('/auth/verify', token.validateRequest, authentication.verify);
};
