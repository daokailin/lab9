/*
 * GET home page.
 */
var labs = require('../labs.json');

exports.view = function(req, res) {
    if (labs.length > 7) {
        var todaysLab = {
            "id": "lab-9",
            "title": "Debugging 101",
            "date": "March 7",
            "image": "debug.png",
            "css": { "background": "yellow" }

        };

        labs.push(todaysLab);
    }

    res.render('index', {
        'labs': labs
    });
};