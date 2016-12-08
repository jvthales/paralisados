fCallPara = function(){
	scroll = $(window).scrollTop();
	
	fParalaxe($('#box-para-a'),0.8);
	fParalaxe($('#box-para-c'),0.8);
	fParalaxe($('#box-para-e'),0.8);
	fParalaxe($('#box-para-f'),0.8);
	fParalaxe($('#box-para-i'),0.8);
	fParalaxe($('#box-para-j'),0.8);
	
}


fDefMap = function(){
	$('.pin-map').click(function(){
		
		$('#click-hand').fadeOut(300);
		
		var idN = $(this).attr('id'),
			videoNow,
			doub = false,
			swipe = false;
			
		pushEvents('Intelecto - click mapa',idN);
		
		switch(idN){
			case 'uni-ung':
				videoNow = 'https://www.youtube.com/embed/Bfyk99jHkPQ';
			break
			case 'uni-casper':
				videoNow = 'https://www.youtube.com/embed/VSYklQ4BXjs';
				videoNowB= 'https://www.youtube.com/embed/T917EBC_Fp0';
				doub = true;
			break
			case 'uni-anhembi':
				videoNow = 'https://www.youtube.com/embed/5dHEjPFTPG0';
				
			break
			case 'uni-estacio':
				videoNow = 'https://www.youtube.com/embed/1ox7Vlkt-Ik';
				swipe = true;
			break
			case 'uni-metodista':
				videoNow = 'https://www.youtube.com/embed/49YSOnmpBMA';
				swipe = true;
			break
			default:
				videoNow = 'https://www.youtube.com/embed/Bfyk99jHkPQ';
			break
		
		}
		 
		var objV = '<div class="box-clip"> <div class="box-margin"> <div class="box-table t-full"> <iframe src="' + videoNow + '" frameborder="0" allowfullscreen="allowfullscreen"></iframe> </div> </div> </div>';
		$('.shadow-map').fadeIn(300);
		$('#holder-map').append(objV);
		
		if(!doub){
			//getYouTube();
			//onYouTubeIframeAPIReady();
		}
		
		if($(window).width() > 1099){
			$('.box-clip').css({
				'left':$(this).css('left'),
				'top':(!swipe) ? String(Number($(this).css('top').split('px')[0]) + 32) + 'px' : String(Number($(this).css('top').split('px')[0]) - (96 + $('.box-clip').height())) + 'px'
			});
		} 
		
		if(doub){
			var objVb = '<div class="box-clip clip-b"> <div class="box-margin"> <div class="box-table t-full"> <iframe src="' + videoNowB + '" frameborder="0" allowfullscreen="allowfullscreen"></iframe> </div> </div> </div>';
			$('#holder-map').append(objVb);
			
			//getYouTube();
			//onYouTubeIframeAPIReady();
			
			if($(window).width() > 1099){
				$('.clip-b').css({
					'left':$(this).css('left'),
					'top':String(Number($(this).css('top').split('px')[0]) - (96 + $('.box-clip').height())) + 'px'
				});
			} else {
				$('.box-clip').css({
					'top': '70px'
				});
				$('.clip-b').css({
					'top':String(Number($(this).css('top').split('px')[0]) - ((($(window).width() + 80) / 7) + $('.box-clip').height())) + 'px'
				});
			}
		}
		
		var w = String(Number($('.box-clip').css('width').split('px')[0]) - 30),
			h = String(Number(w * 0.54));
		$('.box-clip').each(function(){
			$(this).find('iframe').attr('width',w);
			$(this).find('iframe').attr('height',h);
		})
		
	})
	
	$('.shadow-map').click(function(){
		$(this).fadeOut(300);
		$('.box-clip').each(function(){
			$(this).remove();
		})
		
		$('#box-para-d .box-video').html('<iframe src="https://www.youtube.com/embed/fLqKYVfGKmw?enablejsapi=1" frameborder="0" height="400" allowfullscreen="allowfullscreen"></iframe>');
		getYouTube();
		onYouTubeIframeAPIReady();
		
		
	})
}

fGetEnq = function(val){
	
	var respN;
	
	showLoading('#box-para-h');
	
	if(val == 'resp-enq-a'){
		respN = 'yes';
	} else {
		respN = 'no';
	}
	
	pushEvents('Intelecto - enquete',respN);
	
	var settings = {
		"async": true,
		"crossDomain": true,
		"url": "https://nl327nv8yi.execute-api.us-west-2.amazonaws.com/prod/api/survey",
		"method": "POST",
		"headers": {
			"content-type": "application/json"
		},
		"processData": false,
		"data": JSON.stringify({"answer":respN})
	}

	$.ajax(settings).done(function (response) {
		
		setCookie('surv','done',1);
		
		var respA = response.yes,
			respB = response.no,
			contA = ((respA * 100) / (respA + respB)),
			contB = ((respB * 100) / (respA + respB));
			
		
		$('#resp-enq-a .progress').animate({
			'width': String(contA) + '%'
		},400);
		
		$('#resp-enq-b .progress').animate({
			'width': String(contB) + '%'
		},400);
		
		$('#resp-enq-a .txt-resp').html(String(contA.toFixed(1)) + '%');
		$('#resp-enq-b .txt-resp').html(String(contB.toFixed(1)) + '%');	
		
		removeLoading();
		$('.hidden-resp').animate({opacity:1},400)
		

	});

	
}

fClickEnq = function(){
	$('.option-enq').click(function(){
		if(!$(this).closest('.sider-text').hasClass('done')){
			$(this).find('.icon-resp').addClass('ticked');
			$(this).closest('.sider-text').addClass('done');
			
			fGetEnq($(this).attr('id'));
		}
	})
}

pergSurv = function(){
	if(getCookie('surv')){
		
		showLoading('#box-para-h');
		
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://nl327nv8yi.execute-api.us-west-2.amazonaws.com/prod/api/survey",
			"method": "POST",
			"headers": {
				"content-type": "application/json"
			},
			"processData": false,
			"data": JSON.stringify({"answer":null})
		}

		$.ajax(settings).done(function (response) {
			
			setCookie('surv','done',1);
			
			var respA = response.yes,
				respB = response.no,
				contA = ((respA * 100) / (respA + respB)),
				contB = ((respB * 100) / (respA + respB));
				
			
			$('#resp-enq-a .progress').animate({
				'width': String(contA) + '%'
			},400);
			
			$('#resp-enq-b .progress').animate({
				'width': String(contB) + '%'
			},400);
			
			$('#resp-enq-a .txt-resp').html(String(contA.toFixed(1)) + '%');
			$('#resp-enq-b .txt-resp').html(String(contB.toFixed(1)) + '%');	
			
			removeLoading();
			$('.hidden-resp').animate({opacity:1},400)

		});
	}
};


$(document).ready(function(){
	fClickEnq();
	fDefMap();
	pergSurv();
})

$(window).scroll(function(){
	fCallPara();
})