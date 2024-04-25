#include <rupertobot.h>
//Declaramos nuestro rupertobot
rupertobot ruperti;
void setup() {
//Activamos el zumbador y el sensor US,
//indicando pines
ruperti.zumbador(12);
ruperti.us(10,11); 
}

void loop() {
//Medimos y avisamos según distancia
if (ruperti.distancia()<10){
  ruperti.tono(1200,1000);
}else if (ruperti.distancia()<20){
  ruperti.tono(700,1000);
}
}