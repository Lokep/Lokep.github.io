/**
 * Created by yeebee on 2018/3/3.
 */
window.onload = function () {

    const txt = '我希望有个如你一般的人。<br />如这山间清晨一般明亮清爽的人，<br /> 如奔赴古城道路上阳光一般的人，<br />温暖而不炙热，覆盖我所有肌肤。 <br />由起点到夜晚，由山野到书房， <br />一切问题的答案都很简单。 <br />我希望有个如你一般的人，贯彻未来，数遍生命的公路牌。';

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
