#include <rupertobot.h>
//Declaramos nuestro rupertobot
rupertobot ruperti;
void setup() {
//Activamos el zumbador en el pin correspondiente
ruperti.zumbador(12);
}

void loop() {
// Desarrollamos la melodía y paramos el programa con while(1)
ruperti.tono(1000,1000);
ruperti.tono(1500,500);
ruperti.tono(800,200);
ruperti.tono(1100,600);
ruperti.tono(900,400);
while(1);
}