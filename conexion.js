var segundo = document.getElementById("botoncito2");

segundo.addEventListener("click", newton_);




function newton_(){	
	e=(2.7169);
	x=prompt('Ingrese el valor de x:','');
	num= (667.38/x)*(1-Math.pow(e,(-0.146843*x)))-40;
	den= (667.38*((0.146843*e**(-0.146843*x)*x)+(e**(-0.146843*x)-1)))/(x**2);
	x= x-(num/den);
	alert("***Metodo de Newton***  \n La funcion es:"+num+"\nLa derivada de la funcion es:"+den+"\nLa raiz es: "+x.toFixed(4))
	



}

	
