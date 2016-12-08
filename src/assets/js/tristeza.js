fCallPara = function(){
	scroll = $(window).scrollTop();
	
	fParalaxe($('#box-para-a'),0.8);
	fParalaxe($('#box-para-e'),0.8);
	
}

var fQ = true,
	pgAgora = 1,
	tPerg = 5,
	cP = 0,
	pergA = Array(
		'Você já esteve em contato com uma pessoa com deficiência?',
		'Sim, sou bastante próximo de uma pessoa com deficiência#10',
		'Sim, mas nunca tive oportunidade de ter uma conversa longa#8',
		'Não, mas porque nunca tive oportunidade#4',
		'Não, porque não saberia como iniciar uma conversa#0'
	),
	pergB = Array(
		'Quando você vê uma pessoa com deficiência no metrô ou no ônibus, você:',
		'Imediatamente levanta e oferece seu lugar, independente de ser preferencial#10',
		'Só oferece seu lugar se estiver sentado num assento preferencial#4',
		'Espera que alguma outra pessoa ofereça, se não acontecer, você oferece#8',
		'Espera que pessoas sentadas em assentos preferenciais se ofereçam#4'
	),
	pergC = Array(
		'Ao ver uma pessoa com deficiência visual no metrô, você:',
		'Não oferece ajuda, pois não sabe a melhor forma de abordá-la#6',
		'Chama algum funcionário para ajudá-la#8',
		'Oferece ajuda, pois já sabe como fazer#10',
		'Segue em frente, pois se ela precisar de ajuda, pedirá#0'
	),
	pergD = Array(
		'Você contrataria uma pessoa com deficiência?',
		'Sim, contanto que não tenha uma deficiência muito grave#5',
		'Sim, mesmo que isso incluísse gastos a mais (como reformas e/ou um atendente pessoal)#10',
		'Sim, mas somente em cargos mais baixos#5',
		'Sim, mas somente por causa das cotas#0'
	),
	pergE = Array(
		'Uma pessoa com deficiência começa a estudar na sua sala de aula, você:',
		'Primeiro observa como ela se comunica e daí tenta conversar#8',
		'Vai até ela e tenta se comunicar#10',
		'Conversa, contanto que ela consiga falar bem#4',
		'Prefere evitar ser inconveniente e fica na sua#0'
	),
	aPerguntas = Array(pergA,pergB,pergC,pergD,pergE);

	
preparaPg = function(i){
	
	$('#pergunta').html(i + ' - ' + aPerguntas[i - 1][0]);
	$('#pg-atual').html(i);
	$('.q-ans').each(function(j){
		var pref;
		switch(j){
			case 0:
				pref = 'A';
			break
			case 1:
				pref = 'B';
			break
			case 2:
				pref = 'C';
			break
			case 3:
				pref = 'D';
			break
		}
		$(this).html('<span></span>' + pref + ' - ' + aPerguntas[i - 1][j + 1].split('#')[0])
	})
	fQ = false;
	
}

quizFm = function(){
	
	pgAgora = 1;
	$('#total-perg').html(tPerg);
	preparaPg(pgAgora);
	
	$('.q-ans').click(function(){
		if(!fQ){
			fQ = true;
			$(this).addClass('active');
			$('.quiz-questions').addClass('done');
			
			pushEvents('Tristeza - click Quiz','Perg ' + pgAgora,$(this).attr('id'));
			
			var rNow;
			
			switch($(this).attr('id')){
				case 'q-resp-a':
					rNow = 1;
				break
				case 'q-resp-b':
					rNow = 2;
				break
				case 'q-resp-c':
					rNow = 3;
				break
				case 'q-resp-d':
					rNow = 4;
				break
			}
			
			cP += Number(aPerguntas[pgAgora - 1][rNow].split('#')[1]);
			
			setTimeout(function(){
				pgAgora++;
				if(pgAgora <= tPerg){
					preparaPg(pgAgora);
					$('.quiz-questions').removeClass('done');
					$('.q-ans').each(function(){
						$(this).removeClass('active');
					})
				} else {
					fimQuiz();
				}
			},800);
		}
	})
	
	
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
	
}

fimQuiz = function(){

	var obj,
	respNow;
	
	if(cP < 21){
		obj = $('#resp-ruim');
		respNow = 'Ruim';
	} else if(cP < 32){
		obj = $('#resp-int');
		respNow = 'Moderada';
	} else {
		obj = $('#resp-boa');
		respNow = 'Boa';
	}
	
	pushEvents('Tristeza - resp Quiz',respNow);
	
	obj.fadeIn(400);
	
}

var defPosQ;

$(document).ready(function(){
	quizFm();
})

$(window).scroll(function(){
	fCallPara();
})