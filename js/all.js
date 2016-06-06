$(function() {
	
	$('.flower-item a').on('click', function() {
		var photo = $(this).find('img').attr('src');
		$('.flower-main').find('img').attr('src', photo);
		return false;
	});

});