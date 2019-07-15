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
/* 
jq的CSS方法,有两个功能
设置css样式
  jq对象.css(属性名,属性值)
获取css样式
  jq对象.css(属性名)
*/
//构造函数.原型.方法名
Init.prototype.css = function (property, value) {
  // 实现设置
  //把伪数组中的每一个都遍历,设置他的css样式属性
  //元素对象.style.css属性名 = 新的值;
  //元素是this,this是实例对像,也是伪数组,遍历
  for (let i = 0; i < this.length; i++){
    // console.log(this[i]);
    //判断是否有带单位
    //console.log('abcdef'.indexOf('d'));  如果有的输出3
    //console.log('abcdef'.indexOf('g'));如果没有,输出都是-1
    if(value.indexOf('px') === -1){
     this[i].style[property] = value + 'px';
    }else {
      this[i].style[property] = value;
    }
    
}
   
  }
  window.$ = window.jQuery = $;
})();
 
  
   

let box = $('.box');
// console.log(box);
box.css('width','200');



