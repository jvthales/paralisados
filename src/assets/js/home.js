var fBrain = false, tW;
defMaxBrain = function(){
	
	if($(window).width() > 1099){
		$('.box-tit').css('display','block');
	} else {
		setTimeout(function(){
			$('.box-tit').slideDown(400);
		},500)
	}
		
	
	if($(window).width() > 1099){
		
		var nW = String(Number($(window).height() * 1.28894));
		if(nW > 1200){
			nW = 1200;
		}
		
		$('#box-cerebro').css('width',/*String(((Number(($(window).height()) * 1.2) - $('#box-cerebro').position().top))*1.28894)*/ nW + 'px');
		
		if($(window).height() < $('#box-cerebro').height() /*(($('#box-cerebro').height() * 1.2) + $('#box-cerebro').position().top)*/){
			fBrain = true;
		}
	}
}

removeOvers = function(){
	$('.pt-cer').each(function(){
		$(this).removeClass('over');
	})
	
	$('.tag-cer').each(function(){
		$(this).removeClass('over');
	})
}

funcBtBrain = function(){
	
	$('.bt-quadrado').each(function(){
		
		$(this).click(function(){
			var idN = '#m-' + $(this).attr('class').split(' ')[2].split('quad-cer-')[1];
			var hrefN = $(idN).attr('href');
			
			pushEvents('ClickCerebro',hrefN);
			
			if($(window).width() > 1099){
				document.location.href = hrefN;
			} else {
				fAtivaHover($(this));
				tW = setTimeout(function(){
					document.location.href = hrefN;					
				},300)
			}
		});
					
		$(this).mouseleave(function(){
			
			removeOvers();
			
		}).mouseenter(function(){
			
			if($(window).width() > 1099){
			
				$('.pt-cer').each(function(){
					$(this).removeClass('over');
				})
				
				$('.tag-cer').each(function(){
					$(this).removeClass('over');
				})
				
				fAtivaHover($(this));
			}
			
		});
		
	});
	
}

fAtivaHover = function(obj){

	var idN = obj.attr('class').split(' ')[2].split('quad-')[1];
	$('#' + idN).addClass('over');
	$('#tag-' + idN).addClass('over');
}

fBtsMenu = function(){
	
	$('.bt-menu').each(function(){
		$(this).mouseenter(function(){
			var idN = $(this).attr('id').split('m-')[1];
			$('#cer-' + idN).addClass('over');
			$('#tag-cer-' + idN).addClass('over');
		}).mouseleave(function(){
			removeOvers();
		});
	})
	
}

fCallPara = function(){
	scroll = $(window).scrollTop();
	fParalaxe($('#cont-cerebro'),0.7);
}

$(document).ready(function(){
	
	defMaxBrain();
	funcBtBrain();
	fBtsMenu();
})

$(window).resize(function(){
	defMaxBrain();
})

$(window).scroll(function(){
	fCallPara();
})