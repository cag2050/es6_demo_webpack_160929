/**
 * Created by chenanguo on 2016/9/29.
 */
console.log(1);
new Promise(function (resolve, reject) {
    reject(true);
    window.setTimeout(function () {
        resolve(false);
    }, 0);
}).then(function () {
    console.log(2);
}, function () {
    console.log(3);
});
// .then中指定的方法调用是异步执行的，所以会先执行console.log(4);
console.log(4);