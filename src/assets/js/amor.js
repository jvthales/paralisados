fCallPara = function(){
	scroll = $(window).scrollTop();
	
	fParalaxe($('#box-para-a'),0.8);
	fParalaxe($('#box-para-b'),0.8);
	fParalaxe($('#box-para-c'),0.8);
	fParalaxe($('#box-para-d'),0.8);
	fParalaxe($('#box-para-e'),0.8);
	
}

shuffle = function(array) {
	var currentIndex = array.length, temporaryValue, randomIndex;

	// While there remain elements to shuffle...
	while (0 !== currentIndex) {

	// Pick a remaining element...
	randomIndex = Math.floor(Math.random() * currentIndex);
	currentIndex -= 1;

	// And swap it with the current element.
	temporaryValue = array[currentIndex];
		array[currentIndex] = array[randomIndex];
		array[randomIndex] = temporaryValue;
	}

	return array;
}

var fTG = false,
objFotos = {
	"AnaClaraeLauraSantos.jpg":"Ana Clara e Laura Santos",
	"AndreiaeBetrizSilva.jpg":"Andreia e Betriz Silva",
	"AndrieleAgostinieArthur.jpg":"Andriele Agostini e Arthur",
	"AneCarolineeRaphaelReis.jpg":"Ane Caroline e Raphael Reis",
	"AngelicaPereiraeBrunoRenan.jpg":"Angelica Pereira e Bruno Renan",
	"AureaCortazioJoaoVictoreCleverlan.jpg":"Aurea Cortazio, João Victor e Cleverlan",
	"CaroleYagoSouza.jpg":"Carol e Yago Souza",
	"Celiaeevelynlima.jpg":"Celia e Evelyn Lima",
	"CrisFreitaseArthur.jpg":"Cris Freitas e Arthur",
	"CristianeGalvaoeArthur.jpg":"Cristiane Galvão e Arthur",
	"CristinaeLucasDanielNascimento.jpg":"Cristina e Lucas Daniel Nascimento",
	"DaianeeJhonataLima.jpg":"Daiane e Jhonata Lima",
	"DanielRafaeleLudmilaWassano.jpg":"Daniel, Rafael e Ludmila Wassano",
	"DaniyeRayanePimenta.jpg":"Daniy e Rayane Pimenta",
	"DavidRenataMirandaeJoaoVictor.jpg":"David, Renata Miranda e João Victor",
	"ElmaePedroHenriqueVentura.jpg":"Elma e Pedro Henrique Ventura",
	"EmersonJhonataLima.jpg":"Emerson e Jhonata Lima",
	"FabianaRodrigueseHelo.jpg":"Fabiana Rodrigues e Helo",
	"FernandoeLuizFernandoRocha.jpg":"Fernando e Luiz Fernando Rocha",
	"fotoGabrielaAlveseLucasamor.jpg":"Gabriela Alves e Lucas",
	"FranciscaCunhaeFelipe.jpg":"Francisca Cunha e Felipe",
	"GiseleeManuelaAlmeida.jpg":"Gisele e Manuela Almeida",
	"GiseleTrindadeeLuiza.jpg":"Gisele Trindade e Luiza",
	"IsisLohanyeVivian.jpg":"Isis Lohany e Vivian",
	"JaneReginaefamilia.jpg":"Jane Regina e família",
	"JoaoVictoreJesusAzavedo.jpg":"João Victor e Jesus Azevedo",
	"JoseMarcioeYolandaRampinelli.jpg":"José Marcio e Yolanda Rampinelli",
	"JulianaFernandeseAugusto.jpg":"Juliana Fernandes e Augusto",
	"KeniaMagnoeMuriloAzevedoamor.jpg":"Kenia, Magno e Murilo Azevedo",
	"LauraeMuriloColeone.jpg":"Laura e Murilo Coleone",
	"LucaseFelipeSantos.jpg":"Lucas e Felipe Santos",
	"LucianaBastoseJoaoGustavo.jpg":"Luciana Bastos e João Gustavo",
	"ManuelaIsabelaeMarianaMatos.jpg":"Manuela, Isabela e Mariana Matos",
	"Melissa-e-Ryan-Phan.jpg":"Melissa e Ryan Phan",
	"MoniqueFeltrimeRodolfo.jpg":"Monique Feltrim e Rodolfo",
	"NathalyeNatielSabas.jpg":"Nathaly e Natiel Sabas",
	"NubiaeViniciusCarvalho.jpg":"Nubia e Vinicius Carvalho",
	"BrunoeRosemeireAndrade.jpg":"Bruno e Rosemeire Andrade",
	"elisangela.jpg":"Elisangela e Maria Helenise Vasconcelos",
	"FelipeeSandraMicalli.jpg":"Felipe e Sandra Micalli",
	"Personagemfotodjeisonamor.jpg":"Djeison Possamai e família",
	"SandraMaraeVeraLuciaOliveira.jpg":"Sandra Mara e Vera Lucia Oliveira",
	"SylviaeElisabethBonte.jpg":"Sylvia e Elisabeth Bönte",
	"VeridianaeDaniele.jpg":"Veridiana e Daniele Helfstein",
	"PriscilaeKaioMileke.jpg":"Priscila e Kaio Mileke",
	"RosinhaPrimaeLucas.jpg":"Rosinha, Prima e Lucas",
	"SuelleneJorgeSerrat.jpg":"Suellen e Jorge Serrat",
	"TallitaeGabrieldeSa.jpg":"Tallita e Gabriel de Sá",
	"YarahFernandesefamilia.jpg":"Yarah Fernandes e família",
	"BrunaMaria.jpg":"Bruna Maria"
	
},
aFotos = [
	"tb-AnaClaraeLauraSantos.jpg",
	"tb-AndreiaeBetrizSilva.jpg",
	"tb-AndrieleAgostinieArthur.jpg",
	"tb-AneCarolineeRaphaelReis.jpg",
	"tb-AngelicaPereiraeBrunoRenan.jpg",
	"tb-AureaCortazioJoaoVictoreCleverlan.jpg",
	"tb-CaroleYagoSouza.jpg",
	"tb-Celiaeevelynlima.jpg",
	"tb-CrisFreitaseArthur.jpg",
	"tb-CristianeGalvaoeArthur.jpg",
	"tb-CristinaeLucasDanielNascimento.jpg",
	"tb-DaianeeJhonataLima.jpg",
	"tb-DanielRafaeleLudmilaWassano.jpg",
	"tb-DaniyeRayanePimenta.jpg",
	"tb-DavidRenataMirandaeJoaoVictor.jpg",
	"tb-ElmaePedroHenriqueVentura.jpg",
	"tb-EmersonJhonataLima.jpg",
	"tb-FabianaRodrigueseHelo.jpg",
	"tb-FernandoeLuizFernandoRocha.jpg",
	"tb-fotoGabrielaAlveseLucasamor.jpg",
	"tb-FranciscaCunhaeFelipe.jpg",
	"tb-GiseleeManuelaAlmeida.jpg",
	"tb-GiseleTrindadeeLuiza.jpg",
	"tb-IsisLohanyeVivian.jpg",
	"tb-JaneReginaefamilia.jpg",
	"tb-JoaoVictoreJesusAzavedo.jpg",
	"tb-JoseMarcioeYolandaRampinelli.jpg",
	"tb-JulianaFernandeseAugusto.jpg",
	"tb-KeniaMagnoeMuriloAzevedoamor.jpg",
	"tb-LauraeMuriloColeone.jpg",
	"tb-LucaseFelipeSantos.jpg",
	"tb-LucianaBastoseJoaoGustavo.jpg",
	"tb-ManuelaIsabelaeMarianaMatos.jpg",
	"tb-Melissa-e-Ryan-Phan.jpg",
	"tb-MoniqueFeltrimeRodolfo.jpg",
	"tb-NathalyeNatielSabas.jpg",
	"tb-NubiaeViniciusCarvalho.jpg",
	"tb-BrunoeRosemeireAndrade.jpg",
	"tb-elisangela.jpg",
	"tb-FelipeeSandraMicalli.jpg",
	"tb-Personagemfotodjeisonamor.jpg",
	"tb-SandraMaraeVeraLuciaOliveira.jpg",
	"tb-SylviaeElisabethBonte.jpg",
	"tb-VeridianaeDaniele.jpg",
	"tb-PriscilaeKaioMileke.jpg",
	"tb-RosinhaPrimaeLucas.jpg",
	"tb-SuelleneJorgeSerrat.jpg",
	"tb-TallitaeGabrieldeSa.jpg",
	"tb-YarahFernandesefamilia.jpg",
	"tb-BrunaMaria.jpg"
],
fCount = aFotos.length,
cLoad = 0,
qtdFoto,
dir = 'img/galeria/';
aFotos = shuffle(aFotos);
var lEsc = false;

