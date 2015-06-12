$('.theme-option').click(function(){
	$('.theme-option').removeClass('active');
	$(this).addClass('active');

});

$('#scarlet-fire').click(function(){
	$('#main-content').removeClass('orange yellow green blue purple');
	$('#main-content').addClass('red');
});

$('#bright-orange').click(function(){
	$('#main-content').removeClass('red yellow green blue purple');
	$('#main-content').addClass('orange');
});

$('#happy-lemon').click(function(){
	$('#main-content').removeClass('red orange green blue purple');
	$('#main-content').addClass('yellow');
});

$('#natures-fresh').click(function(){
	$('#main-content').removeClass('red orange yellow blue purple');
	$('#main-content').addClass('green');
});

$('#calm-vibe').click(function(){
	$('#main-content').removeClass('red orange yellow green purple');
	$('#main-content').addClass('blue');
});

$('#slurpee-royale').click(function(){
	$('#main-content').removeClass('red orange yellow green blue');
	$('#main-content').addClass('purple');
});