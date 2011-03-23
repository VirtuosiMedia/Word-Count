Word Count
===========

Word Count is a JavaScript word and character counter based on MooTools 1.3. It can count static text or text being entered into a form element, as it's being typed. It's simple to use and has been tested in IE6+, Firefox, Chrome, Opera, and Safari.
You can find a [full tutorial](http://www.virtuosimedia.com/dev/javascript/mootools-plugins/word-count/tutorial), the full [API docs](http://www.virtuosimedia.com/dev/javascript/mootools-plugins/word-count/api-documentation), and [demos](http://www.virtuosimedia.com/dev/javascript/mootools-plugins/word-count/demos) at the [Virtuosi Media website](http://www.virtuosimedia.com/). Also, check out the rest of our [MooTools plugins](http://www.virtuosimedia.com/dev/javascript/mootools-plugins/).

![Screenshot](https://github.com/VirtuosiMedia/Word-Count/raw/master/word-count.png)

**Features**

* Simple out of the box
* Unobtrusive - requires no changes to existing (X)HTML markup
* Degrades gracefully
* Cross browser - tested in Internet Explorer 6+, Firefox, Safari, Opera, and Chrome
* Customizable styling - 100% CSS styling.
* 8 configurable options 
* Choose a word count, a character count, or both
* Customizable text - The outputted text can be changed according to preference or language.

How to use
----------

Full documentation is available either on our website or in the package download. Basic usage is as follows:

**HTML**

	<form>
		<textarea name="countMe"></textarea>
		<div id="target">Tell me more about yourself...</div>
	</form>

**CSS**

	body {margin:0px; padding:0px; background:#333;}
	textarea {width:300px; height:60px; outline:none; margin-left:10px; border:1px solid; border-color:#000 #999 #999 #000; border-radius:10px; -moz-border-radius:10px; -webkit-border-radius:10px; padding:5px;}
	#target {width:300px; height:30px; display:block; border:1px solid; border-color:#FFF #000 #000 #FFF; line-height:30px; margin:10px 10px; border-radius:10px; -moz-border-radius:10px; -webkit-border-radius:10px; padding:5px; color:#555; text-shadow:#FFF 1px 1px 1px; text-indent:5px; background: #e2e2e2; background: -moz-linear-gradient(top, #e2e2e2 0%, #dbdbdb 50%, #d1d1d1 51%, #fefefe 100%); background: -webkit-gradient(linear, left top, left bottom, color-stop(0%,#e2e2e2), color-stop(50%,#dbdbdb), color-stop(51%,#d1d1d1), color-stop(100%,#fefefe));}

**JavaScript**

	window.addEvent('domready', function(){
		var counter = new WordCount('target', {inputName:'countMe'});
	});