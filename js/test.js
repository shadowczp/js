function doThisLater() {
    alert("haha")
}

function test(num1, num2) {

}

function click1() {
    localStorage.userName = '岑志鹏'
    document.getElementById("name").setAttribute("value", localStorage.userName)
}

window.onload = function (ev) {
    document.getElementById("name").setAttribute("value", localStorage.userName)
    function Person() {
    }
    Person.prototype.msg={name:'czp',age:22}
    var czp = new Person()
    var hhh = new Person()
    hhh.msg.name='hhh'
    hhh.msg='test'
    delete hhh.msg
    alert(JSON.stringify(czp.msg))
    alert(JSON.stringify(hhh.msg))
    a='dasda'
    alert(top.a)
}


