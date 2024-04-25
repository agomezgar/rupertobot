#include <rupertobot.h>
//Declaramos a nuestro robot como ruperti 
rupertobot ruperti;

void setup() {
//Nada que especificar en setup
}

void loop() {
//Avanzo, giro y retrocedo dibujando una T
ruperto.avanza(2,10);
ruperto.izquierda(0.5,10);
ruperto.avanza(1,10);
ruperto.derecha(1,10);
ruperto.avanza(2,10);
ruperto.atras(1,10);
ruperto.derecha(0.5,10);
ruperto.avanza(2,10);
ruperto.izquierda(1,10);
//Fin de programa
while(1);
}
