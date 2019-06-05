document.getElementById('nombre').style.display='block';
document.getElementById('cuestionario').style.display='none';
document.getElementById('resultados').style.display='none';

function detector() {
}
var puntaje=0;
var progreso=0;
var aprobado;
var pregunta1;
var pregunta2;
var pregunta3;
var pregunta4;
var pregunta5;
var pregunta6;
var pregunta7;
var pregunta8;
var pregunta9;

var contPre1=0;
var contPre2=0;
var contPre3=0;
var contPre4=0;
var contPre5=0;
var contPre6=0;
var contPre7=0;
var contPre8=0;
var contPre9=0;

function update() {
	var element = document.getElementById("myprogressBar");    
	element.style.width = progreso + '%';  
} 

function iniciaTest(){
	var nuevoEst= document.getElementById('nuevoEst');
	document.getElementById('nombreEst').innerHTML=nuevoEst.value;
	document.getElementById('mostrarNombre').style.display='block';
	document.getElementById('nombre').style.display='none';
	document.getElementById('cuestionario').style.display='block';
	document.getElementById('intro').style.display='block';
}
function primerapregunta(){
	document.getElementById('intro').style.display='none';
	document.getElementById('pregunta1').style.display='block';
}
function sig1(){

	if (contPre1==0) {
		var formulario = document.forms[0];
		for (var i = 0; i < formulario.pregunta1.length; i++) {
			if (formulario.pregunta1[i].checked) {
				break;
			}
		}
		if (formulario.pregunta1[i].value==2) {
			this.pregunta1="¡Correcta!";
			this.puntaje+=1;
			document.getElementById('preNav1').style.background="green";
			this.progreso=this.progreso+(100/9);
			update();
		} else{
			this.pregunta1="Incorrecta!";
			this.puntaje+=0;
			document.getElementById('preNav1').style.background="red";
			this.progreso=this.progreso+(100/9);
			update();
		}
		contPre1=1;
		alert(this.pregunta1 + '.'+ " Puntaje:"+this.puntaje)
		document.getElementById('resultado1').innerHTML=this.pregunta1;
		document.getElementById('marcada1').innerHTML=formulario.pregunta1[i].value;

		document.getElementById('pregunta1').style.display='none';
		document.getElementById('pregunta2').style.display='block';
	} else {
		document.getElementById('pregunta1').style.display='none';
		document.getElementById('pregunta2').style.display='block';
	}
}

