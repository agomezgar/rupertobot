#include <rupertobot.h>
//Declaramos a nuestro robot como ruperti 
rupertobot ruperti;

void setup() {
//Nada que especificar en setup
}

void loop() {
//Avanzo, giro y retrocedo dibujando una T
ruperto.avanzacm(20,10);
ruperto.giraIzquierda(90,10);
ruperto.avanzacm(10,10);
ruperto.giraDerecha(180,10);
ruperto.avanzacm(20,10);
ruperto.atrascm(10,10);
ruperto.giraDerecha(90,10);
ruperto.avanzacm(20,10);
ruperto.giraIzquierda(180,10);
//Fin de programa
while(1);
}

