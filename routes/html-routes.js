
const path = require('path');

module.exports = (app) => {
    // Each of the below routes just handles the HTML page that the user gets sent to.
    app.get("/", function(req, res) {
        res.sendFile(path.join(__dirname, "./client/build/index.html"));
      });
    // index route loads view.html
    // app.get('/', (req, res) =>
    //     res.sendFile(path.join(__dirname, '../client/public/index.html'))
    // );

    app.get('/contact', (req, res) =>
        res.sendFile(path.join(__dirname, './client/public/contact.html'))
    );

    // app.get('/portfolio', (req, res) =>
    //     res.sendFile(path.join(__dirname, './client/public/portfolio.html'))
    // );


};
