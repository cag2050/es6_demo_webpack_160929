/**
 * Created by chenanguo on 2016/9/29.
 */
var promise = Promise.reject(new Error("Error messages"));
// Promise.catch()方法是promise.then(undefined,onRejected)方法的一个别名，该方法用来注册当promise对象状态变为Rejected的回调函数。
promise.catch(function (error) {
    console.log(error);
});