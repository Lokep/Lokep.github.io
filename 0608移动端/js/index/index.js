$(function(){
	

	var lastIndex=0;
	$('.firstMenuLists>li').click(function(){
		var _this = $(this);
		var _index = _this.index();
		var slipBarWidth = parseInt($('.slipBar').css('width'));
		activeControl(_this,'firstMenuActive');
		$('.slipBar').css({
			left: _index*slipBarWidth+'px',
		});
		$('.tabContent').eq(_index).show();
		$('.tabContent').eq(lastIndex).hide();
		lastIndex=_index;
	});

	$('.secondMenu>li').click(function(){
		var _this = $(this);
		activeControl(_this,'secondMenuActive');
	})

});

function activeControl(el,cls){
	el.addClass(cls);
	el.siblings().removeClass(cls);
}
