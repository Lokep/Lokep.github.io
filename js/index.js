/**
 * Created by yeebee on 2018/2/9.
 */
window.onload = function () {
    /*涉及鼠标的滚轮事件*/

    var blog = document.getElementsByClassName('blog')[0];
    var winHeight = document.documentElement.clientHeight||document.body.clientHeight;
    var fp = document.getElementsByClassName('firstPage')[0];
    var sp = document.getElementsByClassName('article_list')[0];
    var spMenu = document.getElementsByClassName('sp_menu')[0];

    var scrollFunc = function (e) {
        e = e || window.event;


        if(e.pageY>=0&&e.pageY<winHeight){
             //判断浏览器IE，谷歌滑轮事件
             if (e.wheelDelta < 0||e.detail<0) {
                //当滑轮向下滚动时
                fp.style.marginTop=-winHeight+'px';
                blog.style.overflowY='scroll';
            }
        }

        spMenu.style.position='fixed';

    };
    //给页面绑定滑轮滚动事件
    if (document.addEventListener) {//firefox
        document.addEventListener('DOMMouseScroll', scrollFunc, false);
    }
    //滚动滑轮触发scrollFunc方法  //ie 谷歌
    window.onmousewheel = document.onmousewheel = scrollFunc;



    /*spMenu的点击事件*/
    var menuList = spMenu.getElementsByTagName('li');
    for(var i=1;i<menuList.length;i++){
        menuList[i].index = i;
        menuList[i].onclick = function () {
            for(var j=1;j<menuList.length;j++){
                menuList[j].classList.remove('active');
            }
            menuList[this.index].classList.add('active');
        }
    }



};