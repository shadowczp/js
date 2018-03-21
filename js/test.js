function doThisLater() {
    alert("haha")
}
function test(num1,num2) {
    var arr=[1,2,3,4,5,6]
    alert(arr.reduce(function (a,b) {
        return a+b
    }))
}
function click1() {
    localStorage.userName='岑志鹏'
    document.getElementById("name").setAttribute("value",localStorage.userName)
}

window.onload = function (ev) {
    document.getElementById("name").setAttribute("value",localStorage.userName)
    test(10)
}


