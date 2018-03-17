/**
 * Created by yeebee on 2018/3/16.
 */
window.onload = function () {

    new LazyLoad('lazyLoad',200);


};

function LazyLoad(n,delta) {
    this.node = document.getElementsByClassName(n);
    this.delta=delta;//高度差
    var _this =this;

    window.onscroll = function () {
        _this.fnScroll();
    };

}
LazyLoad.prototype.fnScroll = function () {
    var sc = document.documentElement.scrollTop||document.body.scrollTop;
    var Rex = /.gif$/;
    for(var i =0;i<this.node.length;i++){
        var Src = this.node[i].getAttribute('src');
        var sct =this.node[i].offsetTop;
        if(sct-sc<=this.delta&&!Rex.test(Src)){
            Src=Src.replace(/.png|.jpg$/g,'.gif');
            this.node[i].setAttribute('src',Src);
        }
        console.log(this.node[i].offsetTop);
    }



};