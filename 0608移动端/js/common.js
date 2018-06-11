$(function(){
	/*citySelect*/
	var _bool = true;
	$('.citySelect').click(function() {
		_bool==true?$('.cityList').slideDown():$('.cityList').slideUp();
		_bool=!_bool;
	});
	$('.cityList>li').click(function(){
		var txt = $(this).text();
		$('.citySelect span').text(txt);
		$(this).parent().slideUp();
		_bool=!_bool;
		return false;
	});

})