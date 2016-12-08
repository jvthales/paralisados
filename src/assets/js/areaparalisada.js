fCallPara = function(){
	scroll = $(window).scrollTop();
	
	fParalaxe($('#box-para-a'),0.8);
	fParalaxe($('#box-para-b'),0.5);
	fParalaxe($('#box-para-c'),0.8);
	
}

$(document).ready(function(){

})

$(window).scroll(function(){
	fCallPara();
})