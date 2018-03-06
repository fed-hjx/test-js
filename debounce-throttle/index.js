function test(){
    console.log(this,666)
}
function debounce(fn, wait, immediate) {
    let timer;
    let rs;
    return function () {
        let context = this;
        timer && clearTimeout(timer);
        timer = setTimeout(function(){
            rs = fn.call(context)
        }, wait);
    }
}
document.body.onmousemove = debounce(test,1000,false);