function sig2(){

	if (contPre2==0) {
		var formulario = document.forms[1];
		for (var i = 0; i < formulario.pregunta2.length; i++) {
			if (formulario.pregunta2[i].checked) {
				break;
			}
		}
		if (formulario.pregunta2[i].value==2) {
			this.pregunta2="¡Correcta!";
			this.puntaje+=1;
			document.getElementById('preNav2').style.background="green";
			this.progreso=this.progreso+(100/9);
			update();
		} else{
			this.pregunta2="Incorrecta!";
			this.puntaje+=0;
			document.getElementById('preNav2').style.background="red";
			this.progreso=this.progreso+(100/9);
			update();
		}
		contPre2=1;
		alert(this.pregunta2 + '.'+ " Puntaje:"+this.puntaje)
		document.getElementById('resultado2').innerHTML=this.pregunta2;
		document.getElementById('marcada2').innerHTML=formulario.pregunta2[i].value;

		document.getElementById('pregunta2').style.display='none';
		document.getElementById('pregunta3').style.display='block';
	} else {
		document.getElementById('pregunta2').style.display='none';
		document.getElementById('pregunta3').style.display='block';
	}
}
function sig3(){
	if (contPre3==0) {
		var formulario = document.forms[2];
		for (var i = 0; i < formulario.pregunta3.length; i++) {
			if (formulario.pregunta3[i].checked) {
				break;
			}
		}
		if (formulario.pregunta3[i].value==3) {
			this.pregunta3="¡Correcta!";
			this.puntaje+=1;
			document.getElementById('preNav3').style.background="green";
			this.progreso=this.progreso+(100/9);
			update();
		} else{
			this.pregunta3="Incorrecta!";
			this.puntaje+=0;
			document.getElementById('preNav3').style.background="red";
			this.progreso=this.progreso+(100/9);
			update();
		}
		contPre3=1;
		alert(this.pregunta3 + '.'+ " Puntaje:"+this.puntaje)
		document.getElementById('resultado3').innerHTML=this.pregunta3;
		document.getElementById('marcada3').innerHTML=formulario.pregunta3[i].value;

		document.getElementById('pregunta3').style.display='none';
		document.getElementById('pregunta4').style.display='block';
	} else {
		document.getElementById('pregunta3').style.display='none';
		document.getElementById('pregunta4').style.display='block';
	}
}
function sig4(){
	if (contPre4==0) {
		var formulario = document.forms[3];
		for (var i = 0; i < formulario.pregunta4.length; i++) {
			if (formulario.pregunta4[i].checked) {
				break;
			}
		}
		if (formulario.pregunta4[i].value==3) {
			this.pregunta4="¡Correcta!";
			this.puntaje+=1;
			document.getElementById('preNav4').style.background="green";
			this.progreso=this.progreso+(100/9);
			update();
		} else{
			this.pregunta4="Incorrecta!";
			this.puntaje+=0;
			document.getElementById('preNav4').style.background="red";
			this.progreso=this.progreso+(100/9);
			update();
		}
		contPre4=1;
		alert(this.pregunta4 + '.'+ " Puntaje:"+this.puntaje)
		document.getElementById('resultado4').innerHTML=this.pregunta4;
		document.getElementById('marcada4').innerHTML=formulario.pregunta4[i].value;

		document.getElementById('pregunta4').style.display='none';
		document.getElementById('pregunta5').style.display='block';
	} else {
		document.getElementById('pregunta4').style.display='none';
		document.getElementById('pregunta5').style.display='block';
	}
}
function sig5(){
	if (contPre5==0) {
		var formulario = document.forms[4];
		for (var i = 0; i < formulario.pregunta5.length; i++) {
			if (formulario.pregunta5[i].checked) {
				break;
			}
		}
		if (formulario.pregunta5[i].value==1) {
			this.pregunta5="¡Correcta!";
			this.puntaje+=1;
			document.getElementById('preNav5').style.background="green";
			this.progreso=this.progreso+(100/9);
			update();
		} else{
			this.pregunta5="Incorrecta!";
			this.puntaje+=0;
			document.getElementById('preNav5').style.background="red";
			this.progreso=this.progreso+(100/9);
			update();
		}
		contPre5=1;
		alert(this.pregunta5 + '.'+ " Puntaje:"+this.puntaje)
		document.getElementById('resultado5').innerHTML=this.pregunta5;
		document.getElementById('marcada5').innerHTML=formulario.pregunta5[i].value;

		document.getElementById('pregunta5').style.display='none';
		document.getElementById('pregunta6').style.display='block';
	} else {
		document.getElementById('pregunta5').style.display='none';
		document.getElementById('pregunta6').style.display='block';
	}
}
function sig6(){
	if (contPre6==0) {
		var formulario = document.forms[5];
		for (var i = 0; i < formulario.pregunta6.length; i++) {
			if (formulario.pregunta6[i].checked) {
				break;
			}
		}
		if (formulario.pregunta6[i].value==3) {
			this.pregunta6="¡Correcta!";
			this.puntaje+=1;
			document.getElementById('preNav6').style.background="green";
			this.progreso=this.progreso+(100/9);
			update();
		} else{
			this.pregunta6="Incorrecta!";
			this.puntaje+=0;
			document.getElementById('preNav6').style.background="red";
			this.progreso=this.progreso+(100/9);
			update();
		}
		contPre6=1;
		alert(this.pregunta6 + '.'+ " Puntaje:"+this.puntaje)
		document.getElementById('resultado6').innerHTML=this.pregunta6;
		document.getElementById('marcada6').innerHTML=formulario.pregunta6[i].value;

		document.getElementById('pregunta6').style.display='none';
		document.getElementById('pregunta7').style.display='block';
	} else {
		document.getElementById('pregunta6').style.display='none';
		document.getElementById('pregunta7').style.display='block';
	}
}
function sig7(){
	if (contPre7==0) {
		var formulario = document.forms[6];
		for (var i = 0; i < formulario.pregunta7.length; i++) {
			if (formulario.pregunta7[i].checked) {
				break;
			}
		}
		if (formulario.pregunta7[i].value==3) {
			this.pregunta7="¡Correcta!";
			document.getElementById('preNav7').style.background="green";
			this.progreso=this.progreso+(100/9);
			update();
		} else{
			this.pregunta7="Incorrecta!";
			document.getElementById('preNav7').style.background="red";
			this.progreso=this.progreso+(100/9);
			update();
		}
		contPre7=1;
		alert(this.pregunta7 + '.'+ " Puntaje:"+this.puntaje)
		document.getElementById('resultado7').innerHTML=this.pregunta7;
		document.getElementById('marcada7').innerHTML=formulario.pregunta7[i].value;

		document.getElementById('pregunta7').style.display='none';
		document.getElementById('pregunta8').style.display='block';
	} else {
		document.getElementById('pregunta7').style.display='none';
		document.getElementById('pregunta8').style.display='block';
	}
}
function sig8(){
	if (contPre8==0) {
		var formulario = document.forms[7];
		for (var i = 0; i < formulario.pregunta8.length; i++) {
			if (formulario.pregunta8[i].checked) {
				break;
			}
		}
		if (formulario.pregunta8[i].value==4) {
			this.pregunta8="¡Correcta!";
			this.puntaje+=1;
			document.getElementById('preNav8').style.background="green";
			this.progreso=this.progreso+(100/9);
			update();
		} else{
			this.pregunta8="Incorrecta!";
			this.puntaje+=0;
			document.getElementById('preNav8').style.background="red";
			this.progreso=this.progreso+(100/9);
			update();
		}
		alert(this.pregunta8 + '.'+ " Puntaje:"+this.puntaje)
		document.getElementById('resultado8').innerHTML=this.pregunta8;
		document.getElementById('marcada8').innerHTML=formulario.pregunta8[i].value;

		document.getElementById('pregunta8').style.display='none';
		document.getElementById('pregunta9').style.display='block';
	} else {
		document.getElementById('pregunta8').style.display='none';
		document.getElementById('pregunta9').style.display='block';
	}
}

