//变量申明部分
var header = document.getElementById("header");
var nav = document.getElementById("nav");
var sub_nav = document.getElementById("sub_nav");
var promo = document.getElementById("promo");
var pic_one = document.getElementById("pic_one");
var pic_one1 = document.getElementsByClassName("pic_one1");
var pic_two1 = document.getElementsByClassName("pic_two1");
//轮播图定时器
var a = null;
//中间小导航
var b = null;
var d = 1;
//侧栏小导航
var side_menu_one = document.getElementsByClassName("side_menu_one");
//新闻正文部分的a标签的title部分动态获取li的文字
var news_item = document.getElementsByClassName("news_item");
var news_item_a = document.getElementsByName("news_item_a");
//新闻部分选项
var news_tab_l = document.getElementsByClassName("news_tab_l");
//新闻正文部分
var news_content = document.getElementsByClassName("news_content");
//最新推荐部分俩li
var recommend_top_l = document.getElementsByClassName("recommend_top_l");
//最新推荐里面的两个div
var recommend_content1 = document.getElementsByClassName("recommend_content1");






//开始部分 当鼠标滚轮向下滑动时，开始界面图片缩小改变
nav.onmouseover = function () {
    sub_nav.style.display = "block";
}
sub_nav.onmouseover = function () {
    this.style.display = "block";
}
sub_nav.onmouseout = function () {
    this.style.display = "none";
}
var scrollFunc = function (e) {
    var e = e || window.event;
    if (e.wheelDelta) { //判断浏览器IE，谷歌滑轮事件             
        if (e.wheelDelta > 0) { //当滑轮向上滚动时

        }
        if (e.wheelDelta < 0) { //当滑轮向下滚动时
            var xx = $(document).scrollTop();
//            alert(xx);
            if (xx < 600) {
                header.style.background = "url(small-top.jpg) no-repeat center 90px";
                header.style.height = "440px";
            }

        }
    } else if (e.detail) { //Firefox滑轮事件
        if (e.detail > 0) { //当滑轮向上滚动时 浏览器认为是向下滚动

        }
        if (e.detail < 0) { //当滑轮向下滚动时 浏览器认为是向上滚动

        }
    }
}
//给页面绑定滑轮滚动事件
if (document.addEventListener) {
    document.addEventListener('DOMMouseScroll', scrollFunc, false);
}
//滚动滑轮触发scrollFunc方法
document.onmousewheel = scrollFunc;


//资讯中心部分轮播图

//轮播图基础准备
function lun1() {

    for (i = 0; i < pic_one1.length; i++) {
        pic_one.style.left = -820 * i + "px";
        pic_two1[i].style.background = "#121112";
        pic_two1[i].style.color = "#666";

    }
    pic_one.style.left = -820 * d + "px";
    pic_two1[d].style.background = "#303030";
    pic_two1[d].style.color = "#e9c06c";
    d++;
    if (d == 5) {
        d = 0;
    }
}
//当鼠标移动到下面li时，移动到相应的图片

for (var i = 0; i < pic_two1.length; i++) {
    pic_two1[i].index = i; //读取索引值
    pic_two1[i].onmouseover = function () {
        var index = this.index;
        d = index;
        lun1();
    }
}
//轮播图定时器
a = setInterval(lun1, 4000);
//当鼠标移动到轮播图时，停止定时器
promo.onmouseover = function () {
    clearInterval(a);
}
//当鼠标移出轮播图时，继续定时器
promo.onmouseout = function () {
    a = setInterval(lun1, 4000);
}
//侧栏部分
b = [-200, -560, -590, -380, -650, -290, -620, -260, -470, -500, -410, -440];
for (var i = 0; i < side_menu_one.length; i++) {
    side_menu_one[i].style.background = "url(spr-v2.png)";
    //    side_menu_one[i].style.backgroundPosition ="-200px 0";
    side_menu_one[i].style.backgroundPosition = b[i] + "px 0";
}
//新闻正文部分的a标签的title部分动态获取li的文字
(function title() {
    for (var i = 0; i < news_item.length; i++) {
        news_item_a[i].title = news_item[i].innerText;
    }
})();
//当鼠标点击各个li时，显示各个li的正文部分
for (var i = 0; i < news_tab_l.length; i++) {
    news_tab_l[i].index = i;
    news_tab_l[i].onclick = function () {
        var index = this.index;
        for (var i = 0; i < news_content.length; i++) {
            news_content[i].style.display = "none";
            news_tab_l[i].style.border = "none";
            news_tab_l[i].style.color = "#666666";
        }
        news_content[index].style.display = "block";
        news_tab_l[index].style.borderBottom = "3px solid #d1ab57";
        news_tab_l[index].style.color = "#d1ab57";
    }

}
//最新推荐里面li点击事件
for(var i = 0;i < recommend_top_l.length;i++){
   recommend_top_l[i].index = i;
   recommend_top_l[i].onclick = function(){
        var index = this.index; 
        for(var i = 0;i < recommend_content1.length;i++){
           recommend_content1[i].style.display = "none";
           recommend_top_l[i].style.color = "#666666";
           recommend_top_l[i].style.fontWeight = "none";
           recommend_top_l[i].style.borderBottom = "none";
        }
           recommend_content1[index].style.display = "block";
           recommend_top_l[index].style.color = "#d1ab57";
           recommend_top_l[index].style.fontWeight = "bold";
           recommend_top_l[index].style.borderBottom = "3px solid #d1ab57";
   }
        
}
        









