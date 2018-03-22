/**
 * Created by yeebee on 2018/3/16.
 */
window.onload = function () {
    /*4栋建筑的gif显现*/
    var building = document.getElementsByClassName('con_building');
    /*部分需要替换成gif的png*/
    var Super = document.getElementsByClassName('con_superBee')[0];
    var YeeBee = document.getElementsByClassName('con_bee_yee')[0];
    var MBee = document.getElementsByClassName('m_bee')[0];

    for(var i=0;i<building.length;i++){
        replaceDataSrc(building,i);
    }
    window.onscroll = function () {
        replacePng(Super);
        replacePng(YeeBee);
        replacePng(MBee);
    }
};
function replaceDataSrc(el,i) {
    var Src = el[i].getAttribute('data-src');
    setTimeout(function () {
        el[i].setAttribute('src',Src);
    },i*100);
}
function replacePng(el) {
    var Src = el.getAttribute('src');
    var Rex = /.png$/;

    if(Rex.test(Src)){
        el.setAttribute('src',Src.replace(Rex,'.gif'))
    }else{
        return false;
    }
}