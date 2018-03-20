function doThisLater() {
    alert("haha")
}

function click1() {
    //这里返回一个计时器ID
    var timeId = setTimeout(doThisLater, 2000)
    //可以清除计时器阻止执行
    //clearTimeout(timeId)
}

window.onload = function (ev) {
    var div1 = document.getElementById('div1')
    div1.ondragenter=function (ev2) {
        ev2.target.innerHTML='dd'
    }
}

