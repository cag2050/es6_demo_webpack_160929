/**
 * Created by chenanguo on 2016/9/29.
 */
function testPromise(ready) {
    return new Promise(function (resolve, reject) {
        if (ready) {
            resolve("执行正确");
        }
        else {
            reject("执行错误");
        }
    });
}
// 调用
testPromise(false).then(function (success) {
    console.log(success);
}, function (error) {
    console.log(error);
});