fGalery = function(){
	
	$('#bt-recarregar').click(function(){
		document.location.reload();
	})

	showLoading('#box-galeria-amor');
	if($(document).width() > 1099){
		$('#holder-fotos').attr('style','height: ' + String($(document).width() * 0.125 * 3) + 'px;');
		qtdFoto = 24;
	} else if($(document).width() > 735){
		$('#holder-fotos').attr('style','height: ' + String($(document).width() * 0.166666 * 3) + 'px;');
		qtdFoto = 18;
	} else if($(document).width() > 374){
		$('#holder-fotos').attr('style','height: ' + String($(document).width() * 0.25 * 3) + 'px;');
		qtdFoto = 12;
	} else {
		$('#holder-fotos').attr('style','height: ' + String($(document).width() * 0.50 * 3) + 'px;');
		qtdFoto = 6;
	}
	
	$.each(aFotos, function(i, val) {
        if(qtdFoto > 0){
			qtdFoto--;
			cLoad++;
			var tmpImg = new Image() ;
			tmpImg.src = dir + val;
			tmpImg.onload = function() {
				cLoad--;
				$('#holder-fotos').append('<div class="slide-foto"><div class="full-pink"></div><img src="' + dir + val + '" class="grayscale" alt="" /></div>')
				if(cLoad == 0){
					finalizaLoad();
				}
			}
		}
    });
	
}

