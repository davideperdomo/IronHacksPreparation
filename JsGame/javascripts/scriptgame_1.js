// JavaScript Document

	var xpos = 0;
	var ypos = 0;
	var xlen= 20;
	var ylen= 20;
	var cx = 0;
	var cy = 0;
	/* arreglo que determina el tablero del juego, tomado del ejemplo de Andrés Cruz*/
	var maze = [									
        "##################################################",
        "#            #                                   #",
        "#   ############################### ############ #",
        "#                                           S ## #",
        "# #########  #  #################  ########   ## #",
        "#     #   # ##                 #   #             #",
        "#  #  #   # #   ########## ###   ######## ###    #",
        "#  #  #   # #   #   ###### ###   ## ####  ###  # #",
        "#  #  #   ###   ##                          #  # #",
        "#  #  #G        ############# ################## #",
        "#  #  #####     #                             #  #",
        "#     #         ###########    ###### #########  #",
        "#                                                #",
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
					cdx.fillStyle = "red";
					cdx.fillRect(x,y,xlen,ylen);
					x=x+xlen;
				}else if(matmap[i][j]==" "){
					cdx.fillStyle = "blue";
					cdx.fillRect(x,y,xlen,ylen);
					x=x+xlen;
				}else if(matmap[i][j]=="G"){
					cdx.fillStyle = "green";
					cdx.fillRect(x,y,xlen,ylen);
					x=x+xlen;
				}else if(matmap[i][j]=="S"){
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
//alert(matmap[0].length);
function message(){		
	alert(ypos+xpos);
}

	function getPosition(){							//Obtiene la posicion inicial del jugador
		for(var i=0;i<matmap.length;i++){
			for(var j=0;j<(matmap[i].length);j++){				
				if(matmap[i][j]=="G"){
					ypos=i;
					xpos=j;
				}
			}
		}
	}
	getPosition();									
	function drawPerson(){
		var canv =  document.getElementById("lienzo1");
		var cdx = canv.getContext("2d");
		cdx.fillStyle = "grey";
		cdx.fillRect(xpos*xlen,ypos*ylen,xlen,ylen);
	}
	
	function drawGame(){ 							//Dibuja el tablero, la capa y  al jugador
		drawMap();
		drawCover();	
		drawPerson();
		
	}


	/*KeyListener tomado de http://html5.litten.com/moving-shapes-on-the-html5-canvas-with-the-keyboard/*/
	function doKeyDown(evt){
		switch (evt.keyCode) {
			case 38: 								 /* Up arrow was pressed */
				if(!(matmap[ypos-1][xpos]=="#")){ 	//Determina si la siguiente casilla no es una pared, para permitir el  
					ypos = ypos - 1;				//movimiento
					break;
				}else{break;}
			case 40:  								/* Down arrow was pressed */
				if(!(matmap[ypos+1][xpos]=="#")){ 	
					ypos = ypos +1;
					
				}break;
	case 37:  										/* Left arrow was pressed */
				if(!(matmap[ypos][xpos-1]=="#")){ 	
					xpos -= 1;
					
				}break;
			case 39:  								/* Right arrow was pressed */
				if(!(matmap[ypos][xpos+1]=="#")){ 	
					xpos += 1;
								
				}break;

		}
		drawGame();									//Vuelve a pintar el juego cada vez que ingresa un evento
	}

window.addEventListener('keydown',doKeyDown,true); 
