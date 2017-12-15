module.exports = (app) => {
    const history = app.controllers.history;
    const token = require('./../middlewares/token');
    app.routes.get('/history',token.validateRequest,history.list);
    app.routes.post('/history/:game_id',token.validateRequest,history.replay);
};