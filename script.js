if (document.getElementById("começar")) {
   

    function mostrarQuiz() {
        document.getElementById("quiz").style.display = "block";
    }
     document.getElementById("começar").onclick = mostrarQuiz;
}


if(document.getElementById("radio1")){
    let count = 1;
    document.getElementById("radio1").checked = true;
    setInterval ( function(){
        nextImage(); 
    }, 2000)

    function nextImage(){
        count++;
        if(count > 4 ){
            count = 1;
        }
        document.getElementById("radio"+count).checked = true;
    }
}

function gera_calendario(ano) {
        var dias_semana = new Array('Dom', 'Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab');
        var meses_ano = new Array('Janeiro', 'Fevereiro', 'Março', 'Abril', 'Maio', 'Junho', 'Julho', 'Agosto', 'Setembro', 'Outubro', 'Novembro', 'Dezembro');
        var qtde_dias_mes = new Array(31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31);
        var calendario = new Date();
        var num_dias_semana = 7;
        var cal;
        var ano = calendario.getFullYear();
        var mes = calendario.getMonth();
        var dia_hoje = calendario.getDate();
        var TR_start = '<TR>';
        var TR_end = '</TR>';
        var TD_start = '<TD BORDER=0 WIDTH=30><CENTER>';
        var TD_end = '</CENTER></TD>';
        var red_start = '<TD BORDER=1 WIDTH=30 BGCOLOR=df121d ALIGN=CENTER>';
        var red_end = '</TD>';

        if ((ano % 4 == 0) && ((ano % 100 != 0) || (ano % 400 == 0)))
            qtde_dias_mes[1] = 29;

        cal = '';

        cal += '<div class="row">' + '<div class="col">';

        calendario.setDate(1);
        calendario.setMonth(mes);
        calendario.setUTCFullYear(ano);

        cal += '<TABLE BORDER=1><TR><TD><TABLE BORDER=0 CELLSPACING=5>' + TR_start;
        cal += '<TD COLSPAN="' + num_dias_semana + '" BGCOLOR="df121d"><CENTER><B>';
        cal += meses_ano[mes] + '   ' + ano + '</B>' + TD_end + TR_end;
        cal += TR_start;

        for (i = 0; i < num_dias_semana; i++)
            cal += TD_start + '<B>' + dias_semana[i] + '</B>' + TD_end;
        cal += TD_end + TR_end;

        cal += TR_start;
        dia = 0;
        let j = 1;
        for (i = 0; i < calendario.getDay(); i++) {
            cal += TD_start + '  ' + TD_end;
            dia++;
        }
        for (i = 1; i <= qtde_dias_mes[mes]; i++) {
            if (dia == 0)
                cal += TR_start;
            if (i == dia_hoje)
                cal += red_start + i + red_end;
            else
                cal += TD_start + i + TD_end;
            dia++;
            if (dia == num_dias_semana) {
                cal += TR_end;
                dia = 0;
            }
            j++;
        }
        cal += '</TABLE></TABLE></div>';
        document.getElementById('calendario').innerHTML = cal;
    }


if(document.getElementById("calendario")){
    
    gera_calendario();

}

if(document.getElementById("livro-do-brigadeiro")){
    

    function mostrarLivro1(){
        document.getElementById("livro-do-brigadeiro").src= "./fotos/livro2.jpg"
    }

    function mostrarLivro2(){
        document.getElementById("livro-do-brigadeiro").src= "./fotos/livro1.jpeg"
    
    }
    document.getElementById("livro-do-brigadeiro").onmouseover = mostrarLivro1;
    document.getElementById("livro-do-brigadeiro").onmouseout = mostrarLivro2;
    
}

const enviar = document.getElementById("enviar");
const leite = document.getElementById("leite");
const trufa = document.getElementById("trufa");
const cinquenta = document.getElementById("cinquenta");
const h1 = document.getElementById("h1-resultado");
const comentario = document.getElementById("comentario");
const acertosQuiz = document.getElementById("acertos");
const errosQuiz = document.getElementById("erros");
const status = document.getElementById("status");
const dez = document.getElementById("dez");
const diferente = document.getElementById("diferente");
const opcao1 = document.getElementById("opcao1");
const opcao3 = document.getElementById("opcao3");
const opcao6 = document.getElementById("opcao6");
const campanha = document.getElementById("campanha");
const resultado = document.getElementById("resultado");

