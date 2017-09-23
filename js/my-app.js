// Initialize your app
var myApp = new Framework7({
    animateNavBackIcon:true
});

// Export selectors engine
var $$ = Dom7;

// Add main View
var mainView = myApp.addView('.view-main', {
    // Enable dynamic Navbar
    dynamicNavbar: true,
    // Enable Dom Cache so we can use all inline pages
    domCache: true
});
var $tab1_gradient;
var $tab3_gradient;
load();
function load() {
	var colors = new Array(
      [54,209,220],
      [91,134,229],
      [86,204,242],
      [47,128,237],
      [91,134,229],
      [54,209,220],
      [47,128,237],
      [86,204,242]);

    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];

    //transition speed
    var gradientSpeed = 0.009;

    $tab1_gradient = setInterval(function() {
    	// updateGradient(colorIndices, colors, step, gradientSpeed);
    	  if ( $===undefined ) return;
    	  
    	var c0_0 = colors[colorIndices[0]];
    	var c0_1 = colors[colorIndices[1]];
    	var c1_0 = colors[colorIndices[2]];
    	var c1_1 = colors[colorIndices[3]];

    	var istep = 1 - step;
    	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    	var color1 = "rgb("+r1+","+g1+","+b1+")";

    	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    	var color2 = "rgb("+r2+","+g2+","+b2+")";

    	 $('.tabs-swipeable-wrap').css({
    	   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    	    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    	  
    	  step += gradientSpeed;
    	  if ( step >= 1 )
    	  {
    	    step %= 1;
    	    colorIndices[0] = colorIndices[1];
    	    colorIndices[2] = colorIndices[3];
    	    
    	    //pick two new target color indices
    	    //do not pick the same as the current one
    	    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    	    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    	    
    	  }
    },10);
}
// clearInterval($tab1_gradient);
$$('#tab1').on('tab:show', function () {
	clearInterval($tab3_gradient);
	$$("#newchat").show();
    $$("#title").text('Chat');
    // $('.tabs-swipeable-wrap').animate({backgroundColor: '#36D1DC'}, 300);
    // $('.tabs-swipeable-wrap').animate({backgroundColor: '-webkit-linear-gradient(to right, #2F80ED, #56CCF2)'}, 300);
    // $('.tabs-swipeable-wrap').animate({backgroundColor: 'linear-gradient(to right, #2F80ED, #56CCF2)'}, 300);
    
    var colors = new Array(
      [54,209,220],
      [91,134,229],
      [86,204,242],
      [47,128,237],
      [91,134,229],
      [54,209,220],
      [47,128,237],
      [86,204,242]);

    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];

    //transition speed
    var gradientSpeed = 0.009;

    $tab1_gradient = setInterval(function() {
    	// updateGradient(colorIndices, colors, step, gradientSpeed);
    	  if ( $===undefined ) return;
    	  
    	var c0_0 = colors[colorIndices[0]];
    	var c0_1 = colors[colorIndices[1]];
    	var c1_0 = colors[colorIndices[2]];
    	var c1_1 = colors[colorIndices[3]];

    	var istep = 1 - step;
    	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    	var color1 = "rgb("+r1+","+g1+","+b1+")";

    	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    	var color2 = "rgb("+r2+","+g2+","+b2+")";

    	 $('.tabs-swipeable-wrap').css({
    	   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    	    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    	  
    	  step += gradientSpeed;
    	  if ( step >= 1 )
    	  {
    	    step %= 1;
    	    colorIndices[0] = colorIndices[1];
    	    colorIndices[2] = colorIndices[3];
    	    
    	    //pick two new target color indices
    	    //do not pick the same as the current one
    	    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    	    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    	    
    	  }
    },10);
    // clearInterval($tab1_gradient);
    // #709eff
});
 
$$('#tab2').on('tab:show', function () {
	clearInterval($tab1_gradient);
	$$("#newchat").hide();
	clearInterval($tab3_gradient);
    $$("#title").text('Search');
    $('#tab2').animate({backgroundColor: '#000'}, 500);
    $('.tabs-swipeable-wrap').animate({backgroundColor: '#000'}, 300);
    $('.tabs-swipeable-wrap').css('background', '#000');
    // #000000
});
 
$$('#tab3').on('tab:show', function () {
	clearInterval($tab1_gradient);
	$$("#newchat").hide();
    $$("#title").text('Stories');
    var colors = new Array(
      [106,48,147],
      [160,68,255],
      [127,0,255],
      [225,0,255],
      [160,68,255],
      [106,48,147],
      [225,0,255],
      [127,0,255]);

    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];

    //transition speed
    var gradientSpeed = 0.009;

    $tab3_gradient = setInterval(function() {
    	// updateGradient(colorIndices, colors, step, gradientSpeed);
    	  if ( $===undefined ) return;
    	  
    	var c0_0 = colors[colorIndices[0]];
    	var c0_1 = colors[colorIndices[1]];
    	var c1_0 = colors[colorIndices[2]];
    	var c1_1 = colors[colorIndices[3]];

    	var istep = 1 - step;
    	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    	var color1 = "rgb("+r1+","+g1+","+b1+")";

    	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    	var color2 = "rgb("+r2+","+g2+","+b2+")";

    	 $('.tabs-swipeable-wrap').css({
    	   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    	    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    	  
    	  step += gradientSpeed;
    	  if ( step >= 1 )
    	  {
    	    step %= 1;
    	    colorIndices[0] = colorIndices[1];
    	    colorIndices[2] = colorIndices[3];
    	    
    	    //pick two new target color indices
    	    //do not pick the same as the current one
    	    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    	    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    	    
    	  }
    },10);
    // clearInterval($tab3_gradient);
    // #c348f9
});  

$$(".view-chat").on('click', function(event) {
	$$(".navbar").css('background', '#FFF');
	$$(".navbar").css('color', 'rgb(91,134,229)');
});

function reset() {
	clearInterval($tab1_gradient);
	console.log('VBACK');
	$$(".navbar").css('background', 'transparent');
	$$(".navbar").css('color', '#FFF');
	var colors = new Array(
      [54,209,220],
      [91,134,229],
      [86,204,242],
      [47,128,237],
      [91,134,229],
      [54,209,220],
      [47,128,237],
      [86,204,242]);

    var step = 0;
    //color table indices for: 
    // current color left
    // next color left
    // current color right
    // next color right
    var colorIndices = [0,1,2,3];

    //transition speed
    var gradientSpeed = 0.009;

    $tab1_gradient = setInterval(function() {
    	// updateGradient(colorIndices, colors, step, gradientSpeed);
    	  if ( $===undefined ) return;
    	  
    	var c0_0 = colors[colorIndices[0]];
    	var c0_1 = colors[colorIndices[1]];
    	var c1_0 = colors[colorIndices[2]];
    	var c1_1 = colors[colorIndices[3]];

    	var istep = 1 - step;
    	var r1 = Math.round(istep * c0_0[0] + step * c0_1[0]);
    	var g1 = Math.round(istep * c0_0[1] + step * c0_1[1]);
    	var b1 = Math.round(istep * c0_0[2] + step * c0_1[2]);
    	var color1 = "rgb("+r1+","+g1+","+b1+")";

    	var r2 = Math.round(istep * c1_0[0] + step * c1_1[0]);
    	var g2 = Math.round(istep * c1_0[1] + step * c1_1[1]);
    	var b2 = Math.round(istep * c1_0[2] + step * c1_1[2]);
    	var color2 = "rgb("+r2+","+g2+","+b2+")";

    	 $('.tabs-swipeable-wrap').css({
    	   background: "-webkit-gradient(linear, left top, right top, from("+color1+"), to("+color2+"))"}).css({
    	    background: "-moz-linear-gradient(left, "+color1+" 0%, "+color2+" 100%)"});
    	  
    	  step += gradientSpeed;
    	  if ( step >= 1 )
    	  {
    	    step %= 1;
    	    colorIndices[0] = colorIndices[1];
    	    colorIndices[2] = colorIndices[3];
    	    
    	    //pick two new target color indices
    	    //do not pick the same as the current one
    	    colorIndices[1] = ( colorIndices[1] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    	    colorIndices[3] = ( colorIndices[3] + Math.floor( 1 + Math.random() * (colors.length - 1))) % colors.length;
    	    
    	  }
    },10);
};	

function showStory(photos2) {
	var story = myApp.photoBrowser({
	    photos : photos2,
	    theme: 'dark',
	    navbar: false,
	    toolbar: false,
	    swipeToClose: true
	});
	story.open();
}

function loginScreen() {
    console.log('LOGIN ACTIVE');
    $$("#start_screen").removeClass('snapchat-color');
    $$("#choose").hide();
    $$("#video-background").hide();
    $$("#login").show();
}

function registerScreen() {
    console.log('REGISTER ACTIVE');
    $$("#start_screen").removeClass('snapchat-color');
    $$("#choose").hide();
    $$("#video-background").hide();
    $$("#register").show();
}

function backToChoose() {
    console.log('CHOOSE ACTIVE');
    $$("#start_screen").addClass('snapchat-color');
    $$("#choose").show();
    $$("#video-background").show();
    $$("#login").hide();
    $$("#register").hide();
}

var errorCallback = function(e) { 
    console.log('Rejected', e); 
};

// Not showing vendor prefixes.
navigator.getUserMedia({video: true, audio: true}, function(localMediaStream) { 
    var video = document.getElementById('video-background'); 
    video.src = window.URL.createObjectURL(localMediaStream); 
    video.onloadedmetadata = function(e) {

    }; 
}, errorCallback);
