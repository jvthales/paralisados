var mMov = false;

fMenuMobile = function(){
	
	$('#shadow-menu').click(function(){
		if(!mMov){
			fFechaMenu();
		}
	})
	$('#act-menu').click(function(){
		if(!mMov){
			mMov = true;
			if(!$('#act-menu').hasClass('open')){
				fAbreMenu();
			} else {	
				fFechaMenu();
			}
		}
	})
	
}

fAbreMenu = function(){
	var posXN = $('body').scrollTop();
	$('body').css('position','fixed');
	$('body').css('top',String(posXN * -1) + 'px');
	$('body').css('overflow','hidden');
	$('#shadow-menu').stop();
	$('#shadow-menu').fadeIn(400);
	$('#menu').stop();
	$('#act-menu').addClass('open');
	$('#menu').slideDown(400,function(){
		
		mMov = false;
	})
}

fFechaMenu = function(){
	$('#act-menu').removeClass('open');
	var posXN = Number($('body').css('top').split('px')[0]) * -1;
	$('body').css('top','0px');
	$('body').css('position','relative');
	$('body').css('overflow','auto');
	$('body').scrollTop(posXN);
	$('#shadow-menu').stop();
	$('#shadow-menu').fadeOut(400);
	$('#menu').stop();
	$('#menu').slideUp(400,function(){
		mMov = false;
	})
	
}

var scroll;

fParalaxe = function(obj,razao){
	
	var	posBox = obj.offset().top,
		z = razao, //razao de movimento do bg
		tNow;
		
	if((scroll - obj.offset().top) + $(window).height() > 0){
		
		tNow = Number(scroll - posBox) * z;
		obj.css('background-position','50% ' + tNow + 'px');
		
	}
	
}

fHeader = function(){
	if($(window).width() > 1099){
		if($(window).scrollTop() > 27){
			$('#header').addClass('fixed');
		} else {
			$('#header').removeClass('fixed');
		}
	}
}

fFadeF = function(){
	$('.foto-frente').each(function(){
		$(this).mouseenter(function(){
			$(this).children('img').stop();
			$(this).children('img').animate({opacity:0},400);
		}).mouseleave(function(){
			$(this).children('img').stop();
			$(this).children('img').animate({opacity:1},400);
		}).click(function(){
			if($(this).children('img').css('opacity') == 0){
				$(this).children('img').stop();
				$(this).children('img').animate({opacity:1},400);
			} else {
				$(this).children('img').stop();
				$(this).children('img').animate({opacity:0},400);
			}
		})
	})	
}

showLoading = function(obj,type){
	if(!type){
		type = '<div class="loading"></div>';
	} else {
		type = '<div class="loading loading-b"></div>';
	}
	$(obj).append(type);
}

removeLoading = function(){
	$('.loading').each(function(){
		
		$(this).remove();
	})
}

pushEvents = function(category,action,label,value){

	dataLayer.push({
        'event':'virtualPageEvent',
        'eventCategory': category,
        'eventAction': action,
		'eventLabel': label,
		'eventValue': value
	});

}

bounceTime = function(){
	
	setTimeout(function(){
		pushEvents('Permaneceu',document.location.pathname);
	},30000)
	
}

clicksMenu = function(){
	
	$('#menu a').click(function(){
		pushEvents('ClickMenu','Foi para: ' + $(this).attr('href'),'Estava: ' + document.location.pathname);
	})
	
	$('.mail-footer').click(function(){
		pushEvents('ContatoRodape',document.location.pathname);
	})
	
	$(document).on('click','#tarj-brasileiros .fb-share-button',function(){
		pushEvents('Facebook','header',document.location.pathname);
	})
	
	$(document).on('click','#footer .fb-share-button',function(){
		pushEvents('Facebook','footer',document.location.pathname);
	})
}

setCookie = function(cname, cvalue, exdays) {
    var d = new Date();
    d.setTime(d.getTime() + (exdays*24*60*60*1000));
    var expires = "expires="+d.toUTCString();
    document.cookie = cname + "=" + cvalue + "; " + expires;
}

getCookie = function(name) {
    var cVal = "; " + document.cookie;
    var parts = cVal.split("; " + name + "=");
    if (parts.length == 2) return parts.pop().split(";").shift();
}


$(document).ready(function(){
	fMenuMobile();
	fFadeF();
	bounceTime();
	clicksMenu();
})

$(window).resize(function(){
	
	if($(window).width() > 1099){
		$('#menu').show();
	} else {
		if($('#act-menu').hasClass('open')){
			//fFechaMenu();
		} else {
			$('#menu').hide();
		}
	}
})

$(window).scroll(function(){
	fHeader();
})