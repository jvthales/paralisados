fCallPara = function(){
	scroll = $(window).scrollTop();
	fParalaxe($('#box-para-a'),0.8);
	fParalaxe($('#box-para-b'),0.8);
	//fParalaxe($('#box-para-d'),0.5);
	fParalaxe($('#box-para-e'),0.8);
	fParalaxe($('#box-para-f'),0.8);
	fParalaxe($('#box-para-g'),0.8);
	//fParalaxe($('#box-para-h'),0.8);
	fParalaxe($('#box-para-i'),0.8);
	//fParalaxe($('#box-para-j'),0.8);
	fParalaxe($('#box-para-k'),0.8);
	//fParalaxe($('#box-para-l'),0.8);
}

cSaibaMais = function(){
	$('#bt-mais').click(function(){
		
		if($('#box-para-m').is(':visible')){
			$('#bt-mais').html('Saiba mais');
			pushEvents('Social - Saiba Mais','Fechar');
		} else {
			$('#bt-mais').html('Ocultar');
			pushEvents('Social - Saiba Mais','Abrir');
		}
		
		$('#box-para-m').stop();
		$('#box-para-m').slideToggle(400);
	})
}

fJogo = function(){
	var ptsJogo = 0;
	var jogoGanho = false;
	
	var objJogo = {
		'pal-arquitetonica':'Barreira Arquitetônica#Obstáculos físicos que, de alguma forma, impeçam a livre e autônoma circulação das pessoas com deficiência. Desníveis, passagens estreitas, falta de corrimãos em escadas, equipamentos que bloqueiam o caminho – como bebedouros e telefones públicos – e pouca iluminação para quem tem baixa visão também entram na lista. É preciso facilitar o acesso para que exista acessibilidade arquitetônica.',
		'pal-comunicacional':'Barreira Comunicacional#Falta de recursos apropriados que facilitem a comunicação de pessoas com deficiência, sejam elas cegas, surdas ou tenham dificuldade para escrever ou digitar. São exemplos desses recursos o braile e a língua brasileira de sinais (Libras). O uso das tecnologias assistivas e tecnologias de informação e comunicação são recomendados para que exista acessibilidade comunicacional.',
		'pal-metodologica':'Barreira Metodológica#Métodos e técnicas de ensino que excluam ou impossibilitem que qualquer dos estudantes acompanhe as aulas. Os métodos de ensino e de aprendizagem devem adotar a teoria das inteligências múltiplas, substituindo o tradicional conceito de inteligência única, para que exista a acessibilidade metodológica.',
		'pal-instrumental':'Barreira Instrumental#Ferramentas e utensílios que impedem ou dificultam o seu uso por pessoas com deficiência. Para que ocorra a acessibilidade instrumental, existem soluções de adaptação razoável e tecnologias assistivas. No ambiente escolar e universitário, procedimentos específicos para realizar provas de avaliação (como tempo adicional, por exemplo), ledores, formatos alternativos de comunicação escrita e softwares assistivos são exemplos de recursos que podem ajudar.',
		'pal-programatica':'Barreira Programática#Barreiras invisíveis que estão inseridas em políticas como leis, normas de serviço, política das organizações, etc. Para que exista acessibilidade programática nas universidades, há necessidade de revisar e atualizar todos os textos normativos para que nenhum deles impeça o acesso ou a permanência de alunos com deficiência.',
		'pal-atitudinal':'Barreira Atitudinal#Esta barreira é a mais difícil de ser combatida. Trata-se de algo afetivo e subjetivo que envolve o preconceito, desinformação ou informações errôneas por parte da sociedade. Para que exista a acessibilidade atitudinal torna-se necessário realizar programas de sensibilização e de conscientização com o intuito de promover a erradicação de preconceitos e estereótipos.',
		'pal-natural':'Barreira Natural#A própria natureza constitui uma barreira a pessoas com deficiência. Áreas de vegetação ou mesmo rios podem servir de obstáculo à circulação de pessoas cadeirantes, por exemplo. Para que a acessibilidade natural ocorra é preciso inserir soluções em ambientes criados pela natureza, porém sem causar nenhum impacto no ecossistema.'
	}
	
	$('#fechar-resp').click(function(){
		$('#box-resp').fadeOut(300,function(){
		
			if(!jogoGanho && ptsJogo == 7){
				jogoGanho = true;
				$('#resp-palavra').html('Parabéns!!!');
				$('#resp-exp').html('Você foi uma das poucas pessoas que acertaram todos os principais obstáculos que impedem que a inclusão social ocorra de forma plena!');
				$('#box-resp').stop();
				$('#box-resp').fadeIn(300);
				
				pushEvents('Social - Jogo','Acertou as 7');
			}
		});
		
	})
	
	$('.palavra-game').click(function(){
		if($(this).attr('id') == 'pal-arquitetonica' || $(this).attr('id') == 'pal-comunicacional' || $(this).attr('id') == 'pal-metodologica' || $(this).attr('id') == 'pal-programatica' || $(this).attr('id') == 'pal-metodologica' || $(this).attr('id') == 'pal-instrumental' || $(this).attr('id') == 'pal-atitudinal' || $(this).attr('id') == 'pal-natural'){
			if(!$(this).children('.j-acerto').is(':visible')){
				ptsJogo++;
				if(ptsJogo == 7){
					$('#pos-game').fadeOut(400);
				}
				$('#qt-acerto').html(ptsJogo);
			}
			$(this).children('.j-acerto').fadeIn(400);
			$('#resp-palavra').html(objJogo[$(this).attr('id')].split('#')[0]);
			$('#resp-exp').html(objJogo[$(this).attr('id')].split('#')[1]);
			$('#box-resp').fadeIn(300);
			pushEvents('Social - Jogo','Clicou em palavra','correta - ' + $(this).attr('id'));
		} else {
			$(this).children('.j-erro').fadeIn(100);
			pushEvents('Social - Jogo','Clicou em palavra','errada - ' + $(this).attr('id'));
		}
		
	})
	
	$('#pos-game').click(function(){
		if(ptsJogo < 7){
			ptsJogo = 7;
			jogoGanho = true;
			pushEvents('Social - Jogo','Clicou em "ver resposta"');
			$('#pos-game').fadeOut(400);
			$('#qt-acerto').html(ptsJogo);
			$('.palavra-game').each(function(){
				if($(this).attr('id') == 'pal-arquitetonica' || $(this).attr('id') == 'pal-comunicacional' || $(this).attr('id') == 'pal-metodologica' || $(this).attr('id') == 'pal-programatica' || $(this).attr('id') == 'pal-metodologica' || $(this).attr('id') == 'pal-instrumental' || $(this).attr('id') == 'pal-atitudinal' || $(this).attr('id') == 'pal-natural'){
					$(this).children('.j-acerto').fadeIn(400);
				} 
			})
		}
	});
	
}

$(document).ready(function(){
	cSaibaMais();
	fJogo();
})

$(window).scroll(function(){
	fCallPara();
})