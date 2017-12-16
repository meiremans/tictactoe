module.exports = (app) => {
    const authentication = app.controllers.authentication;
    app.routes.get('/auth/login', authentication.login);
};
