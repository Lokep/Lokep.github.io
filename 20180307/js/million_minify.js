﻿window.onload = function () {
    var txt = '还没忘却年假的休闲惬意 <br /> 3月已经到来? <br /> 业绩考核KPI、产品拉新促活加爆单 <br /> 时间都去哪儿了？ <br /> 还没好好策划老板就来要结果了？ <br /> 产品曝光没渠道？ <br /> 促活成交没思路? <br /> ';
    var bool = 1;
    window.onscroll = function () {
        var sc = window.pageYOffset || document.documentElement.scrollTop || document.body.scrollTop;
        console.log(sc);
        (sc >= 280) ? new WordByWord('content', txt) : '';
        (sc >= 1000) ? new RotatePic('part_3_leftPic', 'roll', 'part_3_rightTxt') : '';
        (sc >= 1500) ? new ReplacePic('m_bee') : '';
    };
    function WordByWord(id, txt) {
        this.tag = document.getElementById(id);
        this.txt = txt;
        var index = 0;
        var _this = this;
        if (bool === 1) {
            function Interval() {
                (index > _this.txt.length) ? (clearInterval(Timer)) : (_this.tag.innerHTML = _this.txt.substring(0, index++) + '<')
            }

            var Timer = setInterval(Interval, 50)
        }
        bool = 2
    }

    function RotatePic(cls, reCls, sb) {
        var _this = this;
        this.cls = document.getElementsByClassName(cls);
        this.sb = document.getElementsByClassName(sb);
        if (bool === 2) {
            for (var i = 0; i < this.cls.length; i++) {
                // setTimeout(function () {
                    _this.cls[i].classList.add(reCls);
                    _this.sb[i].style.left = '-0.24rem'
                // }, i * 1000)
            }
        }
        bool = 3
    }

    function ReplacePic(id) {
        this.el = document.getElementById(id);
        this.src = this.el.getAttribute('src');
        var Reg = /_normal.png$/;
        (Reg.test(this.src)) ? (this.el.setAttribute('src', this.src.replace(Reg, '_dynamic.gif'))) : '';
        console.log('replaced')
    }
};