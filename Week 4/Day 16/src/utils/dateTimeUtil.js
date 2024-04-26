module.exports.getTimeStamp = function (d)
{
    let str  = `${d.getHours()}:${d.getMinutes()}:${d.getSeconds()}`;
    return str;
};