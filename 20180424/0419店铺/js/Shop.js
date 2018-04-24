/**
 * Created by yeebee on 2018/4/19.
 */
/*搜索部分的option*/
$(function () {
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

    /*全部分类标签*/
    var MenuTag = $('.menuTag');
    var MenuContent=$('.menuContent');
    MenuTag.find('.closeBar').click(function () {
        var index = $(this).parent().index()-1;
        var Length = MenuTag.length;

        for(var i=index;i<Length;i++){
            MenuTag.eq(i).css('opacity','0');
            MenuContent.eq(i).css({
                'height':0,
                'border-bottom':0
            });
        }
    });

    /*一二三级菜单的*/

    MenuContent.find('li').click(function () {
        var index = $(this).parent().parent().index();
        var txt = $(this).text();
        // var height = MenuContent.eq(index).height();
        // var height = MenuContent.eq(index+1).find('li').length>10?'80px':'40';
        var delta =index<=1? Math.ceil(MenuContent.eq(index+1).find('li').length/14):1;
        var height = delta*40+'px';
        console.log('index:'+index);
        $(this).siblings('li').removeClass('active');
        $(this).addClass('active');
        MenuTag.eq(index).find('.menuTagText').text(txt);
        MenuTag.eq(index).css('opacity','1');
        MenuTag.eq(index+1).css('opacity','1');
        MenuContent.eq(index).css('display','block');
        MenuContent.eq(index+1).css({
            'height':height,
            'border-bottom':'1px dashed rgb(239, 239, 239)'
        });
    });


    /*点击显示大图*/
    $('.ExtendImg').click(function () {
        var src = $(this).find('img').attr('src');
        $('.mask').fadeIn();
        $('.mask>img').attr('src',src);
    });
    $('.mask').click(function () {
        $(this).fadeOut();
    });

    var last_index = 0;
    $('.shopMenu>li').click(function () {
        var index = $(this).index();
        var Shop = $('.shopDetail');
        $(this).siblings().removeClass('shopActive');
        $(this).addClass('shopActive');
        Shop.eq(last_index).fadeOut();
        Shop.eq(index).fadeIn();
        last_index=index;
        console.log(index);
    });


});