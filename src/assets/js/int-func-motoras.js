fCallPara = function(){
	scroll = $(window).scrollTop();
	
	fParalaxe($('#box-para-a'),0.8);
	fParalaxe($('#box-para-b'),0.5);
	fParalaxe($('#box-para-c'),0.3);
	fParalaxe($('#box-para-d'),0.5);
	fParalaxe($('#box-para-e'),0.8);
	fParalaxe($('#box-para-f'),0.5);
	fParalaxe($('#box-para-g'),0.8);
}

var fQ = false;

quizFm = function(){
	
	$('.q-fechar').each(function(){
		$(this).click(function(){
			if($(this).parent().attr('id') == 'resp-errada'){
				$('.active').removeClass('active');
				$('.done').removeClass('done');
				fQ = false;
			}
			
			$(this).parent().fadeOut(400);
		})
	})
	
	$('.q-ans').each(function(){
		$(this).click(function(){
			if(!fQ){
				fQ = true;
				$(this).addClass('active');
				$('.quiz-questions').addClass('done');
				
				var nPos, obj;
				
				if($(this).attr('id') == 'q-resp-c'){
					
					obj = $('#resp-certa')
					obj.fadeIn(400);
					
					pushEvents('FuncMotoras - click Quiz','Correto - ',$(this).attr('id'));
					
				} else {
					obj = $('#resp-errada')
					obj.fadeIn(400);
					
					pushEvents('FuncMotoras - click Quiz','Errado - ',$(this).attr('id'));
				}
				
				if($(window).width() < 941){
				
					if(defPosQ){
						nPos = defPosQ;
					} else {
						nPos = ($('#box-para-d').offset().top - obj.offset().top) + 10;
						defPosQ = nPos;
					}
					obj.css('top',String(nPos) + 'px');
					
					$('body').animate({scrollTop: ($('#box-para-d').offset().top - 0)},100);
				}
				
			}
		})
	});
}

var defPosQ;

fBtMais = function(){
	$('#bt-mais').click(function(){
		$('#box-para-g').stop();
		$('#box-para-g').slideToggle(400);
		if($(this).hasClass('aberto')){
			$('#bt-mais').removeClass('aberto');
			$('#bt-mais').html('Confira outras leis de acessibilidade');
			pushEvents('FuncMotoras - Saiba Mais','Fechar');
		} else {
			$('#bt-mais').addClass('aberto');
			$('#bt-mais').html('Ocultar');
			pushEvents('FuncMotoras - Saiba Mais','Abrir');
			
		}
		
	})
		
}

$(document).ready(function(){
	quizFm();
	fBtMais();
})

$(window).scroll(function(){
	fCallPara();
})