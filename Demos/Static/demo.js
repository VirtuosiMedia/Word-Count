window.addEvent('domready', function(){
	var counter = new WordCount('target');
	$('target').addEvent('click', function(){
		counter.getCount($('text').get('text'));
	});
});