/**
 * Created by chenanguo on 2016/9/29.
 */
var path = require("path"),
    fs = require("fs");

// 获得es6文件夹下的js文件
var getJsFiles = function () {
    var jsPath = path.resolve("es6");
    var dirs = fs.readdirSync(jsPath);
    var matchs = [],
        files = {},
        all = [];
    dirs.forEach(function (item) {
        matchs = item.match(/(.+)\.js$/);
        var _path = '';
        if (matchs) {
            _path = path.resolve("es6", item);
            files[matchs[1]] = _path;
            all.push(_path);
        }
    });
    return files;
};

var config = {
    entry: getJsFiles(),
    output: {
        path: "build",
        filename: "[name].js"
    },
    module: {
        loaders: [
            {
                test: /\.js$/,
                exclude: "/node-modules/",
                loader: "babel",
                query: {
                    presets: ["es2015"]
                }
            }
        ]
    }
};
console.log(config);
module.exports = config;