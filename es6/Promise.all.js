/**
 * Created by chenanguo on 2016/9/29.
 */
var promise1 = new Promise(function (resolve, reject) {
    resolve(1);
});
var promise2 = new Promise(function (resolve, reject) {
    resolve(2);
});
var promise3 = new Promise(function (resolve, reject) {
    resolve("3,error");
});
// Promise.all可以接受一个元素为Promise对象的数组作为参数，当这个数组里面所有的promise对象都变为resolve时，该方法才会返回。
Promise.all([promise1, promise2, promise3]).then(function (value) {
    console.log(value);
});