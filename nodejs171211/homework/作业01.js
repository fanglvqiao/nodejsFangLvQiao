/*
* Linux 10个命令
* 1.ls 显示文件或目录
* 2.mkdir 创建目录
* 3.cd 切换目录
* 4.rm 删除文件
* 5.cp 拷贝
* 6.wc 统计文本中行数、字数、字符数
* 7.rmdir 删除空目录
* 8.touch 创建空文件
* 9.pwd 显示当前目录
* 10.find 在文件系统中搜索某文件
* */

/*
* let
* 1.var定义的变量是全局变量或者函数变量。
* let定义的变量是块级的变量。
* 2.let hello = 'hello world.';
*  console.log(hello);
*  是不好用的,用let关键字就要注意JavaScript的严格模式
*  需要在上方加'user strict'.
*  let和var的区别
*  1.声明后没有赋值结果相同都是undefined
*  2.使用为生命的变量时var输出undefined  let直接报错
*  3.变量的作用范围
*  例如:
*
* */
// 'use strict';
// function aaa() {
//     var v = "123";
//     let l = "123";
//      {
//         var v = "456";
//         let l = "456";
//
//     }
//     console.log(v);//输出456,内部"{}"中声明的v变量覆盖外部的l声明
//     console.log(l);//输出123,内部"{}"中声明的l和外部的l不是同一个变量
// }
// aaa()
/*
* const
* 1.声明常量,不可以重新声明
* 2.声明数组,可以填充数据,但不可以重新赋值
*
* */
/*
* 变量解构
* 按照一定模式，从数组和对象中提取值，对变量进行赋值，这被称为解构。
* 变量解构赋值用途
* 1.交换变量的值   [x,y] = [y,x];
* 2.从函数返回多个值
* 函数只能返回一个值，如果要返回多个值，只能把它们放在数组或对象里返回。
* 有了解构赋值，取出这些值就很方便。
* */
// 返回一个数组
// function a(){
//     return [1,2,3];
// }
// var [a,b,c] = a();
//
// // 返回一个对象
// function a(){
//     return {i:1, j:2};
// }
// var {i,j} = a();
/*
* 3.函数参数的定义
* 解构赋值可以把一组参数和变量名对应起来
* 4.提取json数据
* */

/*
* 箭头函数
* () => console.log('Hello')
* function a(){
  console.log('hello')
   }
   a()
*
* */
//  普通函数中的this:
// 1. this总是代表它的直接调用者(js的this是执行上下文), 例如 obj.func ,那么func中的this就是obj
// 2.在默认情况(非严格模式下,未使用 'use strict'),没找到直接调用者,则this指的是 window (约定俗成)
// 3.在严格模式下,没有直接调用者的函数中的this是 undefined
// 箭头函数中的this
// 箭头函数没有自己的this, 它的this是继承而来;
// 默认指向在定义它时所处的对象(宿主对象),而不是执行时的对象,
// 定义它的时候,可能环境是window;
// 箭头函数可以方便地让我们在 setTimeout ,setInterval中方便的使用this
//看了一堆(箭头函数还是很迷糊,尽力了)