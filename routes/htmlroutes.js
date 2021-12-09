const path = require('path');

module.exports = (app) => {
    // the start or the index
    app.get('/', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/index.html'));
    });
    // the exercise section
    app.get('/exercise', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/exercise.html'));
    });

    // the stats section
    app.get('/stats', (req, res) => {
        res.sendFile(path.join(__dirname, '../public/stats.html'));
    });
};