finalizaLoad = function(){
	
	$('#holder-fotos').removeAttr('style');
	removeLoading();
	
	$('.slide-foto').mouseenter(function(){
		$(this).children('img').removeClass('grayscale');
		$(this).children('.full-pink').fadeOut(200);
	}).mouseleave(function(){
		$(this).children('img').addClass('grayscale');
		$(this).children('.full-pink').fadeIn(200);
	}).click(function(){
		showLoading('body');
		$('body').prepend('<div class="shadow-full"></div>');
		$('.shadow-full').height($(document).height());
		lEsc = true;
		clickS($('.shadow-full'));
		loadImg($(this).children('img').attr('src').split('tb-')[1]);		
	})	
}

loadImg = function(pic){
	pushEvents('Amor - click galeria',pic);
	var tmpImg = new Image() ;
    tmpImg.src = dir + pic;
    tmpImg.onload = function(){
		removeLoading();
		$('body').append('<div class="box-full-img"> <div class="box-table bord-img"><img src="' + dir + pic + '" alt="" /> <div class="box-leg"><p>' + objFotos[pic] + '</p></div> </div> </div>');
		var posXN = $('body').scrollTop();
		$('.box-full-img').css('top',String(Number(posXN)) + 'px');
		
		lEsc = true;
		clickS($('.box-full-img'));		
    };
}

loadAllTbs = function(){
	var imageLoaded = function() {
        // Run onload code.
    }
    $('#img').each(function() {
        var tmpImg = new Image() ;
        tmpImg.onload = imageLoaded ;
        tmpImg.src = $(this).attr('src');
    });
}

clickS = function(obj){
	obj.click(function(){
		fRemoveItens();
	})
}

fRemoveItens = function(){
	if(!fTG){
		lEsc = false;
		fTG = true;
		$('.box-full-img').fadeOut(400,function(){
			$(this).remove();
		})
		$('.shadow-full').fadeOut(400,function(){
			$(this).remove();
			fTG = false;
		})
	}
}

File.prototype.convertToBase64 = function(callback){
	var reader = new FileReader();
	reader.onload = function(e) {
		callback(e.target.result);
		
		$('#holder-send-thumb').html('<img src="' + e.target.result + '" />');
		if($('#holder-send-thumb img').height() > $('#holder-send-thumb').height()){
			$('#holder-send-thumb img').addClass('h-image');
		}
	};
	
	reader.onerror = function(e) {
		$('#l-foto-send').html('Selecione uma foto...');
		picture = "";
		file_ending = "";
		callback('Ocorreu um erro, tente novamente mais tarde.');
	};        
	reader.readAsDataURL(this);
};

