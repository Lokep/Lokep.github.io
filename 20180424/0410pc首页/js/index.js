/**
 * Created by yeebee on 2018/4/10.
 */
window.onload = function () {


    /*搜索部分的option*/
    $('.optionPart').click(function () {

        $(this).siblings('span').addClass('unSelected');
        $(this).removeClass('unSelected');

    });

    /*导航的滑动块*/
    var NavTag = $('.headerNav>li')
    NavTag.mouseover(function () {
        var hb = $('.headerBottom').offset().left;
        var eLeft=$(this).offset().left;
        var _width = $(this).width();
        $('.NavSlip').css({
            'left':eLeft-hb+'px',
            'width':_width
        });
    });
    NavTag.mouseout(function () {
        $('.NavSlip').css({'width':0});
    });
    NavTag.click(function () {
        $('.NavSlip').css({'width':0});
        $(this).siblings('li').removeClass('clicked');
        $(this).addClass('clicked');
    });



    var OptionPart = document.getElementsByClassName('optionPart');
    for(var i=0;i<OptionPart.length;i++){
        OptionPart[i].onclick=function () {
            for(var m=0;m<OptionPart.length;m++){
                OptionPart[m].classList.add('unSelected');
            }
            this.classList.remove('unSelected');
        }
    }

    /*Navigation*/
    var Prev = document.getElementsByClassName('prevButton')[0];
    var Next =document.getElementsByClassName('nextButton')[0];
    var mySwiper = new Swiper ('.swiper-container', {
        direction: 'horizontal',
        loop: true,
        autoplay:true,
        pagination: {
            el: '.swiper-pagination',
            clickable:true
        }
    });

    mySwiper.el.onmouseover = function(){
        mySwiper.autoplay.stop();
    };
    mySwiper.el.onmouseout = function(){
        mySwiper.autoplay.start();
    };
    Prev.onclick = function () {
        mySwiper.slidePrev();
    };
    Next.onclick = function () {
        mySwiper.slideNext();
    };


    /*悬浮窗*/
    var floatBlock = document.getElementsByClassName('FloatBlock')[0];
    var OldTop=40+'px',Top;

    var _offset = [];
    var _Content = $('.Content>div');
    for(var j=0;j<_Content.length;j++){
        _offset.push(_Content.eq(j).offset().top);
    }
    $('.FloatMenu>li').click(function () {
        var index = $(this).index();
        console.log(_offset);
        $("html,body").animate({scrollTop:_offset[index]}, 300*(index+1));
    });


};

