function sum(a, b, c) {
    return a + b + c;
}
function createCurry(fn, args=[]) {//确定函数参数方式
    let len = fn.length;
    return function () {
        let _args = [].slice.call(arguments);

        [].push.apply(_args, args);

        if (_args.length < len) {
            return createCurry.call(this, fn, _args)
        }
        return fn.apply(this, _args);
    }
}

let test = createCurry(sum);

console.log('sum1-----',test(1, 2, 3))
console.log('sum1-----',test(1)(2)(3))

function sum2() {
    return [].slice.call(arguments).reduce((a,b)=>a+b)
}
function createCurry2(fn) {//不确定参数 使用Object.toString or Object.valueOf
    let args = [];

    const curry = function(){
        args = args.concat([...arguments])
        return curry;
    }
    // curry.toString = function () {
    //     return fn.apply(null, args)
    // }
    curry.valueOf = function () {
        return fn.apply(null, args)
    }
    return curry;
}
let test2 = createCurry2(sum2);

console.log('sum2-----', +test2(1)(2)(3))
console.log('sum2-----', +test2(1, 2, 3, 4)(5)(5,7))