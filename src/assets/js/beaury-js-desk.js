/* daqui */

cDT = function(dateFuture){
	
	var delta = Math.abs(dateFuture - Date.now()) / 1000;
	var days = Math.floor(delta / 86400);
	delta -= days * 86400;
	var hours = Math.floor(delta / 3600) % 24;
	delta -= hours * 3600;
	var minutes = Math.floor(delta / 60) % 60;
	delta -= minutes * 60;
	var seconds = delta % 60;
	
	var showHours = hours + (days*24);
	if(showHours < 10){
		showHours = '0' + String(showHours);
	}
	var showMinutes = minutes;
	if(showMinutes < 10){
		showMinutes = '0' + String(showMinutes);
	}
	var showSeconds = seconds.toFixed(0);
	if(showSeconds < 10){
		showSeconds = '0' + String(showSeconds);
	} else if(showSeconds == 60){
		showSeconds = '00';
	}
	
	if(Date.now() > dateFuture){
		showHours = "00";
		showMinutes = "00";
		showSeconds = "00";
	}
	
	$('.js-t-h').each(function(){
		$(this).html(String(showHours));
	})
	$('.js-t-m').each(function(){
		$(this).html(String(showMinutes));
	})
	$('.js-t-s').each(function(){
		$(this).html(String(showSeconds));
	})
	//console.log(days,hours,minutes,Number(seconds.toFixed(0)));	
}

vCImg = function(){
	
	/* Preparação do doc */
	
	var fontBig = 85;
	var fontSmall = 46;
	var lineS = fontBig * 1.3;
	var mTop = '83px'
	
	$('head').append('<style type="text/css">.font-new{line-height:37px;clear:both;width:100%;text-align:left;font-size:32px;font-family:"Lato";font-weight:700;color:#fff;}.b-full-c-bf{display:block;position:absolute;width:50%;height:100%;top:0px;right:0px;text-align:center;}.c-cont{margin:' + mTop + ' auto 0px;display:table;}.f-b{float:left;font-weight:700;font-size:' + fontBig + 'px;font-family:"Lato",sans-serif;line-height:' + fontBig + 'px;color:#fff;}.f-s{float:left;font-weight:300;font-size:' + fontSmall + 'px;font-family:"Lato",sans-serif;line-height:' + lineS + 'px;color:#fff;margin-right:2px;}</style>');
	var contC = '<a class="b-full-c-bf"><div class="c-cont"><div class="font-new">Faltam:</div> <div class="f-b js-t-h">00</div><div class="f-s">h:</div><div class="f-b js-t-m">00</div><div class="f-s">m:</div><div class="f-b js-t-s">00</div><div class="f-s">s</div></div></a>';
	/* fim prepar doc */

	var obj = $('.countdown');
	
	obj.css({'position':'relative'});
	obj.append(contC);
	
	
	var endTime = Date.parse("25-Nov-2016 23:59:59");
	intCount = setInterval(function(){
		cDT(endTime);
	},1000)
}

callC = function(){
	if($('.countdown').length > 0){
		vCImg();
	} else {
		setTimeout(function(){
			callC();
		},200)
	}
}

$(document).ready(function(){
	callC();
})