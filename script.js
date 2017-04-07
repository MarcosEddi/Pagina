



				/*Funcion de Capturar, Almacenar datos y Limpiar campos*/ 
	$(document).ready(function(){      $('#btnguardar').click(function(){       

									/*Captura de datos escrito en los inputs*/       
									var nom = document.getElementById("nombretxt").value; 
									var tel = document.getElementById("teltxt").value; 
									var dire = document.getElementById("diretxt").value; 
									var correo = document.getElementById("correotxt").value; 
									var cumple = document.getElementById("cumpletxt").value; 




									/*Guardando los datos en el LocalStorage*/ 
									localStorage.setItem("Nombre", nom); 
									localStorage.setItem("Telefono", tel); 
									localStorage.setItem("Direccion", dire);
									localStorage.setItem("Correo", correo);
									localStorage.setItem("Cumpleaños", cumple);

									/*Limpiando los campos o inputs*/ 
									document.getElementById("nombretxt").value = ""; 
									document.getElementById("teltxt").value = "";
									document.getElementById("diretxt").value = "";
									document.getElementById("correotxt").value = "";
									document.getElementById("cumpletxt").value = "";    

									}); 

  								}); 



	/*Funcion Cargar y Mostrar datos*/ 
	$(document).ready(function(){      $('#boton-cargar').click(function(){                      

	 /*Obtener datos almacenados*/
	  var nombre = localStorage.getItem("Nombre"); 
	  var apellido = localStorage.getItem("Apellido"); 

	  /*Mostrar datos almacenados*/    
	   document.getElementById("nombre").innerHTML = nombre; document.getElementById("apellido").innerHTML = apellido;    });   });