#include <rupertobot.h>
//Declaramos nuestro rupertobot
rupertobot ruperti;
void setup() {
//Activamos los sensores IR, indicando pines
ruperti.IR(14,15); 
}

void loop() {
//Blanco a derecha e izquierda, avanzamos
if (ruperti.blancoDerecha()&&ruperti.blancoIzquierda()){
  ruperti.avanzacm(2,10);
}
//Piso negro por la izquierda, giro 15 º a la izquierda
if (ruperti.blancoDerecha()&&ruperti.negroIzquierda()){
  ruperti.giraIzquierda(15,10);
}
//Piso negro por la derecha, giro 15 º a la derecha
if (ruperti.negroDerecha()&&ruperti.blancoIzquierda()){
  ruperti.giraDerecha(15,10);
}
}