// urlUtil.js

module.exports.getCurrentUrl = function (req) {
    return req.protocol + '://' + req.get('host') + req.originalUrl;
};
