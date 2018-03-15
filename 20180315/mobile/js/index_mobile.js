/**
 * Created by yeebee on 2018/3/12.
 */
/*_init_用于采集信息，将所需的定义*/
function _init_(start,end,cl) {
    this.box = document.getElementsByClassName(cl)[0];
    // this.tip = this.box.children[0];//提示图
    this.yet = this.box.children[0];
    this.past = this.box.children[1];
    this.top = -500;

    this.time = new Date();

    /*本次活动在3.17-3.22*/

    var _start = start.replace(/-/g,'/');
    this.start_time = new Date(_start);

    var _end = end.replace(/-/g,'/');
    this.end_time = new Date(_end);

    var _this = this;

    this.During(_this);

}

/*判断活动处于哪个阶段*/
_init_.prototype.During = function(_this) {

    if(this.start_time>this.time){
        this. box.style.display='block';
        this.removeHref('a_link');
        this.yet.style.top=0;
    }else if(this.end_time<this.time){
        this.box.style.display='block';
        this.past.style.top=0;
        this.removeHref('a_link');
    }else{
        this.box.style.display='none';
    }

    for(var i = 0;i<this.box.children.length;i++){
        this.box.children[i].onclick = function () {
            _this.closeTip(this);
        };
    }



};

/*当活动过期的时候，a标签无法点击，即去掉href属性*/

_init_.prototype.removeHref = function(el) {
    var _link = document.getElementsByClassName(el);
    for(var i=0;i<_link.length;i++){
        _link[i].removeAttribute('href');
    }
};

//关闭提示的遮罩层
_init_.prototype.closeTip = function (el) {
    el.style.top = this.top+'px';
    this.box.style.opacity=0;
    this.box.addEventListener('transitionend',function () {
        this.style.display='none';
    },false);
};





window.onload=function () {

    new _init_('2018-3-17','2018-3-22','mobile_mask');

};