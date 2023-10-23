/*Stampare a schermo un messaggio all’interno di un h1, utilizzando i data.
Bonus:
Aggiungere alla pagina un’immagine, presa anch’essa da un data.*/

const { createApp } = Vue;

createApp({
    
data()
{
    return {
        message: "Hello World",
        color: "text-orange bg-red",
        img: "img/DSC_0026_01.JPG",
        imageContainer: "size",   
    }  
}

}).mount("#container")