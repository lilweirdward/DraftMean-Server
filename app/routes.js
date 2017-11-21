var Board = require('./models/board');

module.exports = function(app) {
    app.get('/api/boards', function(req, res) {
        Board.find(function(err, boards) {
            if (err)
                res.send(err);
            
            res.json(boards);
        });
    });

    app.get('*', function(req, res) {
        res.sendFile('./public/views/index.html');
    });
};