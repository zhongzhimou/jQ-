/* 
目的:
  仿照jquery,封装一个js文件
  该js文件具备哪些功能
    1.获取元素
    2.css方法
    3.操作类名 addClass/removeClass/toggleClass
    4....
jq中如何获取元素
  $(css选择器)
 */
/* function jQUERY(){

} */
//自调用函数的目的是,形成一个局部的作用域,把我们自己的代码保护起来,不会被别人的代码影响
; (function () {
  // 第一个要做的是,模仿jq里面获取元素
  // $(css选择器)

  function $(selector) {
    //document.querySectorAll返回值是一个伪数组,是Noddelist构造函数的实例对象

    // let nodeList = document.querySelectorAll(selector);
    return new Init(selector);
  }
  //  nodeList是他人的实例对象 我们需要自己创一个
  //我们给原型加方法,需要写一个自己的构造函数
  function Init(selector) {
    let nodeList = document.querySelectorAll(selector);
    //遍历nodeList伪数组,把里面的每一个都拿出来,作为我自己的伪数组的元素
    for (let i = 0; i < nodeList.length; i++) {
      // console.log(nodeList[i]);
      this[i] = nodeList[i];
    }
    //给伪数组加一个长度属性
    this.length = nodeList.length;
  }

  }

  window.$ = window.jQuery = $;
})();
let box = $('.box');
// console.log(box);




