window.addEventListener('load', start);


var globalNumero = null;

function start() {
  console.log('Página carregada')
  rangeOnChange();
}

function rangeOnChange(){
  var rangeNumeral = document.querySelector('#inputNumber'); 
  rangeNumeral.addEventListener('change', getValue);
}

function getValue(event){
  var numAtual = document.querySelector('#inputCurrentNumber');
  var rangeValue = event.target.value;

  numAtual.value = rangeValue;
  numerTranslate(numAtual.value);
}

function numerTranslate(n){
  var inputNumberInWords = document.querySelector('#inputNumberInWords');
  var unidades=["Zero", "Um", "Dois", "Três", "Quatro", "Cinco", "Seis", "Sete", "Oito", "Nove"];
  var especiais=["Dez","Onze", "Doze", "Treze", "Quatorze", "Quinze", "Dezesseis", "Dezessete", "Dezoito", "Dezenove"]; 
  var dezenas=["Vinte", "Trinta", "Quarenta", "Cinquenta", "Sessenta", "Setenta", "Oitenta", "Noventa"];
  var centenas=["Cem", "Duzentos", "Trezentos", "Quatrocentos", "Quinhetos", "Seiscentos","Setescentos","Oitocentos", "Novecentos"];
  
  //Valores com 1 algarismo
  if(n.length === 1) {
    //Imprimir unidadades
    inputNumberInWords.value = unidades[parseInt(n[0])];
  }	

  //Valores com 2 algarismos
  else if(n.length === 2) {
    //Especiais
    if((n[0]=='1') && (n[1]=='0'||n[1]=='1'||n[1]=='2'||n[1]=='3'||n[1]=='4'||n[1]=='5'||n[1]=='6'||n[1]=='7'||n[1]=='8'||n[1]=='9')) {
      inputNumberInWords.value = especiais[parseInt(n[1])];
    }
    
    //Dezenas
    else if((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && n[1]=='0') {
      inputNumberInWords.value = dezenas[parseInt(n[0]-2)];
    }

    //Dezenas compostas
    else {
      inputNumberInWords.value = dezenas[parseInt(n[0]-2)]+" e "+unidades[parseInt(n[1])];
    }
  }

  //Valores com 3 algarimos
  else if (n.length === 3) {
    //Centenas inteiras
    if ((n[0]=='1'||n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]=='0' && n[2]=='0')) {
      inputNumberInWords.value = centenas[parseInt(n[0]-1)];
    }

    //Centenas + números especiais
    else if ((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]=='1') && ((n[2]=='1'||n[2]=='2'||n[2]=='3'||n[2]=='4'||n[2]=='5'||n[2]=='6'||n[2]=='7'||n[2]=='8'||n[2]=='9'))) {
      inputNumberInWords.value = centenas[parseInt(n[0]-1)]+" e "+especiais[parseInt(n[2])];
    }

    //Centenas + Nº Compostos
    else if ((n[0]=='2'||n[0]=='3'||n[0]=='4'||n[0]=='5'||n[0]=='6'||n[0]=='7'||n[0]=='8'||n[0]=='9') && (n[1]!='1')) {
      inputNumberInWords.value = centenas[parseInt(n[0]-1)] +" e  "+unidades[parseInt(n[2])];
    }

    //Cento + Nº Especiais
    else if ((n[0]=='1') && (n[1]=='1') && (n[2]=='1'||n[2]=='2'||n[2]=='3'||n[2]=='4'||n[2]=='5'||n[2]=='6'||n[2]=='7'||n[2]=='8'||n[2]=='9')) {
      inputNumberInWords.value = "Cento e " + especiais[parseInt(n[2])];
    }

    //Cento + Nº Compostos
    else if ((n[0]=='1') && (n[1]!='1') && (n[2]!='0')) {
      inputNumberInWords.value = "Cento e "+unidades[parseInt(n[2])];
    }
  }

}



		