let mongoose = require('mongoose');
let Loc = mongoose.model('Location');

let sendJSONResponse = function(res, status, content){
    res.status(status);
    res.json(content);
};

module.exports.reviewsCreate = function (req, res) {
    sendJSONResponse(res,200, {
        "status": "success"
    });
};
module.exports.reviewsReadOne = function (req, res) {
    sendJSONResponse(res,200, {
        "status": "success"
    });
};
module.exports.reviewsUpdateOne = function (req, res) {
    sendJSONResponse(res,200, {
        "status": "success"
    });
};
module.exports.reviewsDeleteOne = function (req, res) {
    sendJSONResponse(res,200, {
        "status": "success"
    });
};
