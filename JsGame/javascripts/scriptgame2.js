// JavaScript Document

	var xpos = 0;//posicion del personaje en 
	var ypos = 0
	var xlen= 20;//tamaño de las casillas
	var ylen= 20;
	var pright= false;//booleanos de ayuda para animaciones
	var pleft= false;
	var ongame= true;
	
	/* arreglo que determina el tablero del juego, tomado del ejemplo de Andrés Cruz*/
	var maze = [									
        "##################################################",
        "#            #                                S# #",
        "#   ############################### ############ #",
        "#                                             ## #",
        "# #########  #  #################  ########   ## #",
        "#     #   # ###O               #   #             #",
        "#  #  # # # #   ########## ###   ######## ###    #",
        "#  #  # # # #   #   ###### ###   ## ####  ###  # #",
        "#  #  # #####   ##               #          #  # #",
        "#  #  #       ############### ################## #",
        "#  #  #######   #             #             #    #",
        "#  #  # ##      ######## ##   #### ## ########## #",		
        "#    ##   ##       #  ##  #   ##    # #          #",
        "#  ####   #     ##### #####    ###### ########## #",
        "#G                                               #",
        "##################################################"
    	];
	
	function mazeTomapa(){							//Convierte maze (un arreglo de strings) en un arreglo de arreglos
			var mapa = [];			
			var rowsnum = maze.length;
			for(var i =0;i<rowsnum;i++){
				mapa.push(maze[i].split(""));
			}
			
			return mapa;
		}
	
	var matmap =  mazeTomapa();	
	
	function drawMap(){									//Dibuja el mapa
		var x= 0;
		var y = 0;		
		var canv =  document.getElementById("lienzo1");
		var cdx = canv.getContext("2d");
		for(var i=0;i<matmap.length;i++){  				// Recorre la matriz matmap y dibuja dependiendo el contenido
			for(var j=0;j<(matmap[i].length);j++){				
				if(matmap[i][j]=="#"){					
					cdx.fillStyle = "grey";
					cdx.fillRect(x,y,xlen,ylen);
					cdx.strokeRect(x,y,xlen,ylen);
					x=x+xlen;
				}else if(matmap[i][j]==" "){
					cdx.fillStyle = "#EF4224";
					cdx.fillRect(x,y,xlen,ylen);
					
					x=x+xlen;
				}else if(matmap[i][j]=="G"){
					cdx.fillStyle = "orange";
					cdx.fillRect(x,y,xlen,ylen);
					x=x+xlen;
				}else if(matmap[i][j]=="S"){
					cdx.fillStyle = "cyan";
					cdx.fillRect(x,y,xlen,ylen);
					x=x+xlen;
				}else if(matmap[i][j]=="O"){
					cdx.fillStyle = "yellow";
					cdx.fillRect(x,y,xlen,ylen);
					x=x+xlen;
				}
			}
			x=0;
			y=y+ylen;
		}
		
	}

	function drawCover(){								//Dibuja una capa que cubre parte del mapa, dejando algunas casillas
		var x= 0;										//alrededor del jugador.
		var y = 0;
		var canv =  document.getElementById("lienzo1");
		var cdx = canv.getContext("2d");
		for(var i=0;i<matmap.length;i++){
			for(var j=0;j<(matmap[i].length);j++){						
						if(  (((xpos-1)==j)||((xpos)==j)||((xpos+1)==j) || ((xpos-2)==j)||((xpos+2)==j) ) && 
						     (((ypos-1)==i)||((ypos)==i)||((ypos+1)==i) || ((ypos-2)==i)||((ypos+2)==i) ) ){
							x=x+xlen
						}else{
							cdx.fillStyle = "black";
							cdx.fillRect(x,y,xlen,ylen);
							x=x+xlen;
						}							
			}
			x=0;
			y=y+ylen;
		}
	}	

	var wxpos=0;//posicion de objetos
	var wypos=0;
	
	function youWin(){										// funcion que manda una alerta cuando el personaje encuentra la meta
		getPositionPar("S");
		if((ypos==wypos)&&(xpos==wxpos)){					//obtiene la posicion de la meta y la compara con la del jugador
			alert("GANASTE! ENCONTRASE LA SALIDA DEL LABERINTO! :D");
			ongame=false;
		}
		
	}
	
	function youLose(){										// funcion que manda una alerta cuando el personaje encuentra la meta
		getPositionPar("O");
		if((ypos==wypos)&&(xpos==wxpos)){                   //obtiene la posicion de la meta y la compara con la del jugador
			alert("PERDISTE! CAISTE EN UNA TRAMPA! :(");
			ongame=false;
		}
		
	}	

	function getPositionPar(findchar){							//Obtiene la posicion inicial del jugador
		for(var i=0;i<matmap.length;i++){
			for(var j=0;j<(matmap[i].length);j++){				
				if(matmap[i][j]==findchar){
					wypos=i;
					wxpos=j;
				}
			}
		}
	}	

	function getPosition(){							//Obtiene la posicion de un objeto, el cual puede ser el obstaculo o la meta y entran como
		for(var i=0;i<matmap.length;i++){			//char en el parametro
			for(var j=0;j<(matmap[i].length);j++){				
				if(matmap[i][j]=="G"){
					ypos=i;
					xpos=j;
				}
			}
		}
	}
	getPosition();

	function drawone(){								
	var imageObj = new Image();						//Se dibuja al jugador dependiendo en la dirección que se esté moviendo
	imageObj.onload = function() {		  
      	var canvas = document.getElementById("lienzo1");
      	var context = canvas.getContext('2d');
			if(pright==true){
					context.drawImage(imageObj, 0,64 ,32,32, xpos*xlen,ypos*ylen,xlen,ylen);
			}else if(pleft==true){
				context.drawImage(imageObj, 0,32 ,32,32, xpos*xlen,ypos*ylen,xlen,ylen);
			}else{
				context.drawImage(imageObj, 0,0 ,32,32, xpos*xlen,ypos*ylen,xlen,ylen);
			}
	}
	imageObj.src = 'sprites.png';
};

	function drawGame(){ 							//Dibuja el tablero, la capa y  al jugador
		drawMap();
		drawCover();	
		drawone();			 
	}


	/*KeyListener tomado de http://html5.litten.com/moving-shapes-on-the-html5-canvas-with-the-keyboard/*/
	function doKeyDown(evt){
		switch (evt.keyCode) {
			case 87: 								 /* W arrow was pressed */
				if(!(matmap[ypos-1][xpos]=="#")){ 	//Determina si la siguiente casilla no es una pared, para permitir el  
					ypos = ypos - 1;				//movimiento
					pright = false;
					pleft = false;				
					break;
				}else{break;}
			case 83:  								/* S arrow was pressed */
				if(!(matmap[ypos+1][xpos]=="#")){ 	
					ypos = ypos +1;					//movimiento	
					pright = false;
					pleft = false;
				}break;
			case 65:  								/* A arrow was pressed */
				if(!(matmap[ypos][xpos-1]=="#")){ 	
					xpos -= 1;                     	//movimiento
					pright = false;
					pleft = true;
				}break;
			case 68:  								/* D arrow was pressed */
				if(!(matmap[ypos][xpos+1]=="#")){ 	
					xpos += 1;					   //movimiento
					pright = true;
					pleft = false;			
				}break;

		}
		if(ongame){
		drawGame();											//Vuelve a pintar el juego cada vez que ingresa un evento
		youWin();											//Revisa las posiciones
		youLose();}											//REvisa las posiciones
	}

window.addEventListener('keydown',doKeyDown,true); 			//Agrega el Event Listener a la ventana
