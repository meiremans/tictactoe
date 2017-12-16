module.exports = (app) => {
    const game = app.controllers.game;
    const token = require('../middlewares/token');
    app.routes.get('/game/new',token.validateRequest,game.newGame);
    app.routes.post('/game/:game_id/move',token.validateRequest,game.doMove);
};