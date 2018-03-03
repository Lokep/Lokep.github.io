/**
 * Created by yeebee on 2018/3/3.
 */
window.onload = function () {

    const txt = '如果你吃一坨屎，可以救我一命，你愿意吗？<br />...............<br />我能吃你个一生平安';

    const _Click = document.getElementById('Click');
    const _Content = document.getElementsByClassName('content')[0];

    _Click.onclick = function () {
        console.log(1);
        this.style.opacity=0;
        this.addEventListener('transitionend',function () {
            _Content.style.opacity=1;
        },false);
    };
    _Content.addEventListener('transitionend',function () {
        new WordByWord('sayLove',txt);
        // new Heart('heart');
    },false);





};

function WordByWord(id,txt) {

    this.tag = document.getElementById(id);
    this.txt = txt;

    var index = 0;
    var _this = this;

    function Interval() {
        (index>_this.txt.length)?clearInterval(Timer):(_this.tag.innerHTML=_this.txt.substring(0,index++)+'<');
    }
    const Timer = setInterval(Interval,100);

    console.log(_this.txt.length);
}