var picture = "",
	description = "",
	file_ending = "";

fGetFotos = function(){
	
    $("#foto-send").on('change',function(){
		var selectedFile = this.files[0];
		
		if(selectedFile.type == 'image/png' || selectedFile.type == 'image/jpeg' || selectedFile.type == 'image/gif'){
			if(selectedFile.size <= 4194304){
				selectedFile.convertToBase64(function(base64){
					$('#l-foto-send').html('Foto selecionada!');
					$('#holder-send-thumb').removeClass('ip-errado');
					picture = base64.split('base64,')[1];
					file_ending = (selectedFile.type).split('/')[1];
					//alert(base64);
				});
			} else {
				alert('Esta imagem excede o limite de 4mb');
			}
		} else {
			alert('A imagem deve estar em formato .jpg, .png ou .gif');
		}
    });
	
	$('#caract-rest').html($('#ta-send').attr('maxlength'));
	
	
	$('#ta-send').keyup(function(){
		$('#caract-rest').html(Number($('#ta-send').attr('maxlength')) - this.value.length);
	}).keydown(function(){
		$(this).removeClass('ip-errado');
	});
	
	$('#i-mail').keydown(function(){
		$(this).removeClass('ip-errado');
	})
	
}

fSendForm = function(){
	
	var picN = picture,
		mailN = $('#i-mail').val().trim(),
		descN = $('#ta-send').val() + ' Email: ' + mailN,
		fileN = file_ending,
		txtN = $('#ta-send').val(),
		obj,
		regexMail = /^([a-zA-Z0-9_.+-])+\@(([a-zA-Z0-9-])+\.)+([a-zA-Z0-9]{2,4})+$/,
		erros = 0;
	
	//email
	obj = $('#i-mail');
	if(mailN == ""){
		obj.addClass('ip-errado');
		obj.attr('placeholder','Digite um e-mail');
		erros++;
	} else if(!regexMail.test(mailN)){
		obj.val('');
		obj.addClass('ip-errado');
		obj.attr('placeholder','Digite um e-mail válido');
		erros++;
	} else {
		obj.removeClass('ip-errado');
	}
	
	//textarea
	obj = $('#ta-send');
	if(txtN == ""){
		obj.addClass('ip-errado');
		obj.attr('placeholder','Digite uma descrição da foto');
		erros++;
	} else {
		obj.removeClass('ip-errado');
	}
	
	//foto
	obj = $('#holder-send-thumb');
	if($('#holder-send-thumb img').length < 1){
		obj.addClass('ip-errado');
		erros++;
	} else {
		obj.removeClass('ip-errado');
	}
	
	if(erros == 0){
		showLoading('#box-send-img');
		
		var settings = {
			"async": true,
			"crossDomain": true,
			"url": "https://nl327nv8yi.execute-api.us-west-2.amazonaws.com/prod/api/picture-upload",
			"method": "POST",
			"headers": {
				"content-type": "application/json"
			},
			"data": JSON.stringify({"picture": picN,"description": descN ,"file_ending": fileN})
		}

		$.ajax(settings).done(function (response) {
			pushEvents('Amor Sender','Envio com sucesso');
			$('.box-alert p').html('Imagem enviada com sucesso!');
			$('.box-alert').show();
			setTimeout(function(){
				$('#ta-send').val('');
				$('#i-mail').val('');
				$('#holder-send-thumb img').remove();
				$('.box-alert').hide();
				removeLoading();
			},5000)
		}).fail(function(){
			pushEvents('Amor Sender','Falha da api');
			$('.box-alert p').html('Ocorreu um problema, tente novamente mais tarde');
			$('.box-alert').show();
			setTimeout(function(){
				$('.box-alert').hide();
				removeLoading();
			},2000)
		});
		
	} else {
		pushEvents('Amor Sender','Formulário incompleto');
	}
	
}

$(document).on('keyup',function(evt) {
    if (lEsc && evt.keyCode == 27) {
		fRemoveItens();
    }
});

$(document).ready(function(){
	fGalery();
	fGetFotos();
})

$(window).scroll(function(){
	fCallPara();
})