let n
init()//初始化
setInterval(() => {
    makeLeave(getImage(n))
    .one('transitionend', (e)=>{
        makeEnter($(e.currentTarget))
    })
    makeCurrent(getImage(n+1))
n += 1
},3000)























// 下面可以不看
function getImage(n) {
    return $(`.images > img:nth-child(${x(n)})`)
}
function x(n){
    if(n>5){
        n = n%5
        if(n===0){
            n =5
        }
    }
    return n
}

function init() {
    n=1
    $(`.images > img:nth-child(${n})`).addClass('current')
    .siblings().addClass('enter')
}
    
function makeCurrent($node) {
    $node.removeClass('enter leave').addClass('current')
}
function makeLeave($node) {
    $node.removeClass('enter current').addClass('leave')
    return $node
}
function makeEnter($node) {
    $node.removeClass('leave current').addClass('enter')   
}