/**
 * Created by yeebee on 2018/3/15.
 */
function _init_(start,end,cl){this.box=document.getElementsByClassName(cl)[0];this.yet=this.box.children[0];this.past=this.box.children[1];this.top=-500;this.time=new Date();var _start=start.replace(/-/g,'/');this.start_time=new Date(_start);var _end=end.replace(/-/g,'/');this.end_time=new Date(_end);var _this=this;this.During(_this)}_init_.prototype.During=function(_this){if(this.start_time>this.time){this.box.style.display='block';this.removeHref('a_link');this.yet.style.top=0}else if(this.end_time<this.time){this.box.style.display='block';this.past.style.top=0;this.removeHref('a_link')}else{this.box.style.display='none'}for(var i=0;i<this.box.children.length;i++){this.box.children[i].onclick=function(){_this.closeTip(this)}}};_init_.prototype.removeHref=function(el){var _link=document.getElementsByClassName(el);for(var i=0;i<_link.length;i++){_link[i].removeAttribute('href')}};_init_.prototype.closeTip=function(el){el.style.top=this.top+'px';this.box.style.opacity=0;this.box.addEventListener('transitionend',function(){this.style.display='none'},false)};function Float(el){this.el=document.getElementsByClassName(el)[0];this.menu=this.el.children;var _this=this;var overValue=document.getElementsByClassName('pc_over')[0];var single=document.getElementsByClassName('pc_single')[0];var publish=document.getElementsByClassName('pc_need')[0];var intro=document.getElementsByClassName('pc_intro')[0];this.sct=[0,overValue.offsetTop,single.offsetTop,publish.offsetTop,4693,0,0];for(var i=0;i<this.menu.length;i++){this.menu[i].index=i;this.menu[i].onclick=function(){_this.Scroll(_this.sct[this.index]);console.log(_this.sct[this.index])}}}Float.prototype.Scroll=function(i){var isCom=false;var timer=setInterval(function(){isCom=true;var scrollTop=document.documentElement.scrollTop||document.body.scrollTop;var speed=Math.ceil(Math.abs(scrollTop-i)/10);(scrollTop-i>=0)?(document.documentElement.scrollTop-=speed):(document.documentElement.scrollTop+=speed);if(scrollTop===i){clearInterval(timer)}},20);window.onscroll=function(){(!isCom)?clearInterval(timer):isCom=false}};window.onload=function(){new _init_('2018-3-17','2018-3-22','pc_mask');new Float('pc_win_list')};