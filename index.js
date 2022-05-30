const canvas = document.getElementById('canvas');

//obtendremos el contexto de dibujo 2D para este lienzo
const context = canvas.getContext('2d');

//determinamos el ancho y alto del lienzo
const width = canvas.width = window.screen.width;
const height = canvas.height = window.screen.height;
console.log(height);

//establecemos el color
context.fillStyle = '#000';
context.fillRect(0,0,width,height);

//Para las columnas de letras
const columnas = Math.floor(width/ 20)+1;
const yPos = Array(columnas).fill(0); //Inicialmente, el final (coordenada y) de cada columna está en 0.
console.log(context)


/**
 * En cada cuadro, se representara un rectángulo soemitransparente con las letras
 * para que se vean las de atrás más claras
 * Para el resto de columnas movemos las coordenadas 20px hacia abajo
 */
function matrix(){

    //dibujar cuadrado semitransparente
    context.fillStyle = '#0001';
    context.fillRect(0,0,width,height);

   
    //establecemos color y tipo de letras
    context.fillStyle = '#ef476f';
    context.font = '15pt monospace';

    //para cada columna poner un caracter randon al final
    yPos.forEach((y,ind)=>{
        //generar caracter randon(3e4 + Math.random()*33) para el rango chino
        const text = String.fromCharCode(3e4 + Math.random()*33);

        //coordenada x de la columna, la coordenada y ya está dada
        const x = ind * 20;
        //rederizar el caracter
        context.fillText(text,x,y);

        //restablecer aleatoriamente el final de la columna si tiene al menos 100 px de alto
        if(y > 100 + Math.random() * 10000) yPos[ind] = 0;
        //de lo contrario, simplemente mueva la coordenada y de la columna 20px hacia abajo,
        else yPos[ind] = y + 20;
    })

}
// renderizar la animacion a 20 FPS.
setInterval(matrix, 80);