"use strict";
/*
typesrcipt数据类型
typescript中为了使编写更规范,更有利于维护,增加的了类型效验

布尔类型(boolean)
数字类型(number)
字符串类型(string)
数组类型(array)
元祖类型(tuple)
枚举类型(enum)
任意类型(any)
null和undefined
void类型
never类型
*/
//定义了什么类型就不能再修改类型
//布尔类型
//js
var flag = true;
//ts
var flag = true;
// flag = "字符串" 错误写法
//数字类型
//js
var num = 123;
//ts
var num = 123;
// num = "字符串"  错误写法
//字符串类型 
//js
var str = "字符串";
//ts
var str = "字符串";
//数字类型
//js
var arr = [];
//ts
//定义数组方法1
var arr2 = []; //数字类型数组
var arr3 = []; //字符串类型数组
//定义数组方法1
var arr4 = [];
var arr5 = [];
//定义任意类型数组
var arr6 = ["11", 1];
//元祖类型 属于数组的一种
//指定数组元素多种类型
var arr7 = ["字符串", 1, true];
//枚举类型
//定义一个Flag的枚举
// 通过枚举的属性来访问枚举成员，和枚举的名字来访问枚举类型：
//不赋值默认为索引值
var Flag;
(function (Flag) {
    Flag[Flag["success"] = 1] = "success";
    Flag[Flag["error"] = -1] = "error";
})(Flag || (Flag = {}));
var f = Flag.success;
console.log(typeof f);
//任意类型 
//可任意修改类型
var any = "字符串";
any = 1;
any = true;
//用处
var box = document.getElementById("box");
box.style.color = "red";
//null undefined
//定义未赋值就是未定义
var nums;
console.log(nums); //undefined
var numx = null || 123;
console.log(numx);
//void 类型 :表示没有任何类型,一般用于定义方法的时候方法没有返回值
//es5
function run() {
    console.log("run");
}
run();
//表示方法没有返回任何类型
function runs() {
    console.log("run");
}
runs();
//定义方法返回number类型
function runx() {
    console.log("run");
    return 1;
}
runx();
//never 其他类型(包括null和undefined的子类型)代表从不会出现的值
//声明never类型的变量只能被never类型赋值
var a;
// a = 123//错误写法
// a = (() => {//抛出错误
//     throw new Error("错误")
// })()
