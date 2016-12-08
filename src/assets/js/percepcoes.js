var scroll;
fCallParalaxe = function(){
	scroll = $(window).scrollTop();
	fParalaxe($('#cont-geral'),0.7);
}

fAudio = function(pers){
	var mp3N = "mp3/" + pers + ".mp3",
	player = "#player_" + pers,
	container = "#cp_" + pers;
	
	var myCirclePlayer = new CirclePlayer(player,{
		m4a: mp3N
	}, {
		cssSelectorAncestor: container,
		swfPath: "js/jplayer",
		wmode: "window",
		keyEnabled: true
	});
	
	$('.cp-container').each(function(){
		$(this).fadeOut(400);
	})
	$(container).stop();
	$(container).fadeIn(400);
}

fClickW = function(){
	$('.over-tb').each(function(){
		$(this).click(function(){
			
			console.log($(this).closest('.box-pers').attr('id').split('pers-')[1]);
			pushEvents('Percepções - Audio','Clicou','Primeiro click - ' + $(this).closest('.box-pers').attr('id').split('pers-')[1]);
			
			$('.cliking').fadeOut(300);
			
			$('.over-tb').each(function(){
				$(this).removeClass('on');
			});
			
			$(this).addClass('on');
			
			$('.cp-pause').each(function(){
				$(this).click();
			})
			fAudio($(this).closest('.box-pers').attr('id').split('pers-')[1]);
		})
	})
}



$(document).ready(function(){
	fClickW();
})

$(window).scroll(function(){
	fCallParalaxe();
})