if(enviar){
    function mostrarResultado(){
        event.preventDefault();
        if(!document.querySelector("form").checkValidity()){
            window.alert("Responda todas as questões antes de enviar");
        }
        else{
            let acertos = 0;
        let erros = 0;
        
        acertos+= leite.checked ? 1 : 0;
        erros+= leite.checked ? 0: 1;

        acertos+= trufa.checked ? 1 : 0;
        erros+= trufa.checked ? 0: 1;

        acertos+= cinquenta.checked ? 1 : 0;
        erros+= cinquenta.checked ? 0: 1;

        acertos+= dez.checked ? 1 : 0;
        erros+= dez.checked ? 0: 1;

        acertos+= diferente.checked ? 1 : 0;
        erros+= diferente.checked ? 0: 1;

        acertos+= opcao1.checked ? 1 : 0;
        erros+= opcao1.checked ? 0: 1;

        acertos+= opcao3.checked ? 1 : 0;
        erros+= opcao3.checked ? 0: 1;

        acertos+= opcao6.checked ? 1 : 0;
        erros+= opcao6.checked ? 0: 1;

        acertos+= campanha.checked ? 1 : 0;
        erros+= campanha.checked ? 0: 1;

        if(acertos <= 4){
            h1.textContent = "Obrigado por participar!";
            comentario.textContent="Você não sabe muito sobre a gastronomia do brigadeiro, mas certamente gosta tanto do doce que decidiu fazer esse quiz.";
            acertosQuiz.textContent = acertos;
            errosQuiz.textContent = erros;
        }
        else if(acertos > 4 && acertos < 8){
            h1.textContent = "Parabéns!";
            comentario.textContent="Com o seu conhecimento sobre brigadeiros, você é capaz de fazê-los de diversas formas e no momento que você quiser";
            acertosQuiz.textContent = acertos;
            errosQuiz.textContent = erros;
            status.textContent = "Status: Chefe da Brigaderia";
        }
        else{
            h1.textContent = "Uau, incrível!";
            comentario.textContent="Devido a sua alta pontuação, é óbvio que você pode ser chamado de especialista de brigadeiros.";
            acertosQuiz.textContent = acertos;
            errosQuiz.textContent = erros;
            status.textContent = "Status: Gênio do Brigadeiro";
        }
        enviar.style.display = "none";
        resultado.style.display = "block";
        }
        
    }
    
    enviar.addEventListener("click", mostrarResultado);

    document.getElementById("reiniciar").onclick = function(){
        window.location.reload();
    } 

    
}

const cards = document.querySelectorAll('.carta');
let cartaVirou = false;
let bloqueio = false;
let primeiraCarta, segundaCarta;
function virarCarta() {
    if(bloqueio) return;
    if (this === primeiraCarta) return;
    this.classList.add('flip');
    if (!cartaVirou) {
        cartaVirou = true;
        primeiraCarta = this;
        return;
    }
    
segundaCarta = this;


checarPorPar();

}

 function checarPorPar() {
   if (primeiraCarta.dataset.framework === segundaCarta.dataset.framework) {
     desativarCartas();
     return;
   }

   desvirarCartas();
 }

 function desativarCartas() {
   primeiraCarta.removeEventListener('click', virarCarta);
   segundaCarta.removeEventListener('click', virarCarta);
    reset();
}

 function desvirarCartas() {
    bloqueio = true;
   setTimeout(() => {
     primeiraCarta.classList.remove('flip');
     segundaCarta.classList.remove('flip');
     reset();
   }, 1500);
 }

 function reset(){
    [cartaVirou, bloqueio] = [false, false];
    [primeiraCarta, segundaCarta] = [null,null];
 }

 (function shuffle() {
   cards.forEach(card => {
     let ramdomPos = Math.floor(Math.random() * 12);
     card.style.order = ramdomPos;
   });
 })();

cards.forEach(card => card.addEventListener('click', virarCarta));









