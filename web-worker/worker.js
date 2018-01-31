// 有数据发过来，就触发
onmessage = function (e) {
    let num1 = e.data;
    let num2 = 0;

    console.time('计算耗时')
    for (let i = 0; i < num1; i++) {
        num2 += i;
    }
    console.timeEnd('计算耗时')

    console.log(`Worker 计算结果=${num2}`)

    // 当我们计算出结果，应该回传
    postMessage(num2);
}