/**
 * Created by chenanguo on 2016/9/29.
 */
function timerPromise(delay) {
    return new Promise((resolve, reject) => {
        setTimeout(reject(delay), delay);
    })
}
// Promise.race的含义是只要有一个promise对象进入FulFilled或者Rejected状态的话，程序就会停止，且会继续后面的处理逻辑；
Promise.race([
    timerPromise(500), timerPromise(1000)
]).then(value => {
    console.log(value);
}).then(() => console.log("success"),() => console.log("error"));