window.onload = function() {
	animateprogress("#javascript",100);
} 

function sig9(){
	if (contPre9==0) {
		var formulario = document.forms[8];
		for (var i = 0; i < formulario.pregunta9.length; i++) {
			if (formulario.pregunta9[i].checked) {
				break;
			}
		}
		if (formulario.pregunta9[i].value==4) {
			this.pregunta9="¡Correcta!";
			this.puntaje+=1;
			document.getElementById('preNav9').style.background="green";
			this.progreso=this.progreso+(100/9);
			update();
		} else{
			this.pregunta9="Incorrecta!";
			this.puntaje+=0;
			document.getElementById('preNav9').style.background="red";
			this.progreso=this.progreso+(100/9);
			update();
		}
		alert(this.pregunta9 + '.'+ " Puntaje:"+this.puntaje)
		document.getElementById('resultado9').innerHTML=this.pregunta9;
		document.getElementById('marcada9').innerHTML=formulario.pregunta9[i].value;
		document.getElementById('puntaje').innerHTML=this.puntaje;
		if (this.puntaje>=5) {
			this.aprobado="¡Aprobaste!";
		} else {
			this.aprobado="¡Reprobaste!";
		}
		document.getElementById('aprobado').innerHTML=this.aprobado;

		document.getElementById('pregunta9').style.display='none';
		document.getElementById('resultados').style.display='block';
	}
}

function ant2(){
	document.getElementById('pregunta2').style.display='none';
	document.getElementById('pregunta1').style.display='block';
}
function ant3(){
	document.getElementById('pregunta3').style.display='none';
	document.getElementById('pregunta2').style.display='block';
}
function ant4(){
	document.getElementById('pregunta4').style.display='none';
	document.getElementById('pregunta3').style.display='block';
}
function ant5(){
	document.getElementById('pregunta5').style.display='none';
	document.getElementById('pregunta4').style.display='block';
}
function ant6(){
	document.getElementById('pregunta6').style.display='none';
	document.getElementById('pregunta5').style.display='block';
}
function ant7(){
	document.getElementById('pregunta7').style.display='none';
	document.getElementById('pregunta6').style.display='block';
}
function ant8(){
	document.getElementById('pregunta8').style.display='none';
	document.getElementById('pregunta7').style.display='block';
}
function ant9(){
	document.getElementById('pregunta9').style.display='none';
	document.getElementById('pregunta8').style.display='block';
}